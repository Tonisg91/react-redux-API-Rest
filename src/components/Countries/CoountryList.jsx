import React, { useEffect } from 'react'
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
    return (
        <CountryListStyled>
            <Country 
                flag="https://restcountries.eu/data/esp.svg"
                name="Spain"
                population={4600000000}
                region="Europe"
                capital="Madrid"
            />
            <Country 
                flag="https://restcountries.eu/data/esp.svg"
                name="Spain"
                population={4600000000}
                region="Europe"
                capital="Madrid"
            />
        </CountryListStyled>
    )
}

export default CountryList