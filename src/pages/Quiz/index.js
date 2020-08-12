import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Loading } from '../../components/Loading'
import { Category } from '../../components/Category'
import { QuestionCard } from '../../components/QuestionCard'
import { Question } from '../../components/Question'
import { Options } from '../../components/Options'
import { ButtonNext } from '../../components/ButtonNext'
import { Warning } from '../../components/Warning'
// import {useSessionStorage} from '../../hooks/useSessionStorage'

import './styles.scss'

const apiUrl = process.env.API_URL

export function Quiz () {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userResponse, setUserResponse] = useState('')
  const [warning, setWarning] = useState(false)
  const [results, setResults] = useState([])
  const history = useHistory()

  // const [setLocalStorage, clearSessionStorage] = useSessionStorage();

  useEffect(() => {
    // clearSessionStorage()
    setLoading(true)
    window.fetch(apiUrl)
      .then(res => {
        return res.json()
      })
      .then(response => {
        setData(response.results)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    setUserResponse('')
  }, [currentQuestion])

  const handleNextQuestion = () => {
    if (userResponse === '') {
      setWarning(true)
    } else {
      setWarning(false)
      const correctAnswer = (data[currentQuestion].correct_answer.toLowerCase() === 'true')
      const calification = (correctAnswer === userResponse)
      const resultItem = {
        question: data[currentQuestion].question,
        userResponse: userResponse,
        calification: calification
      }

      setResults([...results, resultItem])

      if (currentQuestion < data.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        history.push({
          pathname: '/results',
          state: { data: results }
        })
      }
    }
  }

  const handleChange = (e) => {
    const userResponseBoolean = (e.target.value === 'true')
    setUserResponse(userResponseBoolean)
  }

  if (loading) return <Loading />

  console.log(results)
  return (
    <>

      {
        data.length && (
          <div className='quiz'>
            <Category category={data[currentQuestion].category} />
            <QuestionCard>
              <Question question={data[currentQuestion].question} />
              <Options handleChange={handleChange} answer={userResponse} />
              {warning && <Warning />}
              <ButtonNext handleNextQuestion={handleNextQuestion} />
            </QuestionCard>

            <section className='quiz__count'>
              {`${currentQuestion + 1} of ${data.length}`}
            </section>
          </div>
        )
      }
    </>
  )
}
