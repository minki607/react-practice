import { bar } from './Headerbar.module.scss'
import { HomeLink, Navigation, Profile } from 'components'
import { AuthContext } from '../../contexts/auth'

/* -------------------------------------------------------------------------- */

export default function HeaderBar() {
    return (
        <AuthContext.Consumer>
            {({ state: user }) => (
                <header className={bar}>
                    <HomeLink />
                    <Navigation>{user && <Profile user={user} />}</Navigation>
                </header>
            )}
        </AuthContext.Consumer>
    )
}
