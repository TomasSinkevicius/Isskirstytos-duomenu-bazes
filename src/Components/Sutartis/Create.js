import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
import { AppContainer, BtnDiv } from "../StyleFiles/Container.style";
import { Row, Form, GridDiv } from "../StyleFiles/Table.style";
import { Button } from "../StyleFiles/Button.style";

export default function Create() {
  const [kaina, setKaina] = useState("");
  const [nuomos_pabaiga, setPabaiga] = useState("");
  const [uzsakovo_id, setID] = useState("");

  const HandleOnChange = (e) => {
    setKaina(e.target.value);
    setPabaiga(e.target.value);
    setID(e.target.value);
  };

  const create = () => {
    const ref = firebase.database().ref("DB_1/Sutartis");
    const data = {
      kaina,
      nuomos_pabaiga,
      uzsakovo_id,
    };

    ref.push(data);
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
                onChange={HandleOnChange}
                value={kaina}
              ></input>
              <input
                type="date"
                name="pabaiga"
                onChange={HandleOnChange}
                value={nuomos_pabaiga}
              ></input>
              <input
                type="text"
                name="id"
                onChange={HandleOnChange}
                value={uzsakovo_id}
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
