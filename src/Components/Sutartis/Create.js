import React, { useState, useEffect } from "react";
import firebase from "../../firebase"
import { AppContainer } from "../StyleFiles/Container.style";
import { Button } from "../StyleFiles/Button.style";

export default function Create(){
    const [title, setTitle] = useState('');

    const HandleOnChange = (e) => {
        setTitle(e.target.value);
    }

    const create = () => {
        const ref = firebase.database().ref("DB_1");
        const data = {
            title,
        };

        ref.push(data);
    }
  return (
    <AppContainer>
      <form>
        <input type="text" onChange={HandleOnChange}></input>
      </form>
      <Button onClick={create}>Prideti</Button>
    </AppContainer>
  );
};
