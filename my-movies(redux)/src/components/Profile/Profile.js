import { container, avatar as imgPath } from "./Profile.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadingImg } from "components";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth } from "redux/storage/auth/auth";

/* component ---------------------------------------------------------------- */

export default function Profile() {
  // Redux 스토의 상태에 접근해서 특정 값을 추출

  const { displayName, photoURL } = useSelector(
    (state) => selectAuth(state).authUser
  );

  const figure = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <AnimatePresence>
      <motion.figure
        key={figure}
        variants={figure}
        initial="hidden"
        animate="visible"
        className={container}
      >
        <LazyLoadingImg src={photoURL} size={24} alt="" className={imgPath} />
        <figcaption>‪{displayName}</figcaption>
      </motion.figure>
    </AnimatePresence>
  );
}
