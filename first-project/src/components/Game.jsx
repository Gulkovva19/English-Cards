import Card from "./Card.jsx";

let wordsJson = [
  {
    id: "11343",
    english: "carrot",
    transcription: "[ ˈkærət ]",
    russian: "морковь",
    tags: "овощи",
    tags_json: '["u043eu0432u043eu0449u0438"]',
    isEdit: true,
  },
];

function Game() {
  return (
    <div className="game">
      {wordsJson.map((word) => (
      <Card
        english={word.english}
        transcription={word.transcription}
        russian={word.russian}
      />
      ))}
    </div>
  );
}

export default Game;
