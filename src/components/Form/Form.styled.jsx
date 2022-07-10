import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 100%;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const InputForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  label {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  input {
    margin-left: auto;
  }
  button {
    margin-left: auto;
  }
`;

export const ErrorStyled = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
  position: absolute;
  top: 20px;
  right: 100px;
  background-color: #ffffff;
  padding: 5px;
  width: 100%;
  z-index: 2;
  text-align: justify;
  border: solid 1px #ccc;
  border-radius: 10px;
`;
