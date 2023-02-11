import styled from "styled-components";

export const DropdownWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  background: white;
`;

export const StyledSelect = styled.select`
  max-width: 80%;
  text-align: center;
  padding: 0em;
  margin: 0em;
  margin-bottom: 0.1;
  background: #007bff;
  color: white;
  border-radius: 0.3rem;
  

`;

export const StyledOption = styled.option`
  color: ${(props) => (props.selected ? "lightgrey" : "black")};
`;

export const StyledLabel = styled.label`
  margin-bottom: 0;
  justify-content: center;
  margin-left: 1rem;
  
`;

export const StyledButton = styled.input`
  max-width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  border: solid 2px blue;
  border-radius: 1rem;
`;