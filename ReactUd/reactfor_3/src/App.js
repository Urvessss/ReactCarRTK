import React from 'react'
import CarForm from './components/CarForm'
import CarList from './components/CarList'
import CarSearch from './components/CarSearch'

const App = () => {
  return (
    <div>
      <CarForm/>
      <CarList/>
      <CarList/>
      <CarSearch/>
    </div>
  )
}

export default App