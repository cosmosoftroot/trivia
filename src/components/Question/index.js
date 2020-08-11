import React from 'react'
import './styles.scss'

export function Question({question}) {
    return (
        <section className="question">
            <article className='question__txt'>{question}</article>
        </section>
    )
}
