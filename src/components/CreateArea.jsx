import React, { useState } from "react";

function CreateArea() {
  const [fullText, setFullText] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {}

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
