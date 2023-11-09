// Import the Socket.IO client library
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import io from 'socket.io-client';

var QRCode = require('qrcode')




export default function Attendance() {

    const router = useRouter();
    const selectedOption = router.query.selectedOption;

    useEffect(() => {

        // Connect to the Socket.IO server
        const socket = io('http://localhost:3002');

        function displayMessage(message) {
            const div = document.createElement('div');
            div.textContent = message;
            document.getElementById("message-container").appendChild(div);
        }

        var canvas = document.getElementById('canvas')
        QRCode.toCanvas(canvas, `${socket.id}`, function (error) {
            if (error) console.error(error)
            console.log('success!');
        })
            
        socket.on('connect', () => {
            var canvas = document.getElementById('canvas')
            QRCode.toCanvas(canvas, `${socket.id}`, function (error) {
                if (error) console.error(error)
                console.log('success!');
            })
            console.log(`connected ${socket.id}`);
            displayMessage(`connected with id ${socket.id}`);

        });
        socket.on('custom', (message) => {
            displayMessage(`message: ${message}`);
        });
    }, [])


    return (
        <div>
            <p>{selectedOption}</p>
            <canvas id="canvas"></canvas>
            <div id='message-container' ></div>
        </div>
    )
}


