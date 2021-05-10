import React from "react";
import { Header } from "../../components/header";

function Results() {
  return (
    <>
      <Header />
      <main className="app-container result">
        {" "}
        <table>
          <tbody>
            {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((item, index) => (
              <tr key={index}>
                <td>
                  Ezra <br /> <span>+4</span>
                </td>
                <td>3-2</td>
                <td>
                  <div>
                    Jerry
                    <br /> <span>+10</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}

export { Results };
