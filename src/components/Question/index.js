import React from 'react'
import './styles.scss'
import {Options} from  '../Options'

export function Question({question}) {

    const createTxt = (txtFromApi) =>{
        return {__html: txtFromApi}
    }
    
    const formatTxt = (question) => {
        return <div dangerouslySetInnerHTML={createTxt(question)}/>
    }


    return <article className='question__txt'>{formatTxt(question)}</article>
}
