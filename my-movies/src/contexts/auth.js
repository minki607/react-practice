// 컨텍스트 객체 생성
// React.createContext

// 생성된 컨텍스트
// - 상태 공유하기 위한 공급자(Provider) 컴포넌트
// 공급자가 공유한 상태(값)을 전달받을 수요자(Consumer)

// Context.Provider
// 공급자가 공유한 상태(값)을 전달받을 수요자(Consumer)
import React from "react";

export const AuthContext = React.createContext();
