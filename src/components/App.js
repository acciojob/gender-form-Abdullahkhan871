import React, { useState } from "react";
import "./../styles/App.css";
import Check from "./Check";
import Check2 from "./Check2";
// import { createHtmlTagObject } from "html-webpack-plugin";

const App = () => {
  const [cloth, Setcloth] = useState("");

  return (
    <div>
      <div>
        <h2>Select your gender:</h2>
        <input
          id="male"
          type="radio"
          value={"male"}
          name="gender"
          onChange={() => Setcloth("shirt")}
        />
        <label for="male">Male</label>
        <input
          id="female"
          type="radio"
          value={"female"}
          name="gender"
          onChange={() => Setcloth("dress")}
        />
        <label for="female">Female</label>
      </div>
      <div>
        <h2>Select your {cloth} size:</h2>
        {cloth == "shirt" ? <Check /> : <Check2 />}
      </div>
    </div>
  );
};

export default App;
