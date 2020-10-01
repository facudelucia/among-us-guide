import React, {useState} from 'react'
import "./Contacto.css"
import Swal from "sweetalert2"
import validator from "validator"
import {db, firestore, firebase} from "./firebase/firebaseConfig"

function Contacto() {
    const [form, setForm] = useState({
        email:"",
        msg:""
    })
    const {email, msg} = form
    
    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!validator.isEmail(email)){
            return Swal.fire("Error", "Debes ingresar un email", "error")
        }else if(msg.trim()===""){
            return Swal.fire("Error", "Debes ingresar un mensaje", "error")
        }
        db.doc().set({
            email: email,
            msg: msg
        }).then(()=>{
            console.log("data saved")
        }).catch((error)=>{
            console.log(error)
        })
        Swal.fire("Muy bien!", "Tu mensaje fue enviado", "success")
        setForm({
            email:"",
            msg:""
        })
    }
    return (
        <div className="slider">
      
      <div className="load">
      </div>

      <div className="content">
      
        <div className="contacto animate__animated animate__fadeIn">
        <h2>Contactame</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
            <label>Ingresa tu email</label>
            <input 
                type="email" 
                className="contact-form-text"
                name="email"
                value={email}
                onChange={handleInputChange}
            />
            <label>Deja tu comentario u opinión debajo</label>
            <textarea 
                className="contact-form-text"
                name="msg"
                value={msg}
                onChange={handleInputChange}
            />
            <input 
                type="submit" 
                className="contact-form-btn" 
                value="Enviar"
                
                
            />
        </form>
        </div>

    </div>
    </div>
    )
}

export default Contacto
