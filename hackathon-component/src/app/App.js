import Input from "components/Input/Input";
import HeaderBar from "containers/HeaderBar";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Input
        icon="search"
        placeholder="검색"
        label="검색"
        height={40}
        width={305}
      />
      <Input
        placeholder="닉네임 입력"
        label="닉네임"
        height={24}
        width={125}
        center
      />

      <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route exact path="/search">
          Search
        </Route>
        <Route exact path="/post">
          post
        </Route>
        <Route exact path="/profile">
          Post
        </Route>
        <Route exact path="/more">
          more
        </Route>
      </Switch>
    </div>
  );
}

export default App;
