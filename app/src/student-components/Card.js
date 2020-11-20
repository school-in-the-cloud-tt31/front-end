import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
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
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/users/volunteers")
      .then((res) => {
        setVolunteers(res.data);
      });
  }, []);

  return (
    <div>
      {volunteers.map((volunteer) => {
        return (
          <StyledCard>
            <h2>{volunteer.username}</h2>
            <p>
              {volunteer.country} // {volunteer.available}
            </p>
          </StyledCard>
        );
      })}
    </div>
  );
}
