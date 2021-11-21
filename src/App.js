import logo from "./logo.svg";
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
