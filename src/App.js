import "./App.css";
import firebase from "./firebase";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  table {
    margin-right: 10px;
  }
`;

function App() {
  const db1 = firebase.db1.database().ref("/DB_1");
  const db2 = firebase.db1.database().ref("/DB_2");
  const db3 = firebase.db1.database().ref("/DB_3");
  const db4 = firebase.db2.database().ref("/DB_3");
  const [data, setData] = useState("");
  const [secondData, setSecondData] = useState("");
  const [thirdData, setThirdData] = useState("");
  const [fourthData, setFourthData] = useState("");
  const [loading, setLoading] = useState("");
  const getData = () => {
    db1.on("value", function (snapshot) {
      setData(snapshot.val());
      setLoading(true);
    });
    db2.on("value", function (snapshot) {
      setSecondData(snapshot.val());
      setLoading(true);
    });
    db3.on("value", function (snapshot) {
      setThirdData(snapshot.val());
      setLoading(true);
    });
    db4.on("value", function (snapshot) {
      setFourthData(snapshot.val());
      setLoading(true);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  console.log("first data", data);
  console.log("second data", secondData);
  return (
    <div className="App">
      <Row>
        <div>
          <h4>Sutartis db1</h4>
          <table>
            <tr>
              <th>Id</th>
              <th>Kaina</th>
              <th>Nuomos pabaiga</th>
              <th>Uzsakovo id</th>
            </tr>
            {data &&
              data.Sutartis.map((sutartis, index) => (
                <tr>
                  <td>{index}</td>
                  <td>{sutartis.kaina}</td>
                  <td>{sutartis.nuomos_pabaiga}</td>
                  <td>{sutartis.uzsakovo_id}</td>
                </tr>
              ))}
          </table>
        </div>
        <div>
          <h4>Sutartis db2</h4>
          <table>
            <tr>
              <th>Id</th>
              <th>Data</th>
              <th>Kaina</th>
              <th>Nuomos pradzia</th>
              <th>Nuomos pabaiga</th>
            </tr>
            {secondData &&
              secondData.Sutartis.map((sutartis, index) => (
                <tr>
                  <td>{index}</td>
                  <td>{sutartis.data}</td>
                  <td>{sutartis.kaina}</td>
                  <td>{sutartis.pradzia}</td>
                  <td>{sutartis.nuomos_pabaiga}</td>
                </tr>
              ))}
          </table>
        </div>
        <div>
          <h4>Sutartis db3</h4>
          <table>
            <tr>
              <th>Id</th>
              <th>Kaina</th>
              <th>Nuomos pabaiga</th>
              <th>Uzsakovo id</th>
            </tr>
            {thirdData &&
              thirdData.Sutartis.map((sutartis, index) => (
                <tr>
                  <td>{index}</td>
                  <td>{sutartis.kaina}</td>
                  <td>{sutartis.nuomos_pabaiga}</td>
                  <td>{sutartis.uzsakovo_id}</td>
                </tr>
              ))}
          </table>
        </div>
        <div>
          <h4>Sutartis db4</h4>
          <table>
            <tr>
              <th>Id</th>
              <th>Data</th>
              <th>Kaina</th>
              <th>Nuomos pradzia</th>
              <th>Nuomos pabaiga</th>
            </tr>
            {fourthData &&
              fourthData.Sutartis.map((sutartis, index) => (
                <tr>
                  <td>{index}</td>
                  <td>{sutartis.data}</td>
                  <td>{sutartis.kaina}</td>
                  <td>{sutartis.pradzia}</td>
                  <td>{sutartis.nuomos_pabaiga}</td>
                </tr>
              ))}
          </table>
        </div>
      </Row>

      <h1>Automobilis</h1>
      <table>
        <tr>
          <th>Id</th>
          <th>kebulo tipas</th>
          <th>kuro tipas</th>
          <th>vietu skaicius</th>
          <th>pavaru deze</th>
        </tr>
        {data &&
          data.Automobilis.map((automobilis, index) => (
            <tr>
              <td>{index}</td>
              <td>{automobilis.kebulo_tipas}</td>
              <td>{automobilis.kuro_tipas}</td>
              <td>{automobilis.vietu_skaicius}</td>
              <td>{automobilis.pavaru_deze}</td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default App;
