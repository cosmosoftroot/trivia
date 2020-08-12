import React, { useState } from 'react'
import { ResultItem } from '../../components/ResultItem'

export function Results (props) {
  const [results] = useState(props.history.location.state.data)
  return (
    <div>
      <h1>Your scored</h1>
      <ul>
        {
          results.map((item, index) => {
            console.log(item.calification)
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
    </div>
  )
}
