import React, { useRef } from 'react'
import { MDBBtn } from "mdb-react-ui-kit"

import "./Start.css"

const Start = ({ setName, setTimeOut, setNameInput }) => {

    const inputRef = useRef()

    const handleClick = (e) => {
        // setTimeOut(false)
        // setShowName(false)
        // setShowQuestion(true)
        setNameInput(false)
        inputRef.current.value && setName(inputRef.current.value)
    }
    // 
    return (
        <div className='start-container'>
            <div>
                {/* <h2>Welcome to the Quiz App</h2>
                <p>Enter your name to start the Quiz</p> */}
                <input type='text' required placeholder='Enter your name' ref={inputRef}
                    className='form-control' />
                <MDBBtn style={{ width: "100%", fontWeight: "bold" }} className='mt-2' onClick={handleClick}>
                    Start Quiz Game
                </MDBBtn>
            </div>
        </div>
    )
}

export default Start
