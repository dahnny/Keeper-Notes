import React, { useState } from "react";

function CreateArea(props) {
  const [fullText, setFullText] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    console.log(value);

    setFullText({
      ...fullText,
      [name]: value
    });
  }

  function handleSubmit(event) {
    console.log(fullText);

    props.onAdd(fullText);
    setFullText({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={fullText.title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          value={fullText.content}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
