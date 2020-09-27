import React from 'react'

export function useDangerouslySetInnerHTML (question) {
  const createTxt = (txtFromApi) => {
    return { __html: txtFromApi }
  }

  const formatTxt = (question) => {
    return <div dangerouslySetInnerHTML={createTxt(question)} />
  }

  return <>{formatTxt(question)}</>
}
