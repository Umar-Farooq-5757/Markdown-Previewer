import React from 'react'
import Code from './Code'
import Preview from './Preview'
import '../App.css'
import { useState } from 'react'

const Main = () => {
  const [code, setCode] = useState("");

  return (
    <main className='main'>
      <Code code={code} setCode={setCode}/>
      <Preview code={code}/>
    </main>
  )
}

export default Main
