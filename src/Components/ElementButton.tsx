import { useState } from "react"

export const ElementButton:React.FC<{element:{name:string, value:number, img:string}, isActive:boolean, onButtonClick:() => void}> = ({element,isActive,onButtonClick}) => {
    
    const [estado, setEstado] = useState(isActive)
    return(
        <div>
            <button onClick={() => {setEstado(!estado) 
                                    onButtonClick()}} 
                    className={'buttonMove'}>
            {element.name}
            </button>
        </div>
    )
}