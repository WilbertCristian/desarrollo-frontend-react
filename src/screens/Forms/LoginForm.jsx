import useForm from "../../hooks/useForm";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {saveFormData} from "../../redux/form/formActions";
import { motion } from 'framer-motion';
import ModalInfo from "../../components/ModalInfo";
import { useState } from "react";




const LoginForm = () => {
    const [values, handleChange, resetForm] = useForm({
        username: "",
        email: "",
        password: "",
      });
    



    const [showPassword, setShowPassword] = useState(false);

    const [showModalInfo, setShowModalInfo] = useState(false);
    const [showModalLogout, setShowModalLogout] = useState(false);
    const form = useSelector(state => state.form);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const password = values.password;
        if (password !== form.password) {
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
            <ModalInfo
                visible={showModalLogout}
                message="Esta seguro de que quieres cerrar la sesión?"
                onClose={() => setShowModalLogout(false)}
            >
                <button type="button" onClick={() => {resetForm(); setShowModalLogout(false); dispatch(saveFormData({username: '', email: ''}))}} >Cerrar Sesión</button>
            </ModalInfo>
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
                        <button type="button" onClick={() => {setShowModalLogout(true)}} >Cerrar Sesión</button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};


export default LoginForm;