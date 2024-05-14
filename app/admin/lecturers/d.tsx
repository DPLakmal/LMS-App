"use server";
import axios from 'axios';

export async function createTodo(prevState: {
    message: string;
}, formData: FormData) {
    const data = { todo: formData.get("todo") };

    try {
        const response = await axios.post('https://lms-app-backend-api-1.onrender.com/api/announcement', {
            text: data.todo,

        });

        return { message: `Added todo ${data.todo}` };
    } catch (error) {
        console.error("Failed to create todo:", error);
        return { message: "Failed to create todo" };
    }
}
