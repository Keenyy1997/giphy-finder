import React from 'react';

import Container from '../Container';
import ContainerFlex from '../Containers/FlexRow';
import Title from '../Texts/Title';
import GifCard from './Card';

export default function GifTable ({ gifs, loading, error }) {


  if (error)
    return (
      <Container align={'center'}>
        <Title color={'red'}>
          Ups! <br/>
          <Title size={'0.5em'}>{ error }</Title>
        </Title>
      </Container>
    );
  else if (loading)
    return (
      <Container align={'center'}>
        <Title>
          Searching your gifs...
        </Title>
      </Container>
    );  
  else if (gifs.length === 0) { 
    return (
      <Container align={'center'}>
        <Title>
           No gifs found <span role="img" aria-label="eyes">👀</span>
        </Title>
      </Container>
    );  
  }
  else {
    return (
      <ContainerFlex align={ 'center' }>
        {
          gifs.map((item) => {
            return (
              <GifCard
                image={ item.image }
                title={ item.title }
                key={ item.id }
              />
            );
          })
        }
      </ContainerFlex>
    );  
  }
}
