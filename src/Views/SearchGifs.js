import React, { useEffect, useState } from 'react';

/* API calls */
import GetRandomExample from '../Api/Gifs/ExampleValues';
import { FindGifs } from '../Api/Gifs/Fetch';
import { SaveSearch, ReturnLastSearch } from '../Api/State/Local';

/* Components */
import Container from '../Components/Container';
import ContainerMaxHeight from '../Components/Containers/MaxHeight';
import Footer from '../Components/Footer';

/* Func Components */
import Title from '../Components/Texts/Title';
import Input from '../Components/Inputs/Base';
import GifTable from '../Components/Gifs/Table';

export default function SearchGifs() {

  const [ error, setError ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const [ gifs, setGifs ] = useState([]);

  const [ value, setValue ] = useState('');
  const [ example, setExample ] = useState('Search by...');

  useEffect(() => {

    const ExampleInterval = setInterval(() => {

      const RandomExample = GetRandomExample();


      console.log('setting new example...', RandomExample);
      setExample(RandomExample);
      
    }, 3500);

    FindLastSearch();

    return () => {
      clearInterval(ExampleInterval);
    };
  // eslint-disable-next-line
  }, [ ])

  function FindLastSearch() { 
    const LastSearch = ReturnLastSearch();
    if (LastSearch) {
      setValue(LastSearch);
      searchGifs(null, LastSearch);
    } 
  }

  async function searchGifs(e, search = value ){
    if (e) {
      e.preventDefault();
    }

    setLoading(true);
    const { error, data } = await FindGifs(search);

    if (error)
      setError(error);
    
    setGifs(data);
    setLoading(false);
  }

  function updateValue(value) { 
    SaveSearch(value);
    setValue(value);
  }
  
  return (
    <>
      <ContainerMaxHeight>
        <Container 
          inline 
          width={'50%'} height={ 'auto' }
        >
          <Title size={ "4.5em" } padding={ "0.5em" }>
            GIF Finder  
          </Title>
        </Container>

        <Container 
          inline 
          width={'50%'} height={ 'auto' }
          align={ "right" }
        >
          <form onSubmit={ searchGifs }> 
            <Input 
              size={ "4.5em"}
              value={ value }
              onChange={ (e) => updateValue(e.target.value) }
              placeholder={ example }
            />
          </form>
        </Container>


        <Container
          height={'auto'}
          margin={'2.5em 0em'}
        >
          <GifTable
            error={ error }
            loading={ loading }
            gifs={ gifs}
          />
        </Container>

      </ContainerMaxHeight> 
      <Footer/>
    </>
  );
};
