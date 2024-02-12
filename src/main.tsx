import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from './contexts'
import { Home } from './pages'
import './assets/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<Home />
		</ThemeProvider>
	</React.StrictMode>
)
