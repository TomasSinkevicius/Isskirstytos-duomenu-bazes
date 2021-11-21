import firebase from "./firebase";
import { useState, useEffect } from "react";
import Create from "./Components/Sutartis/Create";
import Index from "./Components/Sutartis/Index";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

function App() {
  const db1 = firebase.db1.database().ref("/DB_1");
  const db2 = firebase.db1.database().ref("/DB_2");
  const db3 = firebase.db2.database().ref("/DB_3");
  const db4 = firebase.db2.database().ref("/DB_4");
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
  console.log("third data", thirdData);
  console.log("fourth data", fourthData);
  return (
      <Router>
        <Switch>
          <Route path="/Create" element={<Create />} />
          <Route path="/" element={<Index />} />
        </Switch>
      </Router>
  );
};

export default App;
