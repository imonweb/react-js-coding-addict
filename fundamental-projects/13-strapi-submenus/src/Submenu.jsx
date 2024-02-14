import React from 'react'
import sublinks from './data'
import { useGlobalContext } from './Context'
import { useRef } from 'react'

const Submenu = () => {
  const {pageId, setPageId} = useGlobalContext()
  const currentPage = sublinks.find((item) => item.pageId === pageId)
  // console.log(currentPage);

  const submenuContainer = useRef(null)

  const handleMouseLeave = (event) => {
    const submenu = submenuContainer.current;
    const { left, right, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = event;

    if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };

  return (
    <div
      className={currentPage ? 'submenu show-submenu' : 'submenu'}
      onMouseLeave={handleMouseLeave}  
    >
      <h5>{currentPage?.page}</h5>
      <div 
        className='submenu-links'
        style={{gridTempleColumns:currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr'}}
        >
        {currentPage?.links?.map((link) => {
          const {id, url, label, icon} = link 
          return (
            <a href={url} key={id}>
              {icon} {label}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Submenu