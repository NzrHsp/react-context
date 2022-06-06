import React from "react";
import CreateUser from "./CreateUser";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import SelectLanguage from "./SelectLanguage";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <SelectLanguage />
          <ColorContext.Provider value="primary">
            <CreateUser />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
