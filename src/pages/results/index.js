import React, { useEffect, useState } from "react";
import { Header } from "../../components/header";
import Tabletop from "tabletop";
import { Loader } from "../../components/loader";

function Results() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllData = async () => {
    Tabletop.init({
      key: process.env.REACT_APP_TABLETOP_KEY,
    })
      .then((data) => {
        setData(data.Results.elements);
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
      })
      .catch((err) => {
        console.warn(err);
        setData([]);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main className="app-container result">
            {" "}
            <table>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.PlayerA}</td>
                    <td>{`${item.ScoreA} - ${item.ScoreB}`}</td>
                    <td>{item.PlayerB}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </main>
        </>
      )}
    </>
  );
}

export { Results };
