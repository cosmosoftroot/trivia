import React from 'react'
import './styles.scss'

export function Options({handleChange}) {
    return (
        <section className='options'>
            <div className='option'>
                <input name='answer' id='answer1' value='true' type="radio" onChange={handleChange}/>
                <label htmlFor='answer1' >True</label>
            </div>
            <div className='option'>
                <input name='answer' id='answer2' value='false' type="radio" onChange={handleChange}/>
                <label htmlFor='answer2'> False</label>                
            </div>
        </section>
    )
}
