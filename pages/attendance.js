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

        function generateQRCode() {
            const canvas = document.getElementById('canvas');
            QRCode.toCanvas(canvas, `${socket.id}`, function (error) {
                if (error) console.error(error);
                console.log('QR Code generated successfully!');
            });
        }

        const handleConnect = () => {
            generateQRCode();
            console.log(`Connected with id ${socket.id}`);
            displayMessage(`Connected with id ${socket.id}`);
        };

        // Event listener for custom messages
        const handleCustomMessage = (message) => {
            displayMessage(`* ${message}`);
        };

        // Add event listeners
        socket.on('connect', handleConnect);
        socket.on('custom', handleCustomMessage);

        // Generate QR code on initial mount
        generateQRCode();

        // Cleanup function to remove event listeners and disconnect socket
        return () => {
            socket.off('connect', handleConnect);
            socket.off('custom', handleCustomMessage);
            socket.disconnect();
        };
    }, [])


    return (
        <div>
            <p>{selectedOption}</p>
            <canvas id="canvas"></canvas>
            <div id='message-container' ></div>
        </div>
    )
}


