import React, { useState, useEffect } from 'react'
import { MDBRow, MDBCol, MDBListGroup, MDBBtn } from "mdb-react-ui-kit"
import "./App.css"
import Quiz from './components/Quiz/Quiz.jsx'
import { data, prizeMoney } from "./data.jsx"
import Timer from './components/Timer/Timer.jsx'
import Start from './components/Start/Start.jsx'

const App = () => {

  const [name, setName] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(1)
  const [timeOut, setTimeOut] = useState(false)
  const [earned, setEarned] = useState("₹ 0")


  const handleGoBackBtnClick = () => {
    setName(null)
    setQuestionNumber(1)
    setEarned("₹ 0")
  }

  useEffect(() => {
    questionNumber > 1 && setEarned(prizeMoney.find((item) => item.id === questionNumber - 1).amount)
  }, [questionNumber])

  return (
    <div className='App'>
      {!name ? (
        <Start setName={setName} setTimeOut={setTimeOut} />
      ) : (<MDBRow>
        <MDBCol md="12">
          <div className='main'>
            {timeOut ? (<>
              <div className='text-center'>
                <h1 className='earned'>Hey {name}, You Answered Questions: {questionNumber - 1}/{data.length}</h1>
                <MDBBtn id='back-btn'
                  onClick={handleGoBackBtnClick}
                >Go Back to Enter another name / Play Again</MDBBtn>
              </div>
            </>) : <>
              {/* <div style={{ height: "50%", position: "relative" }}>
                <div className='timer'>
                  <Timer questionNumber={questionNumber}
                    setTimeOut={setTimeOut} />
                </div>
              </div> */}
              <div style={{ height: "100%" }}>
                <Quiz
                  data={data}
                  questionNumber={questionNumber}
                  setQuestionNumber={setQuestionNumber}
                  setTimeOut={setTimeOut}
                />

              </div>
              <p className='answered-questions'>Answered Questions: {questionNumber - 1}/{data.length}</p>
            </>}
            {/* <div style={{ height: "50%", position: "relative" }}>
              <div className='timer'>
                <Timer questionNumber={questionNumber}
                  setTimeOut={setTimeOut} />
              </div>
            </div> */}
            {/* <div style={{ height: "50%" }}>
              <Quiz
                data={data}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                setTimeOut={setTimeOut}
              /> */}

            {/* </div>
          <p className='answered-questions'>Answered Questions: {questionNumber - 1}/{data.length}</p> */}

          </div>

        </MDBCol>
        {/* <MDBCol md="3" className='money'>
          <MDBListGroup className='money-list'>
            <MDBRow>
              <span className='mb-2'>
                <MDBBtn
                  style={{ float: "right" }}
                  className='mx-2'
                  color='light'
                  onClick={() => setTimeOut(true)}>
                  Quit
                </MDBBtn>
                <MDBBtn
                  style={{ float: "right" }}
                  onClick={() => {
                    setEarned("₹ 0")
                    setName(null)
                    setQuestionNumber(1)
                  }}>
                  Exit
                </MDBBtn>
              </span>
              <MDBCol md="6">Name: {name}</MDBCol>
              <MDBCol md="6">Total Earned: {earned}</MDBCol>
            </MDBRow>
            <hr />
            {prizeMoney.map((item, index) => (
              <>
                <li key={index} className={questionNumber === item.id ? "item active" : "active"}>
                  <h5 className='amount'>{item.amount}</h5>
                </li>
              </>
            ))}
          </MDBListGroup>
        </MDBCol> */}

      </MDBRow>)
      }

    </div >
  )
}

export default App
