import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import firebase from "../../firebase";
import { AppContainer, BtnDiv } from "../StyleFiles/Container.style";
import { Row, Form, GridDiv } from "../StyleFiles/Table.style";
import { Button } from "../StyleFiles/Button.style";

export default function Create() {
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
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos.Sutartis) {
        todoList.push({ id, ...todos.Sutartis[id] });
      }
      const obj = todos;
      obj.Sutartis = todoList;
      setData(obj);
    });
    db2.on("value", function (snapshot) {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos.Sutartis) {
        todoList.push({ id, ...todos.Sutartis[id] });
      }
      const obj = todos;
      obj.Sutartis = todoList;
      setSecondData(obj);
    });
    db3.on("value", function (snapshot) {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos.Sutartis) {
        todoList.push({ id, ...todos.Sutartis[id] });
      }
      const obj = todos;
      obj.Sutartis = todoList;
      setThirdData(obj);
    });
    db4.on("value", function (snapshot) {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos.Sutartis) {
        todoList.push({ id, ...todos.Sutartis[id] });
      }
      const obj = todos;
      obj.Sutartis = todoList;
      setFourthData(obj);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const [sutartiesDetails, setSutartiesDetails] = useState({
    kaina: "",
    nuomos_pabaiga: "",
    nuomos_pradzia: "",
    uzsakovo_id: "",
  });
  let today = new Date();
  let [date, setDate] = useState(
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear()
  );

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSutartiesDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const create = (e) => {
    e.preventDefault();

    let firstData = {
      kaina: sutartiesDetails.kaina,
      nuomos_pabaiga: sutartiesDetails.nuomos_pabaiga,
      uzsakovo_id: sutartiesDetails.uzsakovo_id,
    };
    let secondData = {
      data: date,
      kaina: sutartiesDetails.kaina,
      nuomos_pradzia: sutartiesDetails.nuomos_pradzia,
      nuomos_pabaiga: sutartiesDetails.nuomos_pabaiga,
    };

    console.log("first data", firstData);
    console.log("2nd data", secondData);

    if (sutartiesDetails.kaina < 500) {
      const ref1 = firebase.db1.database().ref("DB_1/Sutartis");
      const ref2 = firebase.db1.database().ref("DB_2/Sutartis");

      console.log("ilgis", data.Sutartis.length);
      ref1.child(data.Sutartis.length + 1).update(firstData);
      ref2.child(data.Sutartis.length + 1).update(secondData);

      console.log(sutartiesDetails);
    } else {
      const ref1 = firebase.db2.database().ref("DB_3/Sutartis");
      const ref2 = firebase.db2.database().ref("DB_4/Sutartis");

      ref1.child(thirdData.Sutartis.length + 1).update(firstData);
      ref2.child(thirdData.Sutartis.length + 1).update(secondData);

      console.log(sutartiesDetails);
    }
  };

  return (
    <AppContainer>
      <Row>
        <BtnDiv>
          <div className="card-header">
            <h4>
              <h1>Sutarties kurimas</h1>
              <Link to={"/"} className="btn btn-primary btn-sm float-end">
                {" "}
                Atgal{" "}
              </Link>
            </h4>
          </div>
          <Form>
            <GridDiv>
              <input
                type="number"
                name="kaina"
                onChange={handleOnChange}
                placeholder="kaina"
                initialvalue=""
              ></input>
              <input
                type="date"
                name="nuomos_pradzia"
                onChange={handleOnChange}
                placeholder="nuomos pradzia"
                initialvalue=""
              ></input>
              <input
                type="date"
                name="nuomos_pabaiga"
                placeholder="nuomos pabaiga"
                onChange={handleOnChange}
                initialvalue=""
              ></input>
              <input
                type="text"
                name="uzsakovo_id"
                placeholder="uzsakovo id"
                onChange={handleOnChange}
                initialvalue=""
              ></input>
            </GridDiv>
          </Form>
        </BtnDiv>
      </Row>
      <BtnDiv>
        <Button onClick={create}>Prideti</Button>
      </BtnDiv>
    </AppContainer>
  );
}
