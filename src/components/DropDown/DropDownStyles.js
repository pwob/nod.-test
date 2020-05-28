import styled from 'styled-components';

export const Multi = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

export const Options = styled.div`
  visibility: hidden;
  position: absolute;
  z-index: 100;
  
  span {
    cursor: pointer;
    background-color: #fed8b1;
    color: #fff;
    margin: 5px;
    padding: 5px;
    border-radius: 10px;
    width: 100%;
    display: block;
    text-align: center;

    &:hover {
      opacity: 0.5;
    }
  }
`

export const Select = styled.div`
  vertical-align: middle;
  position: relative;
  margin: 5px 10px 5px 0;
  background-color: #fff;
  border: 1px solid #ddd;
  display: inline-block;
  width: 200px;
  min-height: 30px;
  padding: 5px;

  &:hover ${Options} {
    visibility: visible;
  }
`;

export const Label = styled.label`
  margin: 5px 10px 5px 0;
`;

export const Selected = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
`;

export const Chosen = styled.div`
  margin: 5px;
  border: 1px solid #000;
  padding: 5px;
  text-align: center;

  &:hover {
    span {
      background-color: red;
    }
  }

  span {
    cursor: pointer;  
    border: 1px solid #000;
    border-radius: 50%;
    &::after {
      content: 'x';
      margin: 4px;
    }
  }
`