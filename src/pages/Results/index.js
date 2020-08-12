import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ResultItem } from '../../components/ResultItem'
import { Loading } from '../../components/Loading'
import { Scored } from '../../components/Scored'

export function Results (props) {
  const [results] = useState(props.history.location.state.data)
  const [oks, setOks] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => { setLoading(false) }, 500)
    let oksQuestions = 0

    results.map((item) => {
      if (item.calification) {
        oksQuestions = oksQuestions + 1
      }
    })
    setOks(oksQuestions)
  }, [])

  if (loading) return <Loading />

  return (
    <div>
      <Scored oks={oks} total={results.length} />
      <ul>
        {
          results.map((item, index) => {
            return (
              <ResultItem
                key={index}
                question={item.question}
                userResponse={item.userResponse}
                calification={item.calification}
              />
            )
          })
        }
      </ul>
      <Link to='/'>
        <button className='button'>PLAY AGAIN?</button>
      </Link>
    </div>
  )
}
