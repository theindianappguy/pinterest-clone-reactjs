import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

export default function Pin({ url, term, index }) {
  return (
    <div key={uuidv4()}>
      <Wrapper>
        <Container>
          <img src={url} alt={`pin${index}`} />
        </Container>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: inline-flex;
  padding: 8px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 236px;

  img {
    display: flex;
    width: 100%;
    cursor: zoom-in;
    border-radius: 12px;
    object-fit: cover;
  }
`;
