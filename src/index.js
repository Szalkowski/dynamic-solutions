import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import reportWebVitals from './core/reportWebVitals'
import { routes } from './core/Routes/routes'
import { Header } from './core/Layout/Header'
import { Footer } from './core/Layout/Footer'
import { Navigation } from './core/Layout/Navigation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserProfile } from './modules/UserProfile'
import { UserInformation } from './modules/UserInformation'
import store from './core/redux/store'
import './styles/_global.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Header />
    <BrowserRouter>
      <Navigation />
      <div className={'content'}>
        <Routes>
          <Route path={routes.main.path} element={<UserInformation />} />
          <Route path={routes.userProfile.path} element={<UserProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
    <Footer />
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
