import React, { useState, useEffect } from 'react'
import { Loading } from '../../components/Loading'
import { Category } from '../../components/Category'
import { QuestionCard } from '../../components/QuestionCard'
import { Question } from '../../components/Question'
import { Options } from '../../components/Options'
import { ButtonNext } from '../../components/ButtonNext'
import { Warning } from '../../components/Warning'
import './styles.scss'

const apiUrl = process.env.API_URL

export function Quiz () {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userResponse, setUserResponse] = useState('')
  const [warning, setWarning] = useState(false)


  useEffect(() => {
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

  useEffect(()=>{
    setUserResponse('')
  },[currentQuestion])

  const handleNextQuestion = () =>{
    if(userResponse===""){
      setWarning(true)
      
    }
    else{
      setWarning(false)
      setCurrentQuestion(currentQuestion + 1)

    }
  }

  const handleChange = (e) =>{
    setUserResponse(e.target.value)
  }

  if (loading) return <Loading />

  return (
    <>
 
      {
        data.length && (
          <div className="quiz">
            <Category category={data[currentQuestion].category} />
            <QuestionCard>
              <Question question={data[currentQuestion].question} />
              <Options handleChange={handleChange} answer={userResponse}/>
              {warning && <Warning />}
              <ButtonNext handleNextQuestion={handleNextQuestion}/>
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
