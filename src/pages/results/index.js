import React, { useEffect, useState } from "react";
import { Header } from "../../components/header";
import Tabletop from "tabletop";
import { Loader } from "../../components/loader";
import { Offline } from "../../components";

function Results() {
  const dataLimit = 10;
  // const pageLimit = 5;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchAllData = async () => {
    Tabletop.init({
      key: process.env.REACT_APP_TABLETOP_KEY,
    })
      .then((data) => {
        setData(data.Results.elements);
        const timer = setTimeout(() => {
          setLoading(false);
          setPages(Math.ceil(data.Results.elements.length / dataLimit));
        }, 1500);
        return () => clearTimeout(timer);
      })
      .catch((err) => {
        setData([]);
        const timer = setTimeout(() => {
          setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
      });
  };

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
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
              <main className="app-container result">
                {" "}
                <table>
                  <tbody>
                    {getPaginatedData().map((item, index) => (
                      <tr key={index}>
                        <td>{item.PlayerA}</td>
                        <td>{`${item.ScoreA} - ${item.ScoreB}`}</td>
                        <td>{item.PlayerB}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="pagination_controls">
                  <button
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1 ? true : false}
                  >
                    {"<"}
                  </button>
                  <span>
                    {currentPage}/{pages}
                  </span>
                  <button
                    onClick={goToNextPage}
                    disabled={currentPage === pages ? true : false}
                  >
                    {">"}
                  </button>
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

export { Results };
