import styled from 'styled-components';

const ContainerComponent = styled.div`
  width: ${props => props.width ?? '100%'};
  height: ${props => props.height ?? '100%'};
  margin: ${props => props.margin ?? 'auto'};
  padding: ${props => props.padding ?? 'auto'};
  text-align: ${props => props.align ?? 'left'};
  display: ${props => props.inline ? 'inline-block' : 'block'};
  box-sizing: border-box;
  max-width: 1600px;
  max-height: 100%;
`;

export default ContainerComponent;
