import { bar } from "./Headerbar.module.scss";
import { HomeLink, Navigation, Profile } from "components";
import { AuthContext } from "../../contexts/auth";

/* -------------------------------------------------------------------------- */

export default function HeaderBar() {
  return (
    <AuthContext.Consumer>
      {(context) => (
        <header className={bar}>
          {console.log(context)}
          <HomeLink />
          <Navigation>
            {context.state && <Profile user={context.state} />}
          </Navigation>
        </header>
      )}
    </AuthContext.Consumer>
  );
}
