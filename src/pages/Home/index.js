import React from 'react'
import './styles.scss'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='home'>
      <Header />
      <section className='main'>
        <article className='main__txt'>
            You will be presented
            with 10 <strong>True</strong> or <strong>False</strong> questions.
        </article>
        <article className='main__txt-enf'>
            Can you score 100%?
        </article>
        <Link to='/quiz'>
          <button className='button'>
                BEGIN
          </button>
        </Link>
      </section>
    </div>
  )
}
