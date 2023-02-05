import './App.css'
import Nav from './Nav'
import About from './About'
import Shop from './Shop'
import PokemonDetails from './PokemonDetail'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" exact element={<Shop />} />
        <Route path="/shop/:name" element={<PokemonDetails />} />
      </Routes>
    </Router>
  )
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default App
