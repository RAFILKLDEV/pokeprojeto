import React, { useEffect, useState } from "react";
import "./port.scss"
import { Link } from "react-router-dom";

const Portifolio = () => {

 

  useEffect( () => {
  }, [])

  return(

    <div className="page">
      <head>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </head>
      <div className="portContainer">
        <div className="headerPage">
          <div className="header">
            <div className="icons">
              <a href="https://www.linkedin.com/in/rafael-almeida-penha-75803421a/" id="linkedin"  class="fa fa-linkedin"/>
              <a href="https://github.com/RAFILKLDEV" id="github" class="fa fa-github"/>
              <a href="mailto:rafaelalmeidapenha@gmail.com?subject=Oportunidade de Emprego" id="email" class="fa fa-envelope-o"/>
              <a href="https://wa.me/5516992784358?text=Estou%20interessado%20em%20Contratar%20voce" id="whatsapp" class="fa fa-whatsapp"/>
              
            </div>
            <div className="whatsapp">Inicio</div>
            <div>Trabalhos</div>
            <div>Sobre mim</div>
          </div>

          <div className="content">
            <div>Desenvolvedor Front-End Junior</div>
            <div style={{border: "1px solid #fff", width:"50%"}}></div>
            <div>Procurando uma Oportunidade!</div>
          </div>
        </div>
        <div className="portfolio">
          <div style={{display: "flex"}}>
          <div style={{color: "rgb(255, 255, 42)", fontSize:"120%"}}>Oi</div>
          <div style={{fontSize:"120%"}}>,</div>
          </div>
          <div>Eu sou </div>
          <div style={{fontSize:"150%"}}>Rafael</div>
          <button>Me contrate!</button>
        </div>
      </div>
    </div>
    )
}

export default Portifolio