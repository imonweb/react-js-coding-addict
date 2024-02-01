import { v4 as uuidv4 } from 'uuid'
import { FaAngleDoubleRight } from 'react-icons/fa'

const Duties = ( {duties} ) => {

  // console.log(duties);
  // const id = uuidv4()
  return (
    <>
      {duties.map((duty, index) => {
        const id = uuidv4()
        console.log(id)
        return (
          <div key={id} className='job-desc'>
            <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
            <p>{duty}</p>
          </div>
        )
      })}
    </>
  )
}

export default Duties