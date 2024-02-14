import React from 'react'
import sublinks from './data'
import { useGlobalContext } from './Context'

const Submenu = () => {
  const {pageId} = useGlobalContext()
  const currentPage = sublinks.find((item) => item.pageId === pageId)
  console.log(currentPage);
  return (
    <div className='submenu'>
      <h5>{currentPage?.page}</h5>
    </div>
  )
}

export default Submenu