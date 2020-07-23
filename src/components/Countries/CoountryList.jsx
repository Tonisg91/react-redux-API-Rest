import React, { useState, useEffect } from 'react'
import Country from './Country'
import styled from 'styled-components'

const CountryListStyled = styled.div`
    display: grid;
    gap: 2.3em 0;
    justify-content: center;
    background: var(--background);
    padding: 4em 2em;
`


function CountryList() {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(err => console.error("Error when receive data", err))
    }, [])

    const renderCountries = countries.map(country => (
            <Country 
                country={country}
            />
    ))

    return (
        <CountryListStyled>
            {renderCountries}
        </CountryListStyled>
    )
}

export default CountryList