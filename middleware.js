import { NextResponse } from "next/server";
import { json } from "stream/consumers";

async function getUserStatus(token) { 
  
    try {
        const response = await fetch('http://localhost:3001/authenticateteacher', {
            method: 'GET',
            headers: {
                'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            
        });


        if (response.ok) {
            const data = await response.json();
                      
            console.log(data);
            if(data.msg==='teacher'){
                return 'teacher';
            }
            return 'middleware issue';
        } else {
            const data = await response.json();
            // console.log(data);
        }
    }catch(error){
        console.error('Error:', error);
    }
}

export default async function middleware(req) {
    let ses = req.cookies.get('Session');
    let TokenValue = ses?.value ;
    // console.log(TokenValue);
    
    const userStatus = await getUserStatus(TokenValue);


    let url = req.url;

    console.log(userStatus);

    if (userStatus !== 'teacher' && url.includes('/dashboard')) {
        return NextResponse.redirect('http://localhost:3000/login')
    }
    if (userStatus === 'teacher' && url.includes('/login')) {
        return NextResponse.redirect('http://localhost:3000/dashboard')
    }
}