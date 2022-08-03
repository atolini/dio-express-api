import styled from "styled-components";

const Container = styled.div`
  background-color: #fafafa;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  padding: 5px;

  display: flex;
  flex-flow: column nowrap;
  gap: 8px;

  hr {
    color: #d3d3d3;
  }
`;

export const Comment = styled.div`
  margin-left: 10px;
`;

export const Details = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  font-style: italic;
  font-size: 12px;

  span {
    display: flex;
    flex-flow: row nowrap;
    gap: 8px;
  }

  button {
    width: fit-content;
    padding: 2px 6px 2px 6px;
    align-self: flex-end;
    border-radius: 5px;
    border: 1px solid #d3d3d3;
    outline-style: none;
  }
`;

export default Container;
