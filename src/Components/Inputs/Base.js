import styled from 'styled-components';

const InputBase = styled.input`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: ${props => props.size ?? '1.5em'};
  padding: 0.5em;
  box-sizing: border-box;
  border: 1px solid #666;
  outline: none;
  border: 0;
  width: 100%;
`;

export default InputBase;
