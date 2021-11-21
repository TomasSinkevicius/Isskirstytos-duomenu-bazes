import "./App.css";
import firebase from "./firebase";
import { useState, useEffect } from "react";

function App() {
  const db1 = firebase.db1.database().ref("/DB_1");
  const db3 = firebase.db2.database().ref("/DB_3");
  const [data, setData] = useState("");
  const [secondData, setSecondData] = useState("");
  const [loading, setLoading] = useState("");
  const getData = () => {
    db1.on("value", function (snapshot) {
      setData(snapshot.val());
      setLoading(true);
    });
    db3.on("value", function (snapshot) {
      setSecondData(snapshot.val());
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
      <h1>Sutartis db1</h1>
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
      <h1>Sutartis db3</h1>
      <table>
        <tr>
          <th>Id</th>
          <th>Kaina</th>
          <th>Nuomos pabaiga</th>
          <th>Uzsakovo id</th>
        </tr>
        {secondData &&
          secondData.Sutartis.map((sutartis, index) => (
            <tr>
              <td>{index}</td>
              <td>{sutartis.kaina}</td>
              <td>{sutartis.nuomos_pabaiga}</td>
              <td>{sutartis.uzsakovo_id}</td>
            </tr>
          ))}
      </table>

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
