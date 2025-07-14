import React from "react";
import ReactDom from "react-dom/client";

const element = (
  <table>
    <tr>
      <th>Name</th>
      <th>Phone</th>
    </tr>

    <tr>
      <td>John Doe</td>
      <td>314-900-9000</td>
    </tr>
  </table>
);
const root = ReactDom.createRoot(document.getElementById("root"));

//root.render(<p>render react using react dom </p>);

root.render(element);
