import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import QRCode from 'qrcode';

export default function Attendance() {
    const router = useRouter();
    const selectedOption = router.query.selectedOption;

    const [messages, setMessages] = useState([]);

    const handleDeleteMessage = (id) => {
        setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
    };

    useEffect(() => {
        const socket = io('http://localhost:3002');

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
            setMessages((prevMessages) => [...prevMessages, { content: `Connected with id ${socket.id}`, id: Date.now() }]);
        };

        const handleCustomMessage = (message) => {
            const newMessage = { content: `${message}`, id: Date.now() };
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        };

        socket.on('connect', handleConnect);
        socket.on('custom', handleCustomMessage);

        generateQRCode();

        return () => {
            socket.off('connect', handleConnect);
            socket.off('custom', handleCustomMessage);
            socket.disconnect();
        };
    }, []);

    return (
        <div>
            <p>{selectedOption}</p>
            <canvas id="canvas"></canvas>
            <div id="message-container">
                {messages.map((message) => (
                    <div key={message.id} className="message-cell">
                        <button className='cross-button' onClick={() => handleDeleteMessage(message.id)}>X</button>
                        <span>{message.content}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
