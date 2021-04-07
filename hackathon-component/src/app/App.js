import HeaderBar from 'containers/HeaderBar/HeaderBar'
import { SearchPage } from 'pages/SearchPage'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { GlobalColors } from 'styles/pages/theme.styled'
import { AnimatePresence } from 'framer-motion'

function App() {
    const location = useLocation()
    return (
        <div className="App">
            <GlobalColors />
            <HeaderBar />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.key}>
                    <Route exact path="/">
                        Home
                    </Route>
                    <Route exact path="/search">
                        <SearchPage />
                    </Route>
                    <Route exact path="/post">
                        post
                    </Route>
                    <Route exact path="/profile">
                        Post
                    </Route>
                    <Route exact path="/info">
                        more
                    </Route>
                </Switch>
            </AnimatePresence>
        </div>
    )
}

export default App
