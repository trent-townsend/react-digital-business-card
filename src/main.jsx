import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./components/header"
import MainText from './components/main-text'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

function Page () {
  return (
  <div className="container">
    <Header />
    <MainText />
  </div>
  )
}

root.render(<Page />)