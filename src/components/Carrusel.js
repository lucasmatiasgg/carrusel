import React, { Children, useState} from 'react';

function Carrusel (props){    
        
    const total = Children.count(props.children);
    const[selectedChildrenIndex, setSelectedChildrenIndex] = useState(0);

    const handleClickAnterior = () => {  
            selectedChildrenIndex === 0 ? setSelectedChildrenIndex(total-1) : setSelectedChildrenIndex(selectedChildrenIndex - 1)
    }
    const handleClickSiguiente = () => {  
            selectedChildrenIndex === total-1 ? setSelectedChildrenIndex(0) : setSelectedChildrenIndex(selectedChildrenIndex + 1)
    };

    return(
       <div className={props.styleName}>
            <div className="Titulo">{props.titulo}</div>
            <div>{props.children[selectedChildrenIndex]}</div>
            <button onClick={handleClickAnterior}>Anterior</button>
            <button onClick={handleClickSiguiente}>Siguiente</button>
       </div>
    )
}

export default Carrusel;