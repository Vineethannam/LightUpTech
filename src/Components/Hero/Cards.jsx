import React from 'react';
import './Cards.css'

const Cards = () => {
  return (
   <div className="card-container">
     <h1 className='heading'>Our Projects</h1>

     <div className="box-container">

        <div className="box">
            <img src="./assets/images/IOTIMG1.jpeg" alt="" />
            <h3>Alarm Clock</h3>
            <p>This project is just one of the many. You can build your project as per the instructable or expand into more functions if you want.</p>  
        </div>
        <div className="box">
            <img src="./assets/images/IOTIMG2.jpeg" alt="" />
            <h3>ESP32 Alexa Voice Control </h3>
            <p>you can control the home appliances manually with switches and IR remote.</p>  
        </div>
        <div className="box">
            <img src="./assets/images/IOTIMG3.jpeg" alt="" />
            <h3>Biometric Attendance System</h3>
            <p>we will learn how to build based Biometric Attendance System using NodeMCU ESP8266 12E, 0.96” OLED Display & R305 Fingerprint Sensor.</p>  
        </div>
        <div className="box">
            <img src="./assets/images/IOTIMG4.jpeg" alt="" />
            <h3>NodeMCU Smart Room</h3>
            <p>LControl your fan, lights, curtains, with yout smartphone, by your motion o voice commands.</p>  
        </div>
        <div className="box">
            <img src="./assets/images/IOTIMG5.jpeg" alt="" />
            <h3>Arduino tree menu for 4X4 matrix keypad</h3>
            <p>programing a 4X4 matrix keypad and present a menu using a 20X4 LCD, here test 4 sensors,  temperature, light, sound and a potentiometer.</p>  
        </div>
        <div className="box">
            <img src="./assets/images/IOTIMG6.jpeg" alt="" />
            <h3>Digital Thermometer with Arduino & LM35</h3>
            <p>we interfaced LM35 Temperature Sensor with Arduino to design a digital thermometer. The temperature will be displayed on LCD.</p>  
        </div>
        <div className="box">
            <img src="./assets/images/IOTIMG7.jpeg" alt="" />
            <h3>Interface Stone HMI Display</h3>
            <p>Stone HMI Displays are popular choices for smart home projects due to their reliability, easy to use, and cost-effectiveness.</p>  
        </div>
        <div className="box">
            <img src="./assets/images/IOTIMG8.jpeg" alt="" />
            <h3>Distributed Monitor/Command UIs</h3>
            <p>The "Monitor and Command" VS2015CE solution provides the blocks to build distributed monitor/command UIs</p>  
        </div>
        <div className="box">
            <img src="./assets/images/IOTIMG9.jpeg" alt="" />
            <h3>E-WASTE QUADCOPTER</h3>
            <p>The advancement of Quadcopters and their capabilities over the last few years has been amazing. non-toy</p>  
        </div>

     </div>
   </div>
  )
}

export default Cards
