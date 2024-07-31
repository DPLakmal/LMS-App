import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { storage } from "@/app/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { UploadIcon } from "lucide-react";

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


    const [uploadedUrl, setUploadedUrl] = useState(""); 

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
     
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
                    link: uploadedUrl,
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
                <label htmlFor="">Title of lecture file Name :</label>
                <Input
                    {...register("title")}
                    placeholder="Enter Title"
                />
                {errors.title && <span>{errors.title.message}</span>}
            </div>
            <div>
            <label htmlFor="">Select File :</label>
                {/*     <Input
                    {...register("link")}
                    placeholder="Enter URL"
                /> */}

<UploadFile />
           
                {errors.link && <span>{errors.link.message}</span>}
            </div>
            <Button type="submit" disabled={isLoading}>
                {isLoading ? "Submitting..." : "Submit"}
            </Button>
        </form>
    );



    
 function UploadFile  () {
        const [file, setFile] = useState<File | null>(null); // State to store the selected file
        const [uploading, setUploading] = useState(false); // State to indicate the upload status
       // State to store the uploaded image URL
      
        const handleFileChange = (event: any) => {
          setFile(event.target.files[0]); // Set the selected file
        };
      
        const handleUpload = async () => {
          if (!file) return; // Return if no file is selected
      
          setUploading(true); // Set uploading state to true
      
          const storageRef = ref(storage, `images/${file.name}`); // Create a reference to the file in Firebase Storage
      
          try {
            await uploadBytes(storageRef, file); // Upload the file to Firebase Storage
            const url:any = await getDownloadURL(storageRef); // Get the download URL of the uploaded file
            setUploadedUrl(url);
           // Set the uploaded image URL
      
        
           
           
            console.log("File Uploaded Successfully");
          } catch (error) {
            console.error('Error uploading the file', error);
          } finally {
            setUploading(false); // Set uploading state to false
          }
         
        };
      
      
      
        return (
          <div className="flex flex-col gap-y-5 items-center bg-slate-200 p-4 rounded-lg">
            <Input type="file"  onChange={handleFileChange}  className="bg-neutral-100"/> {/* File input to select the image */}
            <Button onClick={handleUpload} disabled={uploading} className={`gap-3 ${file? "flex" : "hidden"}`}>
              <UploadIcon/>
              {uploading ? "Uploading..." : "Upload Image"} {/* Button to upload the image */}
            </Button>
            {uploadedUrl && (
              <div className="container flex items-center justify-center" >
                <p>{file?.name}</p>
                {/* <p>Uploaded image:</p> */}
                {/* <Image
                  src={uploadedUrl}
                  alt="Uploaded image"
                  width={100}
                  height={100}
                  layout="responsive"
                  className="rounded-full aspect-square"
                /> */}
              </div>
            )}
          </div>
        );
       
      }

};



