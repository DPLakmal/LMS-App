import { Badge } from "@/components/ui/badge";

const DisplayLecturerList = () => {
    const l = [
        { name: 'Mr Thamara Waidyarathna', status: 'Visiting' },
        { name: 'MS Nimasha', status: 'Active' },
        { name: 'Ms Chandima', status: 'Inactive' },
        { name: 'Mr Samarasekara', status: 'Active' },
        { name: 'Ms Athtanakava', status: 'Inactive' },
        { name: 'Mr Kasun', status: 'Visiting' },
        { name: 'Mr Kasun', status: 'Active' },
        { name: 'Mr Samarasekara', status: 'Visiting' }
    ]



    return (<div className="space-y-3">
        {l.map((lecturer, index) => (

            <div className="flex flex-row gap-3 justify-between" key={index}>
                <div className="">{lecturer.name}</div>
                <Badge variant="outline">{lecturer.status}</Badge>

            </div>
        ))}

    </div>
    );
}

export default DisplayLecturerList;