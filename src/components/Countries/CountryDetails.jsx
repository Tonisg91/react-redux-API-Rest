import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import Country from './Country';

function CountryDetails(props) {
    const dispatch = useDispatch()
    const countryDetails = useSelector(state => state.countryDetails)


    const code = props.match.params.id;

    const getDetails = () => {
        axios.get("https://restcountries.eu/rest/v2/alpha/" + code)
            .then(({data}) => {
                dispatch({
                    type: "SET_COUNTRY_DETAILS",
                    payload: data
                })
            })
            .catch(err => console.error(err))
    }

    useEffect(getDetails, [])

    return (
        <Country country={countryDetails} details/>
    )
}

export default CountryDetails
