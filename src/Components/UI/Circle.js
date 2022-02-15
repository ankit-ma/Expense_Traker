import "./Circle.css";

function Circle(props) {
  const classes = "Circle " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Circle;
