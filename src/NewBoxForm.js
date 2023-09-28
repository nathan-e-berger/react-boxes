import { useState } from "react";

function NewBoxForm() {
  const [formData, setFormData] = useState({
    heigth: "",
    width: "",
    backgroundColor: ""
  });

  handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    })
    );
  }

  return (
    <form>
      <input name="height" onChange={handleChange} />
      <input name="width" onChange={handleChange} />
      <input name="backgroundColor" onChange={handleChange} />
    </form>
  );
};