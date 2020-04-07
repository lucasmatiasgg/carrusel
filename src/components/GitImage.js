import React, { Component } from 'react';

class GitImage extends Component{
    state = {
        userName : '',
        url : ''
    }
    
    handleSubmit = (event) =>{
        if(this.state.userName !== ''){
            this.setState({
                url : "https://github.com/" + this.state.userName + ".png?size=200"
            })
        }else
        {
            alert("Se debe ingresar un nombre");
        }
        event.preventDefault();
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    
    render(){
    return(
        <div>
            <form className= "FormGit" onSubmit={this.handleSubmit}>
                <label>Usuario Github
                    <input
                    name="userName"
                    placeholder="Username de github"
                    type="text"
                    autoComplete="off"
                    value={this.state.userName}
                    onChange={this.handleChange}
                    />
                </label>            
                <br/>
                <button type="submit">Enviar</button>
                <br/>
                <div>{
                    this.state.url !== '' && 
                    <img className="GitImagen" src={this.state.url} alt="imagen"/>
                }
                </div>
            </form>
       </div>
    )
}
}

export default GitImage;