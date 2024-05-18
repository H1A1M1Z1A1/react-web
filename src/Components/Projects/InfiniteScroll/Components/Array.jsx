import React, { useEffect, useState } from 'react'

import Child from './Child'





const Array = () => {
  const inistate=['Bruce','wayne']

    const [person,setPerson]=useState(inistate)
    const [count,setCount]=useState(0)
    const [name,setName]=useState('hamza')
    const [cal,setCal]=useState(0)

    const handleClick=()=>{
        // person.push('hamza')
        // person.push('husain')
        // const newPerson=[...person]
        // newPerson.push('hamza')
        // newPerson.push('husain')
        // setPerson(newPerson)
        // setCount(count+1)
        setName('husain')
        // console.log(name);
    }


    function tick(){
      setCount(count+1)
    }
        console.log('render');

        document.title=count


        // setInterval(tick,1000)
        // useEffect(()=>{
        //   // return()=>{
        //   //   clearInterval(interval)
        //   // }
        // })

  return (
    <div>
        <h1>Hi array</h1>
        <button 
        onClick={handleClick}>

click
        </button>
        {/* {person.map((p,i)=>(
                <ul key={i} >{p}</ul>
            ))} */}
            Count={count}
            Name ={name}
            {/* <MemoizedChild   /> */}
         
<Child name={name} setName={setName}></Child>           
    </div>
  )
}

export default Array
