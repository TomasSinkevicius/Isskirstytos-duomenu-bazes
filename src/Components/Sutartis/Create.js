import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
import { AppContainer, BtnDiv } from "../StyleFiles/Container.style";
import { Row, Form, GridDiv } from "../StyleFiles/Table.style";
import { Button } from "../StyleFiles/Button.style";

export default function Create() {
  const [sutartiesDetails, setSutartiesDetails] = useState({
    data: "",
    kaina: "",
    nuomos_pabaiga: "",
    nuomos_pradzia: "",
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

    let formData1 = new FormData();
    formData1.append("kaina", sutartiesDetails.kaina);
    formData1.append("nuomos_pabaiga", sutartiesDetails.nuomos_pabaiga);
    formData1.append("uzsakovo_id", sutartiesDetails.uzsakovo_id);

    let formData2 = new FormData();
    formData2.append("data", sutartiesDetails.data);
    formData2.append("kaina", sutartiesDetails.kaina);
    formData2.append("nuomos_pabaiga", sutartiesDetails.nuomos_pabaiga);
    formData2.append("nuomos_pradzia", sutartiesDetails.nuomos_pradzia);

    if (sutartiesDetails.kaina < 500) {
      const ref1 = firebase.db1.database().ref("DB_1/Sutartis");
      const ref2 = firebase.db1.database().ref("DB_2/Sutartis");
      // ref1.push(formData1);
      // ref2.push(formData2);
      console.log(sutartiesDetails);
    } else {
      const ref1 = firebase.db2.database().ref("DB_3/Sutartis");
      const ref2 = firebase.db2.database().ref("DB_4/Sutartis");
      // ref1.push(formData1);
      // ref2.push(formData2);
      console.log(sutartiesDetails);
    }
  };

  let today = new Date();
  let [date, setDate] = useState(
    today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
  );

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
                type="date"
                name="data"
                onChange={handleOnChange}
                value = {date}
              ></input>
              <input
                type="number"
                name="kaina"
                onChange={handleOnChange}
                initialvalue=""
              ></input>
              <input
                type="date"
                name="nuomos_pradzia"
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
