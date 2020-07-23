import React from 'react'
import styled from 'styled-components'

const CountryStyled = styled.div`
    width: 264px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 7px 2px rgba(0, 0, 0, .3);
    img {
        width: 100%;
        height: 160px;
        object-fit: cover;
    }
    .details {
        padding: 1.5em
    }
    h2 {
        margin: 0 0 1rem 0;
        font-size: 18px;
        font-weight: 700;
    }
    p {
        font-size: .9em;
        margin-bottom: .5em;
    }
`

function Country({country}) {

    const {flag, name, population, region, capital} = country;

    return (
        <CountryStyled>
            <img src={flag} alt={name}/>
            <div className="details">
                <h2>{name}</h2>
                <p><strong>Population:</strong> {population}</p>
                <p><strong>Region:</strong> {region}</p>
                <p><strong>Capital:</strong> {capital}</p>
            </div>
        </CountryStyled>
    )
}

export default Country