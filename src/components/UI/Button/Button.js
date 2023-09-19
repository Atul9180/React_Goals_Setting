import React from "react";
// import "./Button.css";
import styled from "styled-components";

// a tagged template literal with a button element: styled.button``
//button method is just a method on this styled object ..this button will return a button component
const StyledButton = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }

  &.invalid,
  &.invalid:hover {
    color: black;
    background: #de1313;
    border-color: #de1313;
  }
`;

const Button = ({ type, isValid, children }) => {
  return (
    <StyledButton type={type} className={!isValid ? "invalid" : ""}>
      {children}
    </StyledButton>
  );
};

export default Button;
