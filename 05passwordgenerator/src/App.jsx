import { useState,useRef,useCallback ,useEffect} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState('')
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const passwordRef = useRef(null)

  function copyPasswordToClipboard(){
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  const generatePassword = useCallback(() => {

    let number = '0123456789'
    let char = '!@#$%^&*()_'
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    if(numberAllowed)
      str += number
    if(charAllowed)
      str += char

    let password = ''

    for (let i = 0; i < length; i++) {
      password += str.charAt(Math.floor(Math.random() * str.length))
    }

    setPassword(password)


  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
      </div>
      <div
      className='flex text-sm gap-x-2'
      >
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={8}
          max={24}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          name="" 
          id=""
           />
           <label htmlFor="length">Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }}
           name=""
          id="" />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }}
           name=""
          id="" />
          <label htmlFor="charInput">Character</label>
        </div>
        
      </div>
    </div>
  )
}

export default App
