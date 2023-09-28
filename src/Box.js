import "./Box.css";

/**
 *  Display box with given dimensions, color, and data
 *
 *  Props: {height, width, backgroundColor, id, removeBox}
 *
 *  State: None
 */
function Box({ height, width, backgroundColor, id, removeBox }) {
  const style = { height: Number(height), width: Number(width), backgroundColor };
  return (<div>
    <div style={style} className="Box"></div>
    <button className="Box-deleteBtn" onClick={() => removeBox(id)}>Remove</button>
  </div>
  );
}

export default Box;
