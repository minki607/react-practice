import HeaderBar from 'containers/HeaderBar/HeaderBar'
import { SearchPage } from 'pages/SearchPage'
import { Switch, Route } from 'react-router-dom'
import { GlobalColors } from 'styles/pages/theme.styled'

function App() {
    return (
        <div className="App">
            <GlobalColors />
            <HeaderBar />

            <Switch>
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
        </div>
    )
}

export default App
