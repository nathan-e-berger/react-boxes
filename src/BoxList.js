import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

import { v4 as uuid } from "uuid";

/**
 *
 * boxes: [{height: 1, width: 2, backgroundColor: 'blue'}, {}, ...]
 */
function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function addBox(box) {
    setBoxes((b) => [...b, box]);
  }

  function renderBoxes() {
    return boxes.map((b) => (
      <Box
        height={Number(b.height)}
        width={Number(b.width)}
        backgroundColor={b.backgroundColor}
        key={uuid()}
      />
    ));
  }

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
      <Box height={200} width={200} backgroundColor="red" key={uuid()} />
    </div>
  );
}

export default BoxList;
