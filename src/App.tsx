import { useState } from 'react';
import './App.css'
import { ElementButton } from './Components/ElementButton.tsx'
import {elements} from './Data/Elementos.ts'

export function App() {
  
  const randomEleIndex:number = Math.floor(Math.random()*3)
  const resultado = (a:number | null, b:number) => {
   if (typeof a === null) return (undefined)
   else{
    const formula:number = (a - b) % 3
    return (formula === 0 ? <h2>Draw</h2> : formula === 1 || formula===-2 ? <h2>You Win</h2> : <h2>You Lose</h2>)  }
  
  } 

  const final = () =>{
    if(activeButton !== null){
      return resultado(elements[activeButton].value,elements[randomEleIndex].value)
    }
  }

  const [activeButton, setActiveButton] = useState<number | null>(null);
  const jugadas:JSX.Element[] = elements.map((ele:{name: string, value: number, img: string}, index:number) => {
    return <ElementButton key={ele.value} element={ele} isActive = {activeButton === index} 
                          onButtonClick={() => (activeButton === index) ? setActiveButton(null) : setActiveButton(index) } /> }  );
  return (
    <>
      <h1 className='title'>Yan Ken Po</h1>
      <div className='container'>

          <div className='cards'>
            {jugadas}
          </div>

        <div className='word-container'>
          <h1 className='vs-word'>VS</h1>
        </div>

        <div className='jugada'>
          <h1>Genius Bot</h1>
          {activeButton !== null && (
          <div>
            <img src={elements[randomEleIndex].img} alt={elements[randomEleIndex].name}/>
          </div>) }
        </div>
        <div className='result'>
          {final()}
        </div>
      </div>
    </>
  )
}
