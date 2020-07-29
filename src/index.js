import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPlus, faChevronLeft, faTrashAlt, faCheckDouble
} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter } from 'react-router-dom'
import 'typeface-roboto'
import './index.css'
import App from './App/App'
<<<<<<< HEAD
import "./ErrorBoundary/ErrorBoundary";
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
=======
>>>>>>> 0330a561bc6e4c5c0ea5f03b15f36d2a131eb3e7

library.add(faPlus, faChevronLeft, faTrashAlt, faCheckDouble)

ReactDOM.render(
  <BrowserRouter>
<<<<<<< HEAD
    <ErrorBoundary><App /></ErrorBoundary>
=======
    <App />
>>>>>>> 0330a561bc6e4c5c0ea5f03b15f36d2a131eb3e7
  </BrowserRouter>,
  document.getElementById('root')
)
