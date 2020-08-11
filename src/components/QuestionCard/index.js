import React from 'react'
import './styles.scss'

export function QuestionCard({children}) {
    return (
        <section className='question-card'>
            {children}
        </section>
    )
}
