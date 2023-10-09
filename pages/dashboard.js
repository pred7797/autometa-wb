import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import LogoutButton from "../components/Logout";

var QRCode = require('qrcode')



export default function DashBoard() {


    return (
        <div className="main">
            <LogoutButton />
            welcome
            <canvas id="canvas"></canvas>
        </div>
    )
}