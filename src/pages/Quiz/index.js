import React, { useState, useEffect } from 'react'
import { Loading } from '../../components/Loading'
import { Category } from '../../components/Category'
import { Question } from '../../components/Question'
import './styles.scss'

const apiUrl = process.env.API_URL

export function Quiz () {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)

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

  if (loading) return <Loading />

  return (
    <>
 
      {
        data.length && (
          <div className="quiz">
          <Category category={data[currentQuestion].category} />
          <Question question={data[currentQuestion].question}/>
          </div>
        )
      }
    </>
  )
}
