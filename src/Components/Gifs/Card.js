import React from 'react';
import styled from 'styled-components';

/* Func components */
import Container from '../Container';
import Text from '../Texts/Text';

const Image = styled.img`
  width: 380px;
  height: 280px;
  min-height: 250px;
`;

export default function GifCard({ image, title }) {
  
  return (
    <Container
      width={'23.5%'}
      height={'auto'}
      margin={ '1em 0em' }
    >
      <Container 
        align={'center'}
        height={'3.3em'} >
        <Text>
          {  
            title.length > 100 ? 
              String(title).substr(0, 100) : 
              title
          } 
        </Text>
      </Container>


      <Container
        align={'center'}
        height={'280px'} >
        <Image 
          src={ image }
          alt={ title }
        />
      </Container> 
    </Container>
  );
};
