import "./Box.css";

function Box({ height, width, backgroundColor }) {
  const style = { height, width, backgroundColor };
  return <div style={style} className="Box"></div>;
}

export default Box;
