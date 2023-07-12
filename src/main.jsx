import React from 'react'
import ReactDOM from 'react-dom/client'
import RegularFetchWithAxios from './RegularFetchWithAxios.jsx'
import ReactQueryFetchWithAxios from './ReactQueryFetchWithAxios.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RegularFetchWithAxios />
  </React.StrictMode>,
)
