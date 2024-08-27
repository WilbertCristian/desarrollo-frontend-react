import { SET_FORM_DATA, clearFormData } from './formTypes';


export const saveFormData = (formData) => {
    
    return {
        type: SET_FORM_DATA,
        payload: formData,
      };
    
    
}



