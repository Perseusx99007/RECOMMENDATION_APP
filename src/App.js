import React from "react";
import "./styles.css";
import { useState } from "react";

const Books = {
  coding: [
    { name: "Eloquent JavaScript", contributor: "Marijn Haverbeke" },
    { name: "Seven Languages in Seven Weeks", contributor: "Bruce Tate" },
    { name: "Fundamentals of Computers", contributor: "E. Balagurusamy" }
  ],

  fiction: [
    { name: "The Percy Jckson Series", contributor: "Rick Rirdan" },
    { name: "The Shiva Trilogy", contributor: "Amish Tripathi" },
    { name: "The Harry Potter Series", contributor: "J.K. Rowling" }
  ],

  business: [
    {
      name: "Never Split the Difference",
      contributor: "Christopher Voss and Tahl Raz"
    },
    { name: "Loonshots", contributor: "Safi Bahcall" },
    { name: "The Hard Thing About Hard Things", contributor: "Ben Horowitz" }
  ]
};

const Songs = {
  rock: [
    { name: "One  Moe Light", contributor: "Linkin Park" },
    { name: "Stars", contributor: "Skillet" },
    { name: "I Will Not Bow", contributor: "Breaking Benjamin" }
  ],

  soul: [
    { name: "Visiting Hours", contributor: "Ed Sheeran" },
    { name: "Dil Ka Dariya", contributor: "Arijit Sing" },
    { name: "Teri Mitti", contributor: "B Praak" }
  ],

  rap: [
    { name: "Lose Yourself", contributor: "EMINEM" },
    { name: "Aathma Raama", contributor: "Brodha V" },
    { name: "Lost in The Echo", contributor: "Linkin Park" }
  ]
};

const Movies = {
  action: [
    { name: "Marvel Avengers Series", contributor: "Anthony & Joe Russo" },
    { name: "Justice League", contributor: "Zack Snyder" },
    { name: "R.R.R.", contributor: "S. S. Rajamouli" }
  ],

  thriller: [
    { name: "Rocketry: The Nambi Effect", contributor: "R Madhavan" },
    { name: "Uri: The Surgical Strike", contributor: "Aditya Dhar" },
    { name: "Shershaah", contributor: "Vishnuvardhan" }
  ],

  sliceOfLife: [
    { name: "777 Charlie", contributor: "Kiranraj K" },
    { name: "Hachi: A Dog's Tale", contributor: "Lasse Hallström" },
    { name: "Dead Poets Society", contributor: "Peter Weir" }
  ]
};

var dataBase = { Books, Songs, Movies };

export default function App() {
  let [selectedType, setType] = useState("");
  let [dataBase2, setDataBase2] = useState("");
  let [selectedType2, setType2] = useState("");
  function typeClickHandler(type) {
    setType(type);
    // if (selectedType !== "") {
    //   dataBase2 = Object.keys(dataBase[selectedType]);
    //   console.log(dataBase2);
    //   console.log(Object.keys(dataBase[selectedType]));
    // }
    if (type === "Books") {
      setDataBase2(Books);
      console.log(Books);
    }
    if (type === "Songs") {
      setDataBase2(Songs);
      console.log(Songs);
    }
    if (type === "Movies") {
      setDataBase2(Movies);
      console.log(Movies);
    }
  }

  function genreClickHandler(type2) {
    // setDataBase2(typeClickHandler(selectedType));
    setType2(type2);
    setType(selectedType2);
    console.log(selectedType2);
    console.log(dataBase2[selectedType2]);

    // if (typeClickHandler(selectedType) === "Books") {
    //   setDataBase2(Books);
    //   console.log(Books);
    // }
    // if (typeClickHandler(selectedType) === "Songs") {
    //   setDataBase2(Songs);
    //   console.log(Songs);
    // }
    // if (typeClickHandler(selectedType) === "Movies") {
    //   setDataBase2(Movies);
    //   console.log(Movies);
    // }
  }

  return (
    <div className="App">
      <h1>💯 ⭐Awesone Recommendations📚</h1>
      <h2>Checkout my favorite books. Select a genre to get started</h2>
      <div>
        {Object.keys(dataBase).map((type) => (
          <button
            onClick={() => typeClickHandler(type)}
            key={type}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {type}
          </button>
        ))}
      </div>
      <div>
        {Object.keys(dataBase2).map((type2) => (
          <button
            onClick={() => genreClickHandler(type2)}
            key={type2}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {selectedType !== "" &&
            selectedType2 !== "" &&
            Object.keys(dataBase2[selectedType2]).map((option) => (
              <li
                key={option}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  width: "70%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
                {" "}
                <div style={{ fontSize: "larger" }}> {option.name} </div>
                <div style={{ fontSize: "smaller" }}>
                  {" "}
                  {option.contributor}{" "}
                </div>
                {option}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
