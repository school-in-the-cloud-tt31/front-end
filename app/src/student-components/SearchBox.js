import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  text-align: center;

  .search {
    padding: 0.7%;
    margin: 1% 0.5%;
    background-color: #dedede;
    border: none;
    border-radius: 5px;
    width: 20%;
  }

  .searchButton {
    background-color: #2e2e2e;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.7%;

    &:hover {
      color: #2e2e2e;
      background-color: #dedede;
    }
  }
`;

export default function SearchBox() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        className="search"
        type="text"
        name="search"
        value={value}
        placeholder="Search"
        onChange={handleChange}
      />
      <button className="searchButton" type="submit">
        Search
      </button>
    </StyledForm>
  );
}
