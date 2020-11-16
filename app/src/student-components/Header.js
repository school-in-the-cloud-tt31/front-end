import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  margin: 0;
  padding: 1%;
  background-color: #2e2e2e;
  color: white;
  text-align: center;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Student Dashboard</h1>
    </StyledHeader>
  );
}
