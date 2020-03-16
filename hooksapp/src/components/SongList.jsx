import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  // state is in useState
  // as an array, we destructure it with songs, setSongs
  const [songs, setSongs] = useState([
    { title: "almost home", id: 1 },
    { title: "memory gospel", id: 2 },
    { title: "this wild darkness", id: 3 }
  ]);

  const [ age, setAge ] = useState(20)

  // we passed title as a parameter to use in songform component
  const addSong = title => {
    setSongs([...songs, { title: title, id: uuid() }]);
  };

  useEffect(() => {
      console.log("useEffect hook ran", songs)
  }, [songs])

   useEffect(() => {
      console.log("useEffect hook ran", age)
  }, [age])

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
};

export default SongList;
