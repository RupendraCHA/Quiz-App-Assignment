import React, { useState } from 'react'
import { MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit"
import "./App.css"
import Quiz from './components/Quiz/Quiz.jsx'
import { data } from "./data.jsx"
import Start from './components/Start/Start.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [name, setName] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(1)
  const [timeOut, setTimeOut] = useState(false)
  const handleGoBackBtnClick = () => {
    setName(null)
    setQuestionNumber(1)
  }
  const handleQuitGame = () => {
    setTimeOut(true)
  }

  return (<>
    <ToastContainer />
    <div className='App'>

      {!name ? (
        <Start setName={setName} setTimeOut={setTimeOut} />
      ) : (<MDBRow>
        <MDBCol md="12">
          <div className='main'>
            {timeOut ? (<>
              <div className='text-center'>
                <p className='completed'>Quiz ended.</p>
                <h1 className='earned'>Hey <span>{name}</span>, You attempted {questionNumber - 1}/{data.length} Questions.</h1>
                {/* <p className='earned count'>Correct : {rightCount}, Wrong : {wrongCount}</p> */}
                <MDBBtn id='back-btn'
                  onClick={handleGoBackBtnClick}
                >Play Again</MDBBtn>
              </div>
            </>) : <>
              <div style={{ height: "100%" }}>
                <h2 className='player'>Hi <span>{name}</span>, Welcome to the Quiz: </h2>
                <Quiz
                  data={data}
                  questionNumber={questionNumber}
                  setQuestionNumber={setQuestionNumber}
                  setTimeOut={setTimeOut}
                  name={name}
                />
                <p className='answered-questions'>Answered Questions: {questionNumber - 1}/{data.length}</p>
                <MDBCol md="3" style={{ width: "100%", textAlign: "center", marginBottom: "40px" }}>
                  <MDBBtn md="3" id='back-btn-exit'
                    onClick={handleGoBackBtnClick}
                  >Exit</MDBBtn>
                  <MDBBtn md="3" id='back-btn-quit'
                    onClick={handleQuitGame}
                  >Quit</MDBBtn>
                </MDBCol>
              </div>

            </>}

          </div>

        </MDBCol>

      </MDBRow>)
      }

    </div >
  </>
  )
}

export default App
