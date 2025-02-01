import { useState, useEffect, useRef, useReducer } from 'react';
import useFetchData from "../../hooks/useFetchData"
import Form from '../../components/ui/Form/Form';


const LoginForm = () => {
    const isLocal = window.location.hostname === 'localhost';
    const URLS = {
        LOGIN: isLocal ? "http://localhost:5000/login" : `${process.env.REACT_APP_API_URL}/login`,
    };
    

      const [ 
        data, 
        isLoading, 
        isError, 
        error, 
        postedData, 
        setPostedData
    ] = useFetchData({ url: URLS.LOGIN, method: "POST" });

    return (
        <Form/>
    );
}

export default LoginForm;
