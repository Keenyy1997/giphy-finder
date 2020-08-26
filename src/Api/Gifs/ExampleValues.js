import RandomNumber from '../Numbers/Random';

const ExampleValues = [
  "Rick And Morty",
  "Avengers",
  "Javascript",
  "React",
  "Dogs",
  "Yeahh",
  "Rockets",
];

const GetRandomExample = () => {

  const RandomIndex = RandomNumber(0, ExampleValues.length - 1);
 
  return `${ExampleValues[RandomIndex]}...`;
};

export default GetRandomExample;
