import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 10px;
  margin-top: 0;
  position: relative;
`;

export const Bar = styled.div`
  position: absolute;
  background: #00AFF0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
`;

export const Progress = styled.div`
  background: #00AFF0;
  height: 10px;
  width: ${({progress}) => progress}%;
`;