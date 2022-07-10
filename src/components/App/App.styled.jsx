import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  margin: 0 auto;
  background-color: #fafafa;
  padding: 20px;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #333;
  text-align: center;
  border: solid 1px #ccc;
  border-radius: 10px;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 10px;
  font-size: 24px;
  font-weight: bold;
`;
