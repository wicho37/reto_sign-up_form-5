/* import Card from "../Card/Card"
import style from "./Form.module.css"
import Card2 from "../Card2/Card2"
import { useState } from "react"
 


function  Form = () => {
    
    const [nombre, setNombre] = useState ("");
    const [apellidos, setApellido] = ("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = ("");
    const [mensError, setMensaje] = useState ("")
    const  regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    const handleClick = () => {
        
      if (email === "" || !regex.test(email) || ) {
            setMensError("Please, fill the empty field ");
        } 
        if (nombre === "" , apellidos === "" || !nombre,apellidos.test() ||){
          setNombre, setApellido( "please enter a name")
        }
        if (password === "" || !8) {
          setPassword("La contraseña debe tener al menos 8 caracteres.");


  return (
    <div>
      <Card/>
      <div className="style.content_form">
        <div>
          <input type="dirname" placeholder="Firs Name" className="list_form"/>
          <input type="dirname" placeholder="Last Name" className="list_form"/>
          <input type="autocomplete" name="email" placeholder="Email Address" className="list_form"/>
          <input type="password" placeholder="password" className="list_form"/> 

          < Card2 />
        </div>
      </div>
        <p>by clicking the buttom, you are agreeing to our <a href="">terms and services</a></p>
    </div>
  )
}
}

export default Form */




import { useState } from 'react';
import Card2 from '../Card2/Card2';
import Card from '../Card/Card';
import style from "./Form.module.css"

function Formulario() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    lastName:"",
    email: '',
    password:"",
    // Agrega más campos según sea necesario
  });

  const [errores, setErrores] = useState({
    nombre: '',
    lastName:"",
    email: '',
    password:"",

    // Agrega más campos según sea necesario
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormulario({
      ...formulario,
      [name]: value,
    });

    // Validación simple, puedes personalizar según tus necesidades
    if (value.trim() === '') {
      setErrores({
        ...errores,
      });
    } else {
      setErrores({
        ...errores,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación adicional si es necesario
    if (formulario.nombre.trim() === '' || formulario.lastName.trim() === '' ||formulario.email.trim() === '' || formulario.password.trim() === '') {
      alert('Por favor, completa todos los campos.');
      return;
    } 

    // Envía el formulario
    alert('Formulario enviado con éxito.');
    // Aquí podrías enviar el formulario a tu servidor o realizar otras acciones necesarias
  };

  return (
    <div>

    <form onSubmit={handleSubmit}>
      <Card />
      <div className={style.contentInput}>

     <input
        placeholder='Firs name'
        type="text"
        id="nombre"
        name="nombre"
        value={formulario.nombre}
        onChange={handleChange}
        required
      />
     <span>{errores.nombre}</span>

      <input
        placeholder='Last name'
        type="text"
        id="lastName"
        name="lastName"
        value={formulario.lastName}
        onChange={handleChange}
        required
      />
      <span>{errores.lastName}</span>

      
      <input
        placeholder='Email Address'
        type="email"
        id="email"
        name="email"
        value={formulario.email}
        onChange={handleChange}
        required
      />
      <span>{errores.email}</span>

      <input
        placeholder='Password'
        type="password"
        id="password"
        name="password"
        value={formulario.password}
        onChange={handleChange}
        required
      />
      <span>{errores.password}</span>
      < Card2/>
      <p className={style.policies}>By clicking the buttom, you are agreeing to our <a href="#" className={style.go}>Terms and Services</a></p>
    </div>
  </form>
  </div>
    
  );
}

export default Formulario;
