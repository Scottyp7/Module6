import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ErrorBoundary} from "react-error-boundary"

function Fallback({error, resetErrorBoundary}){
  return ( 
    <>
    <h1>{error.message}</h1>
    <button onClick={resetErrorBoundary}>Reset</button>
    </>
)  }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={Fallback}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
