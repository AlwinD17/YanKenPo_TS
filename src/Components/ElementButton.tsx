import { useState } from "react"
import "./ElementButton.css"

export const ElementButton:React.FC<{element:{name:string, value:number, img:string}, isActive:boolean, onButtonClick:() => void}> = ({element,isActive,onButtonClick}) => {
    
    const [estado, setEstado] = useState(isActive)
    return(
        <div>
            <button onClick={() => {setEstado(!estado) 
                                    onButtonClick()}} 
                    className={'buttonMove'}>
            <img src={element.img} />
            </button>
        </div>
    )
}