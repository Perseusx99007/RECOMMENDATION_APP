import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDataBase = {
  coding: [
    { name: "Eloquent JavaScript", author: "Marijn Haverbeke" },
    { name: "Seven Languages in Seven Weeks", author: "Bruce Tate" },
    { name: "Fundamentals of Computers", author: "E. Balagurusamy" }
  ],

  fiction: [
    { name: "The Percy Jckson Series", author: "Rick Rirdan" },
    { name: "The Shiva Trilogy", author: "Amish Tripathi" },
    { name: "The Harry Potter Series", author: "J.K. Rowling" }
  ],

  business: [
    {
      name: "Never Split the Difference",
      author: "Christopher Voss and Tahl Raz"
    },
    { name: "Loonshots", author: "Safi Bahcall" },
    { name: "The Hard Thing About Hard Things", author: "Ben Horowitz" }
  ]
};

const songDataBase = {
  rock: [
    { name: "One  Moe Light", singer: "Linkin Park" },
    { name: "Stars", singer: "Skillet" },
    { name: "I Will Not Bow", singer: "Breaking Benjamin" }
  ],

  soul: [
    { name: "Visiting Hours", singer: "Ed Sheeran" },
    { name: "Dil Ka Dariya", singer: "Arijit Sing" },
    { name: "Teri Mitti", singer: "B Praak" }
  ],

  rap: [
    { name: "Lose Yourself", singer: "EMINEM" },
    { name: "Aathma Raama", singer: "Brodha V" },
    { name: "Lost in The Echo", singer: "Linkin Park" }
  ]
};

const movieDataBase = {
  action: [
    { name: "Marvel Avengers Series", director: "Anthony & Joe Russo" },
    { name: "Justice League", director: "Zack Snyder" },
    { name: "R.R.R.", director: "S. S. Rajamouli" }
  ],

  thriller: [
    { name: "Rocketry: The Nambi Effect", director: "R Madhavan" },
    { name: "Uri: The Surgical Strike", director: "Aditya Dhar" },
    { name: "Shershaah", director: "Vishnuvardhan" }
  ],

  sliceOfLife: [
    { name: "777 Charlie", director: "Kiranraj K" },
    { name: "Hachi: A Dog's Tale", director: "Lasse Hallström" },
    { name: "Dead Poets Society", director: "Peter Weir" }
  ]
};

var a = [songDataBase, bookDataBase, movieDataBase];

export default function App() {
  let [selectedType, setType] = useState("");
  function generateClickHandler(type) {
    setType(type);
  }

  return (
    <div className="App">
      <h1>💯 ⭐Awesone Recommendations📚</h1>
      <h2>Checkout my favorite books. Select a genre to get started</h2>
    </div>
  );
}
