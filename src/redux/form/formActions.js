import { SET_FORM_DATA } from './formTypes';
import { createSlice } from '@reduxjs/toolkit';


const formDataSlice = createSlice({
    name: 'formData',
    initialState: {
      formData: {},
    },
    reducers: {
      clearFormData(state) {
        state.formData = {};
      },
    },
  });

export const {clearFormData} = formDataSlice.actions;
export const saveFormData = (formData) => {
    return async (dispatch) => {
        if (formData.password === 'mod7') {
            dispatch({
                type: SET_FORM_DATA,
                payload: formData,
            });
        } 
       
    }
}

