import React from 'react'
import { useDangerouslySetInnerHTML } from '../../hooks/useDangerouslySetInnerHTML'
import './styles.scss'

export function Question ({ question }) {
  return (
    <article className='question__txt'>
      {useDangerouslySetInnerHTML(question)}
    </article>
  )
}
