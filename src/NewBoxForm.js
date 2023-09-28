import { useState } from "react";
import { v4 as uuid } from "uuid";

/**
 *  Creates new box object from form input fields
 *
 * Props: addBox()
 *
 * State: box form data
 *
 * BoxList  >>  NewBoxForm
 */
function NewBoxForm({ addBox }) {
  const initialForm = {
    height: "",
    width: "",
    backgroundColor: ""
  };
  const [formData, setFormData] = useState(initialForm);

  /**
   *  Handles input field changes and updates form state
   */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  /**
   *  Handle submission of new Box data
   */
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
      <label htmlFor="backgroundColor">Background Color: </label>
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
