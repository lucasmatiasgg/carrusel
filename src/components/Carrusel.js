import React, { Component , Children} from 'react';

class Carrusel extends Component{    
        state = {
            selectedChildren: 0,
            total : 0
        };
    
    componentDidMount(){
        const cantidadTotal = Children.count(this.props.children);
        this.setState({
            total : cantidadTotal,
        });
    }

    handleClickAnterior = ()=>{  
        const {selectedChildren,total} = this.state;
        this.setState({
            selectedChildren: selectedChildren === 0 ? total-1 : selectedChildren - 1 })
    }
    handleClickSiguiente = ()=>{
        const {selectedChildren,total} = this.state;
        this.setState({
            selectedChildren: selectedChildren === total-1 ? 0 : selectedChildren + 1 })
    };

    render(){
        const {titulo, children} = this.props;
    return(
       <div className={this.props.styleName}>
            <div>{titulo}</div>
            <div>{children[this.state.selectedChildren]}</div>
            <button onClick={this.handleClickAnterior}>Anterior</button>
            <button onClick={this.handleClickSiguiente}>Siguiente</button>
       </div>
    )
}
}

export default Carrusel;