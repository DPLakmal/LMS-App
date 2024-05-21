"use client";
import { useEffect, useState } from "react";

// Define an interface for the data structure
interface ResultData {
    code: string;
    title: string;
    year: string;
    // Add other necessary fields here
}

const Results: React.FC = () => {
    const [data, setData] = useState<ResultData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://lms-ati-api.vercel.app/api/pastpapers?code=1032`); // Replace with your actual API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: ResultData = await response.json();
                setData(data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>No results found</div>;
    }

    console.log(data);

    return (
        <>
            <div className="m-3 text-2xl font-bold">HNDIT - Result</div>
            <div>
                <div className="m-2 p-2 border rounded">
                    {/* Render your result data here */}
                    <div>Code: {data.code}</div>
                    <div>Title: {data.title}</div>
                    <div>Year: {data.year}</div>
                    {/* Add other necessary fields */}
                </div>
            </div>
        </>
    );
}

export default Results;
