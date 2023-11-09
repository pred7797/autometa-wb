import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import LogoutButton from "../components/Logout";
import DropdownSelect from "../components/DropDownSelect";
import Link from "next/link";





export default function DashBoard() {


    const TeacherOptions = [
        { label: 'PINKI VISHWAKARMA', value: '1' },
        { label: 'DIVYA PRITHAM', value: '2' },
    ];
    const ClassOptions = [
        { label: 'TE3', value: '1' },
        { label: 'TE4', value: '2' },
    ];
    const TimeStart = [
        { label: '10:15', value: '1' },
        { label: '11:15', value: '2' },
        { label: '01:00', value: '3' },
        { label: '02:00', value: '4' },
        { label: '03:00', value: '5' },
    ];
    const TimeEnd = [
        { label: '11:15', value: '2' },
        { label: '01:00', value: '3' },
        { label: '02:00', value: '4' },
        { label: '03:00', value: '5' },
        { label: '04:00', value: '1' },
    ];


    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };


    return (
        <div className="main-dashboard">
            <LogoutButton />
            welcome
            <DropdownSelect options={ClassOptions} onChange={handleSelectChange} />
            <DropdownSelect options={TimeStart} onChange={handleSelectChange} />
            <DropdownSelect options={TimeEnd} onChange={handleSelectChange} />
            <DropdownSelect options={TeacherOptions} onChange={handleSelectChange} />
            <Link href={`/attendance?selectedOption=${selectedOption}`}>
                create sesseion
            </Link>
        </div>
    )
}