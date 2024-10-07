import React, { useRef } from 'react'
import { MDBBtn } from "mdb-react-ui-kit"

import "./Start.css"

const Start = ({ setName, setTimeOut }) => {

    const inputRef = useRef()

    const handleClick = () => {
        setTimeOut(false)
        inputRef.current.value && setName(inputRef.current.value)
    }


    return (
        <div className='start-container'>
            <div>
                <h2>Welcome to the Quiz App</h2>
                <p>Enter your name to start the Quiz</p>
                <input type='text' required placeholder='Enter your name'
                    ref={inputRef} className='form-control' />
                <MDBBtn style={{ width: "100%", fontWeight: "bold" }} className='mt-2' onClick={handleClick}>
                    Start Quiz Game
                </MDBBtn>
            </div>
            <div>
                <img src='https://res.cloudinary.com/dvxkeeeqs/image/upload/v1728239456/Quiz_App_Qr_Code_ezjhsq.png'
                    alt='QRCodeImageForWebsite' />
                <p>Scan the QR code to start the Quiz on Mobile/Other Devices</p>
            </div>
        </div>
    )
}

export default Start
