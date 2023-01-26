import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeContext } from 'grommet';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContext.Extend value={{ global: { font: { family: 'Comic Sans MS' } } }}>
      <App />
    </ThemeContext.Extend>
  </React.StrictMode>,
)
