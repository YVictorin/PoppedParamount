import { useState, useEffect, useRef, useReducer } from 'react';
import useFetchData from "../../hooks/useFetchData"
import Form from '../../components/form/Form';
import { apiEndpoints } from '../../utils/apiEndpoints';


const LoginForm = () => {
      const [ 
        data, 
        isLoading, 
        isError, 
        error, 
        postedData, 
        setPostedData
    ] = useFetchData({ url: apiEndpoints.LOGIN, method: "POST" });

    return (
        <Form/>
    );
}

export default LoginForm;
