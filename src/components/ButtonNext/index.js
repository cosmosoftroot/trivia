import React from 'react'
import './styles.scss'

export function ButtonNext({handleNextQuestion}) {
    return (
        <button className='button-next' onClick={handleNextQuestion}>Next</button>
    )
}
