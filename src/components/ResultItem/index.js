import React from 'react'
import { useDangerouslySetInnerHTML } from '../../hooks/useDangerouslySetInnerHTML'
import './styles.scss'
import { MdCheckCircle, MdError } from 'react-icons/md'

const SIZE = '24px'

export function ResultItem ({ question, userResponse, calification }) {
  const response = userResponse ? 'True' : 'False'
  const style = calification ? 'result__item-ok' : 'result__item-fail'

  return (
    <li className={style}>
      {useDangerouslySetInnerHTML(question)}
      <div className='result__user-response'>{response}</div>
      {calification ? (<MdCheckCircle className='result__icon-ok' size={SIZE} />) : (<MdError className='result__icon-fail' size={SIZE} />)}

    </li>
  )
}
