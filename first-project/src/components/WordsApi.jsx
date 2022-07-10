import { useState, useEffect, createContext } from "react";
import Loader from "./Loader.jsx";

export const WordsContext = createContext();

function WordsApi(props) {
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState([]);

  useEffect(() => {
    getWords();
  }, []);

  const getWords = () => {
    setIsLoading(true);
    fetch(
      "https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Error ...");
      })
      .then((response) => {
        setWords(response);
      })
      .catch((errors) => setError(errors))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const editWords = (word) => {
    fetch(`https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words/${word.id}/update`, {
      method: 'POST', // или 'PUT'
      body: JSON.stringify(word), // данные могут быть 'строкой' или {объектом}!
    })
      .then(() => {
        getWords();
      })
      .catch((errors) => setError(errors));
  };

  const deleteWords = (id) => {
    fetch(`https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
      method: 'POST', // или 'PUT'
    })
      .then(() => {
        getWords();
      })
      .catch((errors) => setError(errors));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <WordsContext.Provider
      value={{ words, isLoading, error, editWords, deleteWords }}
    >
      {props.children}
    </WordsContext.Provider>
  );
}

export default WordsApi;
