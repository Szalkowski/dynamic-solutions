import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './core/reportWebVitals'
import { Header } from './modules/Layout/Header'
import { Footer } from './modules/Layout/Footer'
import { Navigation } from './modules/Layout/Navigation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserProfile } from './modules/UserProfile'
import { UserInformation } from './modules/UserInformation'
import './styles/_global.scss'
import { routes } from './core/routes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path={routes.main.path} element={<UserInformation />} />
        <Route path={routes.userProfile.path} element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
