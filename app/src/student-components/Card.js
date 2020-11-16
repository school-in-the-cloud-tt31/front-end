import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  border: 1px solid #dedede;
  border-radius: 10px;
  box-shadow: 5px 5px 13px -6px #000000;
  width: 30%;
  padding-left: 1%;
  margin: 0 auto;
`;

export default function Card() {
  return (
    <StyledCard>
      <h2>Volunteer Name</h2>
      <p>Monday, Tuesday, Friday // USA</p>
    </StyledCard>
  );
}
