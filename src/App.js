import logo from "./logo.svg";
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
  );
}

export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import databases from "./firebase";
// import { useState, useEffect } from "react";

// function App() {
//   const firstDatabase = databases[0].database().ref("/DB_1");
//   const secondDatabase = databases[1].database().ref("/DB_3");
//   const [firstDB, setFirstDB] = useState("");
//   const [dataSecondDB, setDataSecondDB] = useState("");
//   const [loading, setLoading] = useState("");
//   const getData = () => {
//     firstDatabase.on("value", function (snapshot) {
//       setFirstDB(snapshot.val());
//       setLoading(true);
//     });
//     secondDatabase.on("value", function (snapshot) {
//       setDataSecondDB(snapshot.val());
//       setLoading(true);
//     });
//   };
//   useEffect(() => {
//     getData();
//   }, []);
//   console.log(firstDB);
//   return (
//     <div className="App">
//       <h1>Sutartis</h1>
//       <table>
//         <tr>
//           <th>Id</th>
//           <th>Kaina</th>
//           <th>Nuomos pabaiga</th>
//           <th>Uzsakovo id</th>
//         </tr>
//         {firstDB &&
//           firstDB.Sutartis.map((sutartis, index) => (
//             <tr>
//               <td>{index}</td>
//               <td>{sutartis.kaina}</td>
//               <td>{sutartis.nuomos_pabaiga}</td>
//               <td>{sutartis.uzsakovo_id}</td>
//             </tr>
//           ))}
//       </table>

//       <h1>Automobilis</h1>
//       <table>
//         <tr>
//           <th>Id</th>
//           <th>Kaina</th>
//           <th>Nuomos pabaiga</th>
//           <th>Uzsakovo id</th>
//         </tr>
//         {firstDB &&
//           firstDB.Sutartis.map((sutartis, index) => (
//             <tr>
//               <td>{index}</td>
//               <td>{sutartis.kaina}</td>
//               <td>{sutartis.nuomos_pabaiga}</td>
//               <td>{sutartis.uzsakovo_id}</td>
//             </tr>
//           ))}
//       </table>

//       <h1>Pristatymo vieta</h1>
//       <table>
//         <tr>
//           <th>Id</th>
//           <th>Kaina</th>
//           <th>Nuomos pabaiga</th>
//           <th>Uzsakovo id</th>
//         </tr>
//         {firstDB &&
//           firstDB.Sutartis.map((sutartis, index) => (
//             <tr>
//               <td>{index}</td>
//               <td>{sutartis.kaina}</td>
//               <td>{sutartis.nuomos_pabaiga}</td>
//               <td>{sutartis.uzsakovo_id}</td>
//             </tr>
//           ))}
//       </table>

//       <h1>Uzsakovas</h1>
//       <table>
//         <tr>
//           <th>Id</th>
//           <th>Kaina</th>
//           <th>Nuomos pabaiga</th>
//           <th>Uzsakovo id</th>
//         </tr>
//         {firstDB &&
//           firstDB.Sutartis.map((sutartis, index) => (
//             <tr>
//               <td>{index}</td>
//               <td>{sutartis.kaina}</td>
//               <td>{sutartis.nuomos_pabaiga}</td>
//               <td>{sutartis.uzsakovo_id}</td>
//             </tr>
//           ))}
//       </table>
//     </div>
//   );
// }

// export default App;
