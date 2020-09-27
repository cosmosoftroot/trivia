import React, { useRef, useEffect } from 'react'
import './styles.scss'

export function Options ({ handleChange, answer }) {
  const answer1 = useRef()
  const answer2 = useRef()

  useEffect(() => {
    if (answer === '') {
      answer1.current.checked = false
      answer2.current.checked = false
    }
  }, [answer])

  return (
    <section className='options'>
      <div className='option'>
        <input ref={answer1} name='answer' id='answer1' value='true' type='radio' onChange={handleChange} />
        <label htmlFor='answer1'>True</label>
      </div>
      <div className='option'>
        <input ref={answer2} name='answer' id='answer2' value='false' type='radio' onChange={handleChange} />
        <label htmlFor='answer2'> False</label>
      </div>
    </section>
  )
}
