"use client"

import Image from "next/image";
import { SetStateAction, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/app/firebaseConfig";
import { Button } from "@/components/ui/button";
import { UploadIcon } from "lucide-react";
import { Input } from "@/components/ui/input";



// interface ChildProps {
//   onChildStateChange: (newChildState: string) => void;
// }

export default  function UploadFile  ({ onChildStateChange }:{onChildStateChange: (newChildState: string) => void} ) {
  const [file, setFile] = useState<File | null>(null); // State to store the selected file
  const [uploading, setUploading] = useState(false); // State to indicate the upload status
  const [uploadedUrl, setUploadedUrl] = useState(""); // State to store the uploaded image URL





   

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

  
     const [childState, setChildState] = useState<string>("Initial Child State");


         onChildStateChange(uploadedUrl);

  
     
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
          <p>Uploaded image:</p>
          <Image
            src={uploadedUrl}
            alt="Uploaded image"
            width={100}
            height={100}
            layout="responsive"
            className="rounded-full aspect-square"
          />
        </div>
      )}
    </div>
  );
}