import React from 'react'
import './styles.scss'

export function Scored ({ oks = 0, total = 0 }) {
  return (
    <section className='scored'>
      <article className='scored__txt'>You scored</article>
      <article className='scored__txt'>{`${oks} / ${total}`}</article>
    </section>
  )
}
