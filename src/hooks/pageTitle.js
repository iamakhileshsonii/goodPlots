import React, { useEffect } from 'react'

const PageTitle = (title) => {
  return (
    useEffect(()=>{
            document.title = `${title} - GoodPlots`;
    },[title])
  )
}

export default PageTitle