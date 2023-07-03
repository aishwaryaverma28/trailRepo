import React, { useState } from 'react';

function TagInput() {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTag = (event) => {
    event.preventDefault();
    const newTag = inputValue.trim();
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setInputValue('');
    }
  };

  const removeTag = (tagToRemove) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
  };

  return (
    <div>

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
         placeholder="Enter tags and press Enter"
      />
      <input type='submit' onClick={addTag}/>

      <ul>
        {tags.map((tag) => (
          <li key={tag}>
            {tag}
            <button onClick={() => removeTag(tag)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TagInput;
