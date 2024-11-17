import React, { useState } from "react";
import "./../styles/App.css";
// import { createHtmlTagObject } from "html-webpack-plugin";

const App = () => {
  const [cloth, Setcloth] = useState("");

  const maleSlection = (
    <select id="maleSlection" name="country">
      <option value="select" selected>
        Select size
      </option>
      <option value="Small">Small</option>
      <option value="Medium">Medium</option>
      <option value="Large">Large</option>
    </select>
  );

  const femaleSlection = (
    <select id="femaleSlection" name="country">
      <option value="select" selected>
        Select size
      </option>
      <option value="Small">2</option>
      <option value="Medium">4</option>
      <option value="Large">6</option>
    </select>
  );

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
        {cloth == "shirt" ? maleSlection : femaleSlection}
      </div>
    </div>
  );
};

export default App;
