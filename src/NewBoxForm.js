import { useState } from "react";

function NewBoxForm({ addBox }) {
  const initialForm = {
    height: "",
    width: "",
    backgroundColor: "",
  };
  const [formData, setFormData] = useState(initialForm);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialForm);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a box!</h1>
      <label htmlFor="height">Height: </label>
      <input
        id="height"
        name="height"
        onChange={handleChange}
        value={formData.height}
      />
      <label htmlFor="width">Width: </label>
      <input
        id="width"
        name="width"
        onChange={handleChange}
        value={formData.width}
      />
      <label htmlFor="background color">Background Color: </label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        onChange={handleChange}
        value={formData.backgroundColor}
      />
      <button>Add this box!</button>
    </form>
  );
}

export default NewBoxForm;
