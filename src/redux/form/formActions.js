import { SET_FORM_DATA } from './formTypes';



export const saveFormData = (formData) => {
    return async (dispatch) => {
        if (formData.password === 'mod7ReactUSIP') {
            dispatch({
                type: SET_FORM_DATA,
                payload: formData,
            });
        } 
        else {
            alert('Contraseña Incorrecta');
        }
    }
}

