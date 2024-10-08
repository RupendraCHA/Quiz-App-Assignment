import React, { useRef } from 'react'
import { MDBBtn } from "mdb-react-ui-kit"

import "./Start.css"

const Start = ({ name, setName, setTimeOut, setNameInput }) => {

    const inputRef = useRef()

    const handleClick = () => {
        // setTimeOut(false)
        // setShowName(false)
        // setShowQuestion(true)
        if (name !== null) {
            setNameInput(false)
        } else {
            alert("Enter Your Name")
        }
    }
    // 
    return (
        <div className='start-container'>
            <div>
                {/* <h2>Welcome to the Quiz App</h2>
                <p>Enter your name to start the Quiz</p> */}
                <input type='text' required placeholder='Enter your name' onChange={(e) => setName(e.target.value)}
                />
                <MDBBtn style={{ width: "60%", fontWeight: "bold" }} className='mt-2' onClick={handleClick}>
                    Start Quiz Game
                </MDBBtn>
            </div>
        </div>
    )
}

export default Start
