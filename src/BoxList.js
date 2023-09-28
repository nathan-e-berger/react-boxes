import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

import { v4 as uuid } from "uuid";

/**
 * Manages state of boxes; [{height: 1, width: 2, backgroundColor: 'blue'}, {}, ...]
 *
 * Props: none
 *
 * State: boxes
 *
 * BoxList >> newBox
 */
function BoxList() {
  const [boxes, setBoxes] = useState([]);

  /**
   * Add a box
   */
  function addBox(box) {
    const id = uuid();
    setBoxes((b) => [...b, { ...box, id }]);
  }

  /**
   * Remove box of a given box id
   */
  function removeBox(id) {
    setBoxes(boxes.filter(b => b.id !== id));
  }

  /**
   * Render Box components with data from boxes state
   */
  function renderBoxes() {
    return boxes.map((b) => (
      <Box
        height={b.height}
        width={b.width}
        backgroundColor={b.backgroundColor}
        key={b.id}
        id={b.id}
        removeBox={removeBox}
      />
    ));
  }

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  );
}

export default BoxList;
