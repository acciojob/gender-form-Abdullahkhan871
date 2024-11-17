import React from "react";

const Check = () => {
  return (
    <select id="maleSlection" name="country">
      <option value="select" selected>
        Select size
      </option>
      <option value="Small">Small</option>
      <option value="Medium">Medium</option>
      <option value="Large">Large</option>
    </select>
  );
};

export default Check;
