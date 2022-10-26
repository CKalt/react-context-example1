import React from 'react';

export const UserContext = React.createContext();

export default function App() {
  return (
    <UserContext.Provider value={ { "first": "Theo", "last": "Kaltwasser" } } >
      <User />
    </UserContext.Provider>
  )
}

function User() {
  return (
    <UserContext.Consumer>
      {value => <h1>{value.first} {value.last}</h1>} 
    </UserContext.Consumer>
  )
}
