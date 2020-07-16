import React from "react";

import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import store from "./redux/store";
import IceCreamContainer from "./components/IceCreamContainer"
import NewCakeContainer from "./components/NewCakeContainer"
import UserContainer from './components/UserContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <UserContainer></UserContainer>
        {/* <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
