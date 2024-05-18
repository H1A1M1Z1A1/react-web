import React from 'react'

const child = ({name,setName}) => {
  console.log('child')
  return (
    <div>
      Child
      {name}
      {/* {setName('hamza1')} */}

      <button onClick={()=>setName('hamza1')}>click to change name</button>
     
    </div>
  )
}

export default React.memo(child)
