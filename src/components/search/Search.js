import React, { useState } from "react";
import "./Search.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const Search = (props) => {
  const [whatUserWant, setWhatUserWant] = useState("");


  const userTyped = (event) => {
    props.onSearch(event.target.value);
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="proszę wpisać szukany komputer"
        onChange={userTyped}
      />

    </InputGroup>
  );
};

export default Search;
