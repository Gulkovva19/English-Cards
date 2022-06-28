import { useState, useEffect, createContext } from "react";
import Loader from "./Loader.jsx";

export const WordsContext = createContext();

const getWords = () =>
  fetch(
    "https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words"
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Something went wrong ...");
    })
    .then(
      (response) =>
        response
    )
    .catch((err) => console.log(err));



const WordsApi = ({ children }) => {
  const [wordsList, setWordsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Обратились к API");
    const wordsRes = async () => {
      const words = await getWords();
      console.log(3, words);
      setWordsList(words);
      setIsLoading(false);
    };
    wordsRes();
  }, []);

  // const wordEdit = (word) => {
  //   console.log(word);
  // };
  // const wordDelete = (word) => {
  //   const newWordsList = [...wordsList].filter((wordF) => wordF.id !== word.id);
  //   setWordsList(newWordsList);
  // };

  const valueContext = {
    wordsList,
    // wordEdit,
    // wordDelete,
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <WordsContext.Provider value={valueContext}>
      {children}
    </WordsContext.Provider>
  );
};

export default WordsApi;
