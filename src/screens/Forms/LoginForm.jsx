import useForm from "../../hooks/useForm";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {saveFormData} from "../../redux/form/formActions";
import { motion } from 'framer-motion';
import ModalInfo from "../../components/ModalInfo";
import { useState } from "react";
import { clearFormData } from "../../redux/form/formActions";



const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });


    const handleInputChange = (event) => {  
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));


        if(name === 'password' && value !== 'mod7'){
            // alert('Contraseña Incorrecta');
            setFormData(prevFormData => ({
                ...prevFormData,
                username: '',
                email: '',
                password: '',
            }));
        }
    }

    const [showPassword, setShowPassword] = useState(false);

    const [values, handleChange] = useForm({ username: '', email: ''});
    const [showModalInfo, setShowModalInfo] = useState(false);
    const form = useSelector(state => state.form);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const password = values.password;
        if (password !== 'mod7') {
          showModal();
        } else {
          // Aquí puedes agregar la lógica para iniciar sesión correctamente
          dispatch(saveFormData(values));
          console.log('Sesión iniciada correctamente');
          // Redireccionar a la página principal    
          // Cerrar el modal
          setShowModalInfo(false);
        }
      }
    const hideModalInfo = () => {
        setShowModalInfo(false);
    };
    const showModal = () => {
        setShowModalInfo(true);
    }
    return (
        <motion.div
            initial={{opacity: 0, y: -70}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
        >
            <ModalInfo
                visible={showModalInfo}
                message="Contraseña Incorrecta"
                onClose={hideModalInfo}
            />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h5>username: {form.formData.username}</h5>
                    <h5>email: {form.formData.email}</h5>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)}>
                             {showPassword ? "Ocultar" : "Mostrar"}
                         </button>
                    </div>
                    <div className="button-container">
                        <button type="submit" onClick={showModal}>Iniciar Sesión</button>
                        
                    </div>
                </form>
            </div>
        </motion.div>
    );
};


export default LoginForm;