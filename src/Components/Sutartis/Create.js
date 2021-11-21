import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
import { AppContainer, BtnDiv } from "../StyleFiles/Container.style";
import { Row, Form, GridDiv } from "../StyleFiles/Table.style";
import { Button } from "../StyleFiles/Button.style";

export default function Create() {
  const [sutartiesDetails, setSutartiesDetails] = useState({
    kaina: "",
    nuomos_pabaiga: "",
    uzsakovo_id: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSutartiesDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const create = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("kaina", sutartiesDetails.kaina);
    formData.append("nuomos_pabaiga", sutartiesDetails.nuomos_pabaiga);
    formData.append("uzsakovo_id", sutartiesDetails.uzsakovo_id);

    const ref = firebase.db1.database().ref("DB_1/Sutartis");

    console.log(sutartiesDetails);

    ref.push(sutartiesDetails);
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
                initialvalue=""
              ></input>
              <input
                type="date"
                name="nuomos_pabaiga"
                onChange={handleOnChange}
                initialvalue=""
              ></input>
              <input
                type="text"
                name="uzsakovo_id"
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
