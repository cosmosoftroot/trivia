import React from 'react'
import './styles.scss'

export function Category ({ category }) {
  return (
    <section className='category'>
      <article className='category__txt'>{category}</article>
    </section>
  )
}
