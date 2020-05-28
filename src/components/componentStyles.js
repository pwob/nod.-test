import styled from 'styled-components';

export const Description = styled.span`
  display: none;
  position: absolute;
  z-index: 200;
`

export const FormContainer = styled.div`
  position: relative;
  
  &:hover ${Description} {
      display: block;
      width: 180px;
      background-color: black;
      color: #fff;
      text-align: center;
      padding: 5px 0;
      border-radius: 6px;
      font-size: .7em;
      
      bottom: 100%;
  }
`

export const Error = styled.div`
  width: 100%;
  text-align: center;
  color: red;
  font-style: italic;
  font-size: .7em;
`
