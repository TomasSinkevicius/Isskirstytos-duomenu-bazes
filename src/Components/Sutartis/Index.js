import firebase from "../../firebase";
import { useState, useEffect } from "react";
import { Row, Table, TR } from "../StyleFiles/Table.style";
import { Button, ButtonLabel, NavLink } from "../StyleFiles/Button.style";
import { AppContainer, BtnDiv, TableName } from "../StyleFiles/Container.style";
import { Edit } from "../edit";

function Index() {
  const [visible, setVisible] = useState({ visible: false, database: 0 });
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
  console.log("first data", data);
  console.log("second data", secondData);
  console.log("third data", thirdData);
  console.log("fourth data", fourthData);

  const deleteData = (id, databaseNumber) => {
    console.log("id", id);
    console.log("db id", databaseNumber);

    switch (databaseNumber) {
      case 1:
        // code block
        const ref1 = firebase.db1.database().ref("DB_1/Sutartis").child(id);
        const ref2 = firebase.db1.database().ref("DB_2/Sutartis").child(id);
        ref1.remove();
        ref2.remove();
        break;
      case 2:
        const ref3 = firebase.db2.database().ref("DB_3/Sutartis").child(id);
        const ref4 = firebase.db2.database().ref("DB_4/Sutartis").child(id);
        ref3.remove();
        ref4.remove();
        break;

      default:
    }
  };

  console.log(visible);

  return (
    <AppContainer>
      {visible.visible && (
        <Edit
          visible={visible}
          setVisible={setVisible}
          data={data}
          thirdData={thirdData}
        />
      )}
      <BtnDiv>
        <Button>
          <NavLink to="/Create">Prideti</NavLink>
        </Button>
      </BtnDiv>
      <Row>
        <div>
          <TableName>Sutartis db1</TableName>
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
                  <td>{sutartis.id}</td>
                  <td>{sutartis.kaina}</td>
                  <td>{sutartis.nuomos_pabaiga}</td>
                  <td>{sutartis.uzsakovo_id}</td>
                  <td>
                    <Button backgroundColor="#EEDC82">
                      {" "}
                      <ButtonLabel
                        onClick={() =>
                          setVisible({
                            visible: true,
                            database: 1,
                            tableType: 1,
                            data: sutartis,
                          })
                        }
                      >
                        Redaguoti
                      </ButtonLabel>{" "}
                    </Button>
                  </td>
                  <td>
                    <Button backgroundColor="#FF4500">
                      {" "}
                      <ButtonLabel onClick={() => deleteData(sutartis.id, 1)}>
                        Trinti
                      </ButtonLabel>{" "}
                    </Button>
                  </td>
                </TR>
              ))}
          </Table>
        </div>
        <div>
          <TableName>Sutartis db2</TableName>
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
              Object.values(secondData.Sutartis).map((sutartis, index) => (
                <TR>
                  <td>{index}</td>
                  <td>{sutartis.data}</td>
                  <td>{sutartis.kaina}</td>
                  <td>{sutartis.nuomos_pradzia}</td>
                  <td>{sutartis.nuomos_pabaiga}</td>
                  <td>
                    <Button backgroundColor="#EEDC82">
                      {" "}
                      <ButtonLabel
                        onClick={() =>
                          setVisible({
                            visible: true,
                            database: 1,
                            tableType: 2,
                            data: sutartis,
                          })
                        }
                      >
                        Redaguoti
                      </ButtonLabel>{" "}
                    </Button>
                  </td>
                  <td>
                    <Button backgroundColor="#FF4500">
                      {" "}
                      <ButtonLabel onClick={() => deleteData(sutartis.id, 1)}>
                        Trinti
                      </ButtonLabel>{" "}
                    </Button>
                  </td>
                </TR>
              ))}
          </Table>
        </div>
      </Row>
      <Row>
        <div>
          <TableName>Sutartis db3</TableName>
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
              Object.values(thirdData.Sutartis).map((sutartis, index) => (
                <TR>
                  <td>{index}</td>
                  <td>{sutartis.kaina}</td>
                  <td>{sutartis.nuomos_pabaiga}</td>
                  <td>{sutartis.uzsakovo_id}</td>
                  <td>
                    <Button backgroundColor="#EEDC82">
                      {" "}
                      <ButtonLabel
                        onClick={() =>
                          setVisible({
                            visible: true,
                            database: 2,
                            tableType: 1,
                            data: sutartis,
                          })
                        }
                      >
                        Redaguoti
                      </ButtonLabel>{" "}
                    </Button>
                  </td>
                  <td>
                    <Button backgroundColor="#FF4500">
                      {" "}
                      <ButtonLabel onClick={() => deleteData(sutartis.id, 2)}>
                        Trinti
                      </ButtonLabel>{" "}
                    </Button>
                  </td>
                </TR>
              ))}
          </Table>
        </div>
        <div>
          <TableName>Sutartis db4</TableName>
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
              Object.values(fourthData.Sutartis).map((sutartis, index) => (
                <TR>
                  <td>{index}</td>
                  <td>{sutartis.data}</td>
                  <td>{sutartis.kaina}</td>
                  <td>{sutartis.nuomos_pradzia}</td>
                  <td>{sutartis.nuomos_pabaiga}</td>
                  <td>
                    <Button backgroundColor="#EEDC82">
                      {" "}
                      <ButtonLabel
                        onClick={() =>
                          setVisible({
                            visible: true,
                            database: 2,
                            tableType: 2,
                            data: sutartis,
                          })
                        }
                      >
                        Redaguoti
                      </ButtonLabel>{" "}
                    </Button>
                  </td>
                  <td>
                    <Button backgroundColor="#FF4500">
                      {" "}
                      <ButtonLabel onClick={() => deleteData(sutartis.id, 2)}>
                        Trinti
                      </ButtonLabel>{" "}
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
