import React from 'react';
import CountryList from './components/Countries/Country-List';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './App.css'
import { Switch, Route } from 'react-router-dom';
import CountryDetails from './components/Countries/CountryDetails';


const initialState = {
  countryList: [],
  countryDetails: {}
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_COUNTRY_LIST':
      return {...state, countryList: action.payload}
    case 'SET_COUNTRY_DETAILS':
        return {...state, countryDetails: action.payload}
    default:
      return state
  }
}

const store = createStore(reducer, initialState)

function App() {
  return (
    <Switch>
      <Provider store={store}>
        <Route exact path="/" component={CountryList} />
        <Route path="/details/:id" render={props => <CountryDetails {...props}/>} />
      </Provider>
    </Switch>
  );
}

export default App;
