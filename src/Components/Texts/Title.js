import styled from 'styled-components';


const TitleComponent = styled.h1`
  font-size: ${props => props.size ?? '2.5em'};
  color: ${props => props.color ?? '#122'};
  font-weight: bolder;
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  display: block;
  padding: ${props => props.padding ?? '0'};
  box-sizing: border-box;
`;

export default TitleComponent;
