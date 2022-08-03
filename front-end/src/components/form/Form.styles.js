import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  background-color: #fafafa;
  padding: 5px;

  form {
    display: flex;
    flex-flow: column nowrap;
    gap: 8px;
  }

  p {
  }

  button {
    width: fit-content;
    padding: 2px 6px 2px 6px;
    align-self: flex-end;
    border-radius: 5px;
    border: 1px solid #d3d3d3;
    outline-style: none;
  }

  span { 
    display: flex; 
    flex-flow: row nowrap; 
    gap: 8px;
    align-self: flex-end;
  }
`;

export const Error = styled.p`
  color: red;
  font-weight: bold;
`;

export const Success = styled.p`
  color: darkgreen;
  font-weight: bold;
`;

export default Container;
