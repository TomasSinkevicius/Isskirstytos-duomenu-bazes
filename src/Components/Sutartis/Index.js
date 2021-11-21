import firebase from "../../firebase";
import { useState, useEffect } from "react";
import { Row, Table, TR } from "../StyleFiles/Table.style";
import { Button, ButtonLabel, NavLink } from "../StyleFiles/Button.style";
import { AppContainer, BtnDiv } from "../StyleFiles/Container.style";

function Index() {
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

  const deleteData = () => {
    //const ref = firebase.db1.database().ref("DB_1/Sutartis").child(sutartis.index);
    //ref.remove();
  };
  return (
    <AppContainer>
      <BtnDiv>
        <Button>
          <NavLink to="/Create">Prideti</NavLink>
        </Button>
      </BtnDiv>
      <Row>
        <div>
          <h4>Sutartis db1</h4>
          <Table>
            <TR>
              <th>Id</th>
              <th>Kaina</th>
              <th>Nuomos pabaiga</th>
              <th>Uzsakovo id</th>
              <th></th>
              <th></th>
            </TR>
            {data &&
              Object.values(data.Sutartis).map((sutartis, index) => (
                <TR>
                  <td>{index}</td>
                  <td>{sutartis.kaina}</td>
                  <td>{sutartis.nuomos_pabaiga}</td>
                  <td>{sutartis.uzsakovo_id}</td>
                  <td>
                    <Button backgroundColor="#D7D134" onClick={deleteData}>
                      {" "}
                      <ButtonLabel>Redaguoti</ButtonLabel>{" "}
                    </Button>
                  </td>
                  <td>
                    <Button backgroundColor="red">
                      {" "}
                      <ButtonLabel>Trinti</ButtonLabel>{" "}
                    </Button>
                  </td>
                </TR>
              ))}
          </Table>
        </div>
        <div>
          <h4>Sutartis db2</h4>
          <Table>
            <TR>
              <th>Id</th>
              <th>Data</th>
              <th>Kaina</th>
              <th>Nuomos pradzia</th>
              <th>Nuomos pabaiga</th>
              <th></th>
              <th></th>
            </TR>
            {secondData &&
              secondData.Sutartis.map((sutartis, index) => (
                <TR>
                  <td>{index}</td>
                  <td>{sutartis.data}</td>
                  <td>{sutartis.kaina}</td>
                  <td>{sutartis.nuomos_pradzia}</td>
                  <td>{sutartis.nuomos_pabaiga}</td>
                  <td>
                    <Button backgroundColor="#D7D134">
                      {" "}
                      <ButtonLabel>Redaguoti</ButtonLabel>{" "}
                    </Button>
                  </td>
                  <td>
                    <Button backgroundColor="red">
                      {" "}
                      <ButtonLabel>Trinti</ButtonLabel>{" "}
                    </Button>
                  </td>
                </TR>
              ))}
          </Table>
        </div>
      </Row>
      <Row>
        <div>
          <h4>Sutartis db3</h4>
          <Table>
            <TR>
              <th>Id</th>
              <th>Kaina</th>
              <th>Nuomos pabaiga</th>
              <th>Uzsakovo id</th>
              <th></th>
              <th></th>
            </TR>
            {thirdData &&
              thirdData.Sutartis.map((sutartis, index) => (
                <TR>
                  <td>{index}</td>
                  <td>{sutartis.kaina}</td>
                  <td>{sutartis.nuomos_pabaiga}</td>
                  <td>{sutartis.uzsakovo_id}</td>
                  <td>
                    <Button backgroundColor="#D7D134">
                      {" "}
                      <ButtonLabel>Redaguoti</ButtonLabel>{" "}
                    </Button>
                  </td>
                  <td>
                    <Button backgroundColor="red">
                      {" "}
                      <ButtonLabel>Trinti</ButtonLabel>{" "}
                    </Button>
                  </td>
                </TR>
              ))}
          </Table>
        </div>
        <div>
          <h4>Sutartis db4</h4>
          <Table>
            <TR>
              <th>Id</th>
              <th>Data</th>
              <th>Kaina</th>
              <th>Nuomos pradzia</th>
              <th>Nuomos pabaiga</th>
              <th></th>
              <th></th>
            </TR>
            {fourthData &&
              fourthData.Sutartis.map((sutartis, index) => (
                <TR>
                  <td>{index}</td>
                  <td>{sutartis.data}</td>
                  <td>{sutartis.kaina}</td>
                  <td>{sutartis.nuomos_pradzia}</td>
                  <td>{sutartis.nuomos_pabaiga}</td>
                  <td>
                    <Button backgroundColor="#D7D134">
                      {" "}
                      <ButtonLabel>Redaguoti</ButtonLabel>{" "}
                    </Button>
                  </td>
                  <td>
                    <Button backgroundColor="red">
                      {" "}
                      <ButtonLabel>Trinti</ButtonLabel>{" "}
                    </Button>
                  </td>
                </TR>
              ))}
          </Table>
        </div>
      </Row>
    </AppContainer>
  );
}

export default Index;
