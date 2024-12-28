import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('Gold');

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0'>
          <div className='bg-white flex flex-wrap gap-3 justify-center px-3 py-2 rounded-2xl'>
            <button onClick={() => setColor("red")} className='rounded-full text-white px-4 py-1 ' style={{backgroundColor: "red"}}>Red</button>
            <button onClick={() => setColor("green")} className='rounded-full text-white px-4 py-1 ' style={{backgroundColor: "green"}}>Green</button>
            <button onClick={() => setColor("blue")} className='rounded-full text-white px-4 py-1 ' style={{backgroundColor: "blue"}}>Blue</button>
            <button onClick={() => setColor("olive")} className='rounded-full text-white px-4 py-1 ' style={{backgroundColor: "olive"}}>Olive</button>
            <button onClick={() => setColor("grey")} className='rounded-full text-white px-4 py-1 ' style={{backgroundColor: "grey"}}>Grey</button>
            <button onClick={() => setColor("yellow")} className='rounded-full text-white px-4 py-1 ' style={{backgroundColor: "yellow"}}>Yellow</button>
            <button onClick={() => setColor("pink")} className='rounded-full text-white px-4 py-1 ' style={{backgroundColor: "pink"}}>Pink</button>
            <button onClick={() => setColor("purple")} className='rounded-full text-white px-4 py-1 ' style={{backgroundColor: "purple"}}>Purple</button>
            <button onClick={() => setColor("lavender")} className='rounded-full text-white px-4 py-1 ' style={{backgroundColor: "lavender"}}>Lavender</button>
            <button onClick={() => setColor("white")} className='rounded-full text-black px-4 py-1 outline' style={{backgroundColor: "white"}}>White</button>
            <button onClick={() => setColor("black")} className='rounded-full text-white px-4 py-1 ' style={{backgroundColor: "black"}}>Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
