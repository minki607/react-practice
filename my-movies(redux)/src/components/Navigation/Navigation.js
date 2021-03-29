import React from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { connect } from "react-redux";

import useDetectViewport from "hooks/useDetectVieport";
import { Dialog } from "components";
import {
  container,
  active,
  removeSpaceR,
  menuOpenButton,
  menuCloseButton,
  mobileOnly,
  gteMd,
  ltMd,
} from "./Navigation.module.scss";
import { signInAction, signOutAction } from "redux/storage/auth/auth";
import { useSelector, useDispatch } from "react-redux";

/* dummy authUser ----------------------------------------------------------- */

const dummyAuthUser = {
  uid: "0FIAXz7FlGRhQlkuydyM5Vwv0bc2",
  displayName: "민기",
  photoURL: "https://bit.ly/3f91TZy",
  email: "mingeesuh@gmail.com",
};

/* component ---------------------------------------------------------------- */

function Navigation({ children }) {
  const authUser = useSelector((state) => state.auth.authUser);
  const isAuthed = useSelector((state) => state.auth.isAuthed);
  const dispatch = useDispatch();
  const onSignIn = (currentUser) => dispatch(signInAction(currentUser));
  const onSignOut = () => dispatch(signOutAction());
  // ------------------------------------------------------------------------
  // 내비게이션 활성
  const history = useHistory();
  const location = useLocation();
  const isMoviePageActive = location.pathname.match(/movie/) ? true : false;
  const activeClassName = isMoviePageActive ? active : null;

  // ------------------------------------------------------------------------
  // 글로벌 내비게이션

  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpenMenu = () => setIsOpen(true);
  const handleCloseMenu = () => setIsOpen(false);

  // ------------------------------------------------------------------------
  // 모바일 내비게이션 메뉴 애니메이션

  const navRef = React.useRef(null);
  const handleAnimationStart = () => (navRef.current.style.display = "flex");
  const handleAnimationComplete = ({ scale }) => {
    if (scale === 0) {
      navRef.current.style.display = "none";
    }
  };

  // ------------------------------------------------------------------------
  // 디바이스 모드 감지

  const { isMobile } = useDetectViewport();

  React.useEffect(() => {
    isMobile && handleCloseMenu();
  }, [isMobile, location]);

  // ------------------------------------------------------------------------
  // 다이얼로그

  const [isDialogShow, setIsDialogShow] = React.useState(false);
  const showDialog = () => setIsDialogShow(true);
  const hideDialog = () => setIsDialogShow(false);

  return (
    <>
      <Dialog
        visible={isDialogShow}
        // onOpen={() => console.log('open')}
        // onClose={() => console.log('close')}
        // onDimClickClose={() => hideDialog()}
      >
        <Dialog.Body>
          <Dialog.CloseButton onClick={hideDialog} />
        </Dialog.Body>
      </Dialog>

      {/* 메뉴 열기 버튼 */}
      <button
        type="button"
        className={`${menuOpenButton} ${mobileOnly}`.trim()}
        aria-label="내비게이션 메뉴 열기"
        onClick={handleOpenMenu}
      >
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>

      {/* 내비게이션 */}
      <AnimatePresence>
        <motion.nav
          ref={navRef}
          onAnimationStart={handleAnimationStart}
          onAnimationComplete={handleAnimationComplete}
          initial={isMobile ? { scale: 0 } : null}
          animate={
            isMobile
              ? {
                  scale: isOpen ? 1 : 0,
                  opacity: isOpen ? 1 : 0,
                }
              : null
          }
          className={`${container} ${!isMobile ? gteMd : ltMd}`.trim()}
          aria-label="글로벌 내비게이션"
        >
          <ul lang="en" className={!isAuthed ? removeSpaceR : null}>
            {isMobile && (
              <li>
                <NavLink to="/" activeClassName={active} exact>
                  Home
                </NavLink>
              </li>
            )}
            <li>
              <NavLink to="/movies" className={activeClassName}>
                Movies
              </NavLink>
            </li>
            {!isAuthed ? (
              <>
                <li>
                  <a
                    role="button"
                    href="#sign-in"
                    onClick={(e) => {
                      e.preventDefault();
                      onSignIn(dummyAuthUser);
                    }}
                  >
                    Sign In
                  </a>
                </li>
                <li>
                  <a
                    role="button"
                    href="#sign-up"
                    onClick={(e) => {
                      e.preventDefault();
                      showDialog();
                    }}
                  >
                    Sign Up
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/bookmark" activeClassName={active}>
                    Bookmark
                  </NavLink>
                </li>
                <li>
                  <a
                    role="button"
                    href="#sign-out"
                    onClick={(e) => {
                      e.preventDefault();
                      history.push("/");
                      onSignOut();
                    }}
                  >
                    Sign Out
                  </a>
                </li>
              </>
            )}
          </ul>
          {isAuthed && children}

          {/* 메뉴 닫기 버튼 */}
          <button
            type="button"
            className={`${menuCloseButton} ${mobileOnly}`}
            aria-label="내비게이션 메뉴 닫기"
            onClick={handleCloseMenu}
          >
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </button>
        </motion.nav>
      </AnimatePresence>
    </>
  );
}

// Redux 스토어의 상태 (state) -> 컴포넌트 props
// Redux 스토어의 디스패치 -> 컴포넌트 props
// const mapStateToProps = ({ auth: { authUser, isAuthed } }) => ({
// 스토어의 state 중 일부 값을 컴포넌트의 props로 전달
//   authUser,
//   isAuthed,
// });

// const mapDispatchToProps = {
// 스토어의 디스패치를 사용해 액션 크리에이터를 설정한 함수( 부모가 전달한 props 함수)를 바인딩
//   onSignIn: signInAction,
//   onSignOut: signOutAction,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default Navigation;
