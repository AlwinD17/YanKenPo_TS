import { useState } from 'react';
import './App.css'
import { ElementButton } from './Components/ElementButton.tsx'


export function App() {
  
  const elements:{name: string, value: number, img: string}[] = [
    {   
        name:"Piedra",
        value:1,
        img:""
    },
    {
        name:"Tijera",
        value:2,
        img:""
    },
    {
        name:"Papel",
        value:3,
        img:""
    }
  ]
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const jugadas:JSX.Element[] = elements.map((ele, index) => {
    return <ElementButton key={ele.value} element={ele} isActive = {activeButton === index} 
                          onButtonClick={() => (activeButton === index) ? setActiveButton(null) : setActiveButton(index) } />});
  return (
    <>
      <div>
        {jugadas}
      </div>
      <div>
      Elemento activo:
        {activeButton !== null ? elements[activeButton].name : 'Ninguno'}
      </div>
    </>
  )
}
