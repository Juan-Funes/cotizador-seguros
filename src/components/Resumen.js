import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import {primerMayuscula} from '../Helper'
const ContenedorResumen = styled.div`
padding:1rem;
text-align:center;
background-color:#00838f;
color:#FFF;
margin-top:1rem
`
export default function Resumen({datos}) {

const {marca,year,plan} = datos;

if(marca===''||year==='' || plan==='')return null;
    return (
    <ContenedorResumen>
        <h1>Resumen de cotizacion</h1>
        <ul>
    <li>Marca <b>{ primerMayuscula(marca) }</b></li>
    <li>Plan <b>{primerMayuscula(plan)}</b></li>
    <li>Año <b>{year}</b></li>
        </ul>


    </ContenedorResumen>
        
            
        
    )
}
Resumen.propTypes = {

datos : PropTypes.object.isRequired

}