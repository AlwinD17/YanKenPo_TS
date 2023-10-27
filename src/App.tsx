import { useState } from 'react';
import './App.css'
import { ElementButton } from './Components/ElementButton.tsx'


export function App() {
  
  const randomEleIndex:number = Math.floor(Math.random()*3)
  const resultado = (a:number | null, b:number) => {
   if (typeof a === null) return (undefined)
   else{
    const formula:number = (a - b) % 3
    return (formula === 0 ? 'Draw' : formula === 1 ? 'You win' : "You lose")  }
  
  } 
  const elements:{name: string, value: number, img: string}[] = [
    {   
        name:"Piedra",
        value:1,
        img:""
    },
    {
      name:"Papel",
      value:3,
      img:""
    },
    {
        name:"Tijera",
        value:2,
        img:""
    }
  ]
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const jugadas:JSX.Element[] = elements.map((ele, index) => {
    return <ElementButton key={ele.value} element={ele} isActive = {activeButton === index} 
                          onButtonClick={() => (activeButton === index) ? setActiveButton(null) : setActiveButton(index) } /> }  );
  return (
    <>
      <div>
        {jugadas}
      </div>
      <div>
      Elemento activo:
        {activeButton !== null ? elements[activeButton].name : 'Ninguno'}
      </div>
      <div>
        {activeButton !== null && (
        <div>
          PC: {elements[randomEleIndex].name}
          <br/>
          Resultado: {resultado(elements[activeButton].value, elements[randomEleIndex].value) }
        </div>) }
      </div>
    </>
  )
}
