import React, { useEffect, useState } from "react";
import { Header } from "../../components/header";
import Tabletop from "tabletop";
import { Loader } from "../../components/loader";
import { Offline } from "../../components";

function History() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllData = async () => {
    Tabletop.init({
      key: process.env.REACT_APP_TABLETOP_KEY,
    })
      .then((data) => {
        console.log(data);
        setData(data.May.elements);
        const timer = setTimeout(() => {
          setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
      })
      .catch((err) => {
        console.warn(err);
        setData([]);
        const timer = setTimeout(() => {
          setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
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
          {data.length ? (
            <>
              <Header />
              <main className="app-container">
                <h1 style={{ textAlign: "center", padding: "30px 0px" }}>
                  MAY
                </h1>
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
          ) : (
            <Offline />
          )}
        </>
      )}
    </>
  );
}

export { History };
