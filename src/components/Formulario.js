import React, { Component } from 'react';

class Formulario extends Component{
    
    state = {
        nombre: '',
        genero: 'Sr'
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert("Hola" + ' ' + this.state.genero + ' ' + this.state.nombre);
        this.setState({
            nombre : '',
            genero: 'Sr'
        })
        event.preventDefault();
    }
    render(){
    return(
        <form className= "Form" onSubmit={this.handleSubmit}>
            <br/>
            <select name= "genero" value={this.state.genero} onChange={this.handleChange}>
                <option value="Sr">Sr</option>
                <option value="Sra">Sra</option>
            </select>
            <br/>
            <label>Nombre
                <input
                name="nombre"
                placeholder="Ingresar nombre"
                type="text"
                autoComplete="off"
                value={this.state.nombre}
                onChange={this.handleChange}
                />
            </label>            
            <br/><br/>
            <button type="submit">Submit</button>
        </form>
    )
}
}

export default Formulario;