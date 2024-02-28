import React from 'react'
import {createClient} from 'contentful'

const client = createClient({
  space: 'y7yuwbyznfwr',
  environment: 'master',
  accessToken: '61AJ2TITmMxLY-VhzkvWaC73bjfWRRxhPnycwwwMuDk'
})

client.getEntries({content_type: 'projects'}).then((response) => console.log(response))

// const fetchProjects = () => {
//   return (
//     <div>fetchProjects</div>
//   )
// }

// export default fetchProjects