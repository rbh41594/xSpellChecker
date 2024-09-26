import React, { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
  becuase: "because",
  adress: "address",
  arguement: "argument",
  beleive: "believe",
  definately: "definitely",
  occurence: "occurrence",
  recieve: "receive",
  seperate: "separate",
  accomodate: "accommodate",
  acheive: "achieve",
  goverment: "government",
  independant: "independent",
  neccessary: "necessary",
  recomend: "recommend",
  responsibilty: "responsibility",
  sucess: "success",
  accomodation: "accommodation",
  embarass: "embarrass",
  enviroment: "environment",
  harass: "harass",
  inteligent: "intelligent",
  priviledge: "privilege",
  vaccum: "vacuum",
  writting: "writing",
  wierd: "weird",
  occured: "occurred",
  untill: "until",
  surprize: "surprise",
  withold: "withhold",
  seperate: "separate",
  thier: "their",
  recieve: "receive",
  occured: "occurred",
  alot: "a lot",
  wich: "which",
  begining: "beginning",
  wierd: "weird",
  mispell: "misspell",
  ocur: "occur",
  persue: "pursue",
  preceed: "precede",
  recomendation: "recommendation",
  tommorrow: "tomorrow",
  writen: "written",
};

const App = () => {
  const [inputText, setInputText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);

    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });

    const correctedText = correctedWords.join(" ");

    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );
    setSuggestedText(firstCorrection || "");
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      />
      {suggestedText && (
        <p>
          Did you mean: <strong>{suggestedText}</strong>?
        </p>
      )}
    </div>
  );
};

export default App;
