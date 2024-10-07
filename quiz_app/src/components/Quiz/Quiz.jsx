import React, { useState, useEffect } from 'react'
import useSound from "use-sound"
import play from '../../sounds/play.mp3'
import correct from '../../sounds/correct.mp3'
import wrong from '../../sounds/wrong.mp3'
import "./Quiz.css"

const Quiz = (props) => {

    const { data, questionNumber, setQuestionNumber, setTimeOut } = props

    const [question, setQuestion] = useState(null)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [className, setClassName] = useState("answer")

    const [letsPlay] = useSound(play)
    const [correctAnswer] = useSound(correct)
    const [wrongAnswer] = useSound(wrong)

    useEffect(() => {
        setQuestion(data[questionNumber - 1])
    }, [data, questionNumber])

    useEffect(() => {
        letsPlay()
    }, [letsPlay])

    const delay = (duration, callback) => {
        setTimeout(() => {
            if (questionNumber === data.length) {
                callback()
                return setTimeOut(true)
            } else {
                callback()
            }

        }, duration)
    }

    const handleClick = (item) => {
        setSelectedAnswer(item)
        setClassName("answer active")

        // setTimeOut(() => {
        //     setClassName(item.correct ? "answer correct" : "answer wrong")
        // }, 3000)
        delay(3000, () => {
            setClassName(item.correct ? "answer correct" : "answer wrong")
        })

        delay(5000, () => {
            if (item.correct) {
                correctAnswer()
                setQuestionNumber((prev) => prev + 1)
                setSelectedAnswer(null)
            }
            else {
                wrongAnswer()
                // setQuestionNumber((prev) => prev + 1)
                // setSelectedAnswer(null)
                setTimeOut(true)
            }
        })
    }

    return (
        <div className='quiz'>
            <div className='question'>
                {question?.question}
            </div>
            <div className='answers'>
                {question?.answers.map((item, index) => (
                    <div key={index} className={selectedAnswer === item ? className : 'answer'}
                        onClick={() => !selectedAnswer && handleClick(item)}
                    >
                        {item.text}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Quiz
