import React, { useState, useEffect } from 'react'
import "./Timer.css"


const Timer = (props) => {

    const { setTimeOut, questionNumber } = props

    const [timer, setTimer] = useState(30)

    useEffect(() => {
        if (timer === 0) return setTimeOut(true)

        const interval = setInterval(() => {
            setTimer((prev) => prev - 1)
        }, 1000)

        return () => clearInterval(interval)

    }, [timer, setTimeOut])

    useEffect(() => {
        setTimer(30)
    }, [questionNumber])


    return timer
}

export default Timer
