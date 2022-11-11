
import React from 'react';
import { Router } from 'react-router-dom';
import './index.scss'
import { useNavigate } from 'react-router-dom';


export default function FaixaContinuarCompra() {

    const navigate = useNavigate('');
    
    function Home(){
        navigate('/')
    }

    return(
        <div className="faixa-header">
            <img className="logo" src="/images/logoo.png" alt="logo" onClick={Home} />
        </div>
    )
}
