import React, { useState } from "react";

// addsong is a function we took from songlist as prop
const NewSongForm = ({addSong}) => {
  // state is empty string at first
  // with setTitle, we will update the title state
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
      event.preventDefault();
      addSong(title)
      setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Song name:</label>
      <input type="text" required value={title} onChange={e => setTitle(e.target.value)} />
      <input type="submit" value="add song" />
    </form>
  );
};

export default NewSongForm;
