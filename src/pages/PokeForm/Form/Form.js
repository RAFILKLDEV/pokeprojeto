import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/Header/Header";
import UiContainer from "../../../components/UI/Container/Container";
import "./Form.css"

const initialValue = {
    nameUser:"Rafael",
    alcunha:"",
    email:"",
    imagemUrl:"",
    password:"3333"
}

const Pages_PokeForm_Form = () => {
    const { id } = useParams()
    const [values, setValues] = useState({initialValue})

    function onChange(event) {
        const { name, value } = event.target
        console.log({name, value})

        setValues({...values, [name]: value})
    }

    function onSubmit(event) {
        event.preventDefault()
    }

    return(
        
        <UiContainer >
            <Header></Header>
            <div className="menu">
            FORM
            { id && <div>id: {id}</div> }
            <form onSubmit={onSubmit}>
                <div className="pokemon-form__index">
                    <label htmlFor="nameUser">Nome</label>
                    <input id="nameUser" name="nameUser" type="text" onChange={onChange}></input>
                </div>
                <div className="pokemon-form__index">
                    <label htmlFor="alcunha">Nick</label>
                    <input id="alcunha" name="alcunha" type="text" onChange={onChange}></input>
                </div>
                <div className="pokemon-form__index">
                    <label htmlFor="imagemUrl">Imagem Perfil</label>
                    <input id="imagemUrl" name="imagemUrl" type="" onChange={onChange}></input>
                </div>
                <div className="pokemon-form__index">
                    <label htmlFor="email">E-mail</label>
                    <input id="email" name="email" type="text" onChange={onChange}></input>
                </div>
                <div className="pokemon-form__index">
                    <label htmlFor="password">Senha</label>
                    <input id="password" name="password" type="email" onChange={onChange}></input>
                </div>
                <div>
                    <button className="pokemon-form__index" type="submit">Salvar</button>
                </div>
            </form>
            </div>
        </UiContainer>
        
    )
}

export default Pages_PokeForm_Form