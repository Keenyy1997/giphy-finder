import React from 'react';

import Container from '../Components/Container';
import Text from '../Components/Texts/Text';

export default function FooterComponent() {
  
  return (
    <>
      <Container
        width={'100%'}
        align={'center'}
        margin={'1em auto'}
      >
        <Text>
          Application Powered by <code>Giphy</code> 
          <br/>
          Made with <code>♥</code> by <a href="https://github.com/keenyy1997">Kenny Vallejo</a>
        </Text>
      </Container>
    </>
  );
  
}
