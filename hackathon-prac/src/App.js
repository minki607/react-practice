import React from "react";
import { useSelector } from "react-redux";
import { Menu } from "semantic-ui-react";

import Profile from "./components/Profile/Profile";
import Posts from "./pages/Posts/Posts";

function App() {
  const { profile } = useSelector((state) => state.profile);
  return (
    <div className="App">
      <Menu>
        <Menu.Item name={profile}></Menu.Item>
      </Menu>
      <Profile />
      <Posts />
    </div>
  );
}

export default App;
