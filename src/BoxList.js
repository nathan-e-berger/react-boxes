import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";


function BoxList() {
  const [boxes, setBoxes] = useState([]);

  return (
    <div>
      <Box />
      <NewBoxForm />
    </div>
  );
};

export default BoxList;