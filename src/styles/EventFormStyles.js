
import styled from 'styled-components';

export const FormWrapper = styled.div`
display:flex;
flex-direction:row  ;
background-color: #fff;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.6rem;
`;

export const FormInput = styled.input`
  width: 95%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  // border: 1px solid #ccc;
  // border-radius: 0.25rem;
`;

export const FormButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;
