import React, { useState } from "react";
import styled from "styled-components";
import { AppContainer, BtnDiv } from "./StyleFiles/Container.style";
import { Row, Form, GridDiv } from "./StyleFiles/Table.style";
import { Button } from "./StyleFiles/Button.style";
import { Link } from "react-router-dom";
import firebase from "../firebase";

const Container = styled.div`
  width: 400px;
  height: 400px;
  background: #afa1a1;
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
`;
export const Edit = ({ visible, setVisible, data, thirdData }) => {
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSutartiesDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const [sutartiesDetails, setSutartiesDetails] = useState({
    kaina: visible.data.kaina ? visible.data.kaina : "",
    nuomos_pabaiga: visible.data.nuomos_pabaiga
      ? visible.data.nuomos_pabaiga
      : "",
    nuomos_pradzia: visible.data.nuomos_pradzia
      ? visible.data.nuomos_pradzia
      : "",
    uzsakovo_id: visible.data.uzsakovo_id ? visible.data.uzsakovo_id : "",
    // kaina: null,
    // nuomos_pabaiga: null,
    // nuomos_pradzia: null,
    // uzsakovo_id: null,
  });
  let today = new Date();
  let [date, setDate] = useState(
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear()
  );

  const edit = (e) => {
    e.preventDefault();
    console.log(visible);
    let firstData = {
      kaina: sutartiesDetails.kaina,
      nuomos_pabaiga: sutartiesDetails.nuomos_pabaiga,
      uzsakovo_id: sutartiesDetails.uzsakovo_id,
    };
    let firstData1 = {
      kaina: sutartiesDetails.kaina,
      nuomos_pabaiga: sutartiesDetails.nuomos_pabaiga,
    };
    let secondData = {
      data: date,
      kaina: sutartiesDetails.kaina,
      nuomos_pradzia: sutartiesDetails.nuomos_pradzia,
      nuomos_pabaiga: sutartiesDetails.nuomos_pabaiga,
    };
    let secondData1 = {
      data: date,
      kaina: sutartiesDetails.kaina,
      nuomos_pabaiga: sutartiesDetails.nuomos_pabaiga,
    };

    switch (visible.database) {
      case 1:
        const ref1 = firebase.db1.database().ref("DB_1/Sutartis");
        const ref2 = firebase.db1.database().ref("DB_2/Sutartis");

        firstData = visible.tableType === 1 ? firstData : firstData1;
        secondData = visible.tableType === 1 ? secondData1 : secondData;
        ref1.child(visible.data.id).update(firstData);
        ref2.child(visible.data.id).update(secondData);
        break;
      case 2:
        const ref3 = firebase.db2.database().ref("DB_3/Sutartis");
        const ref4 = firebase.db2.database().ref("DB_4/Sutartis");
        firstData = visible.tableType === 1 ? firstData : firstData1;
        secondData = visible.tableType === 1 ? secondData1 : secondData;
        ref3.child(visible.data.id).update(firstData);
        ref4.child(visible.data.id).update(secondData);
        break;

      default:
    }
  };
  console.log(sutartiesDetails);
  return (
    <Container>
      <button
        onClick={() =>
          setVisible({ visible: false, database: visible.database })
        }
      >
        X
      </button>
      <Row>
        <BtnDiv>
          <div className="card-header">
            <h4>
              <h1>Sutarties kurimas</h1>
            </h4>
          </div>
          {visible.tableType === 1 ? (
            <Form>
              <GridDiv>
                Kaina
                <input
                  type="number"
                  name="kaina"
                  onChange={handleOnChange}
                  placeholder="kaina"
                  value={sutartiesDetails.kaina}
                ></input>
                Nuomos pabaiga
                <input
                  type="date"
                  name="nuomos_pabaiga"
                  placeholder="nuomos pabaiga"
                  onChange={handleOnChange}
                  value={sutartiesDetails.nuomos_pabaiga}
                ></input>
                Uzsakovo id
                <input
                  type="text"
                  name="uzsakovo_id"
                  placeholder="uzsakovo id"
                  onChange={handleOnChange}
                  value={sutartiesDetails.uzsakovo_id}
                ></input>
              </GridDiv>
            </Form>
          ) : (
            <Form>
              <GridDiv>
                Kaina
                <input
                  type="number"
                  name="kaina"
                  onChange={handleOnChange}
                  placeholder="kaina"
                  value={sutartiesDetails.kaina}
                ></input>
                Nuomos pradzia
                <input
                  type="date"
                  name="nuomos_pradzia"
                  onChange={handleOnChange}
                  placeholder="nuomos pradzia"
                  value={sutartiesDetails.nuomos_pradzia}
                ></input>
                nuomos pabaiga
                <input
                  type="date"
                  name="nuomos_pabaiga"
                  placeholder="nuomos pabaiga"
                  onChange={handleOnChange}
                  value={sutartiesDetails.nuomos_pabaiga}
                ></input>
              </GridDiv>
            </Form>
          )}
        </BtnDiv>
      </Row>
      <BtnDiv>
        <Button onClick={edit}>Redaguoti</Button>
      </BtnDiv>
    </Container>
  );
};
