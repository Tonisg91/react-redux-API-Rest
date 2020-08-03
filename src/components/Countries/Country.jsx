import React from 'react'
import { CountryStyled } from './Styled-Components.js'
import { Link } from 'react-router-dom';



function Country({country}) {

    const {flag, name, population, region, capital, alpha3Code} = country;
    return (
        <CountryStyled>
            <img loading="lazy" src={flag} alt={name}/>
            <div className="details">
                <h2>{name}</h2>
                <p><strong>Population:</strong> {population}</p>
                <p><strong>Region:</strong> {region}</p>
                <p><strong>Capital:</strong> {capital}</p>
                <Link to={"/details/" + alpha3Code}>
                    <button>Ver detalles</button>
                </Link>
            </div>
        </CountryStyled>
    )
}

export default Country