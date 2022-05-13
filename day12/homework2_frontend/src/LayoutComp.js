import React from "react";
import axios from "axios";

export default function LayoutComp() {
  let data = "";
  axios.get("/api/users").then((res) => {
    data = res.data.data;
    data.map((x) => {
      document.getElementById("ans").innerHTML += `<td>
                <p>${x.first_name}</p>
                <p>${x.email}</p>
                <img src="${x.avatar}"/>
                
            </td>`;
    });
  });

  return (
    <div>
      <table>
        <tbody>
          <tr id="ans"></tr>
        </tbody>
      </table>
    </div>
  );
}
