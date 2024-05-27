import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

type FormValues = {
    link: string;
    title: string;
};

const FormSchema = z.object({
    link: z.string().min(2, {
        message: "Link must be at least 2 characters.",
    }),
    title: z.string().min(1, {
        message: "Title is required.",
    })
});

type Props = {
    subjectCode: string;
    weekId: string;
};

export const InputForm: React.FC<Props> = ({ subjectCode, weekId }) => {
    const [isLoading, setIsLoading] = useState(false);
    console.log(subjectCode);
    console.log(weekId);


    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            link: "",
            title: ""
        }
    });

    const onSubmit = async (data: FormValues) => {
        console.log(data);

        try {
            setIsLoading(true);
            const response = await fetch(`https://lms-ati-api.vercel.app/api/${subjectCode}/weeks?week_no=${weekId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: data.title,
                    link: data.link,
                    type: 'lms' // You can change this to 'lecturer' if needed
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log(responseData);

            reset({
                link: "",
                title: ""
            });
            toast({
                title: "Form Submitted",
                description: "Your form has been submitted successfully.",
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            toast({
                title: "Error",
                description: "An error occurred while submitting the form.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 space-y-6">
            <div>
                <label htmlFor="">Title of lecture file Name</label>
                <Input
                    {...register("title")}
                    placeholder="Enter Title"
                />
                {errors.title && <span>{errors.title.message}</span>}
            </div>
            <div>
                <label htmlFor="">URL of file </label>
                <Input
                    {...register("link")}
                    placeholder="Enter URL"
                />
                {errors.link && <span>{errors.link.message}</span>}
            </div>
            <Button type="submit" disabled={isLoading}>
                {isLoading ? "Submitting..." : "Submit"}
            </Button>
        </form>
    );
};
