import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function DashBoard() {

    // const [teacherName, setTeacherName] = useState();
    // useEffect(() => {
    //     fetch('http://localhost:3001/authenticateteacher', {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': `Bearer ${TokenValue}`,
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             if (data.success) {
    //                 setTeacherName(data.teacherName);
    //             } else {
    //                 // Handle the case where the request failed or the user is not a teacher
    //                 console.error('Failed to fetch teacher name');
    //             }
    //         })
    //         .catch((error) => {
    //             console.error('Error:', error);
    //         });

    // }, []);



    // let ses = Cookies.get('Session');
    // console.log(ses);
    // let TokenValue = ses?.value;


    return (
        <div className="main">
            welcom
            {/* {teacherName && <p>{teacherName}</p>} */}
        </div>
    )
}