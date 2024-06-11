import React, { useState } from 'react'
import './Them.css'

function Them() {
    const [changeThem, setChangeThem] = useState(false)
    const [moveBtn,setMoveBtn] = useState(false)
    const changeBtn =()=>{
        setChangeThem(!changeThem)
        setMoveBtn(!moveBtn)
        document.body.style.background = !changeThem ? '#D3D3D3' : 'white'
    }
  return (
 
    <div className='container'>
      <div className='btn-toggle' onClick={changeBtn}>
        <button className={`${moveBtn ? 'buttonChange' : ''}` }></button>
      </div>
    </div>
  )
}

export default Them
