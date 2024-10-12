import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from "react-router-dom";
import ModalComponente from './modal';


function Home() {
  

  async function datosRecibidos(datos) {
    console.log("Dato decibido: ", datos);
  }

    
  return(
    <div className='text-center container my-5'>
      
      <h1 className='my-5'>HOME</h1>


      {/* Importamos modal */}
      <ModalComponente datoUno={"Dato 1"} datoDos={"Dato 2"} datosRecibidos={datosRecibidos} />

    </div>
  )
}



export default Home;