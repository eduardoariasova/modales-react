import React, {useState} from "react";
import { Modal, Button } from 'react-bootstrap';


function ModalComponente(props){
    
    let datoUno = props.datoUno;
    let datoDos = props.datoDos;
    let datosRecibidos = props.datosRecibidos; // función para enviar datos del modal al componente principal

    const [show, setShow] = useState(false); // mostrar modal
    const handleClose = () => setShow(false); // cerrar modal
    const handleShow = () => setShow(true); // mostrar modal
    
    
    
    async function ejecutar(){
        let dato = "Este es el dato enviado desde el modal";

        datosRecibidos({
            dato
        });

        handleClose();
    }




    return(
        <div>
            {/* Botón que se ve en el componente que lo importa */}
            <Button className="w-100" variant="outline-primary" onClick={handleShow} >
                Ver
            </Button>


            <Modal show={show} onHide={handleClose} >

                {/* Cabecera */}
                <Modal.Header closeButton >
                    <Modal.Title>Título del modal</Modal.Title>
                </Modal.Header>

                {/* Cuerpo */}
                <Modal.Body>
                    <h2>Este ya es el contenido del modal</h2>
                    <p>Este es el texto descriptivo del modal</p>

                    <p>Dato Uno: {datoUno} </p>
                    <p>Dato Dos: {datoDos} </p>
                </Modal.Body>



                <Modal.Footer>
                    <Button className="w-100" variant="primary" onClick={ejecutar} >
                        Ejecutar acción
                    </Button>
                </Modal.Footer>

            </Modal>
        </div>
    )
}

export default ModalComponente;