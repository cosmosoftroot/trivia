import React from 'react'
import './styles.scss'

export function ButtonNext({onClick}) {
    return (
        <button className='button-next' onClick={onClick}>Next</button>
    )
}
