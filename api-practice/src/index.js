import { StrictMode } from 'react'
import { render } from 'react-dom'
import 'semantic-ui-css/semantic.min.css'

import App from './app/App'

render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root')
)
