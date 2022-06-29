import Table from "./Table.jsx";
import { useContext } from 'react';
import { WordsContext } from './WordsApi.jsx';

function Home() {
  const data = useContext(WordsContext);

  return (
    <div className="home">
      <Table words={data.wordsList}/>
    </div>
  );
}

export default Home;
