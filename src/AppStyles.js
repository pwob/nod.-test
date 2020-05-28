import styled from 'styled-components';

export const AppContainer = styled.div`
  font-family: Roboto, Helvetica, sans-serif;
  display: flex;
  flow-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
`
export const FormContainer = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  max-width: 80%;
  min-height: 350px;
  background-color: #fff;
  padding: 30px;
  justify-content: center;
  align-items: center;
  box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`

export const SaveButton = styled.button`
  margin: 15px;
  width: 50%;
  height: 45px;
  font-weight: 600;
  font-size: 1em;
  color: white;
  background-color: #89cff0;
  cursor: pointer;
  box-shadow: 0 10px 6px -6px #777;
  
  &:active {
    opacity: 0.5;
    box-shadow: 0;
  }
`
