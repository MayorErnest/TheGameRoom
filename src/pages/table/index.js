import React, { useEffect, useState } from "react";
import { Header } from "../../components/header";
import Tabletop from "tabletop";
import { Loader } from "../../components/loader";

function Table() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllData = async () => {
    Tabletop.init({
      key: process.env.REACT_APP_TABLETOP_KEY,
    })
      .then((data) => {
        setData(data.Table.elements);
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
          <main className="app-container">
            <table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className={`rank-${item.Class}`}>
                    <td>{item.Rank}</td>
                    <td>{item.Name}</td>
                    <td>{item.Points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="table-footer">
              <h2>Class Identification</h2>
              <ul>
                <li>Class A</li>
                <li>Class B</li>
                <li>Class C</li>
                <li>Class D</li>
              </ul>
            </div>
          </main>
        </>
      )}
    </>
  );
}

export { Table };
