import React, { useEffect } from 'react'
import Country from './Country'
import {CountryListStyled} from './Styled-Components.js'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

function CountryList() {
    const dispatch = useDispatch()
    const countryList = useSelector(state => state.countryList)

    const getCountries = () => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(({data}) => {
                dispatch({
                    type: 'SET_COUNTRY_LIST',
                    payload: data
                })
            })
            .catch(err => console.error(err))
    }

    useEffect(getCountries,  [])

    const renderCountries = countryList.map(country => (
            <Country 
                country={country}
                key={country.alpha3Code}
            />
    ))

    return (
        <CountryListStyled>
            {renderCountries}
        </CountryListStyled>
    )
}

export default CountryList