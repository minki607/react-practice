/* action types ------------------------------------------------------------- */

const SELECT_PROFILE = "프로필선택";
const REMOVE_PROFILE = "프로필지우기";

/* action creators ---------------------------------------------------------- */

export const selectProfileAction = (currentUser) => ({
  type: SELECT_PROFILE,
  profile: currentUser,
});

export const removeProfileAction = () => ({ type: REMOVE_PROFILE });

/* initial state + reducer -------------------------------------------------- */

const initialState = {
  profile: null,
};

export const profileReducer = (state = initialState, { type, profile }) => {
  switch (type) {
    case SELECT_PROFILE:
      return {
        ...state,
        profile,
      };

    // 로그아웃 (기본 처리)
    case REMOVE_PROFILE:
      return initialState;

    // 기본 (초기 상태)
    default:
      return state;
  }
};
