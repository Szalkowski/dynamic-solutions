import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './core/reportWebVitals'
import { Header } from './modules/Layout/Header'
import { Footer } from './modules/Layout/Footer'
import { Navigation } from './modules/Layout/Navigation'
import './styles/_global.scss'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
