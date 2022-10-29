function Font(props) {
  return (
    <li>
      <p>{props.family}</p>
      <hr />
      <p style={{ fontSize: props.size + "px", fontFamily: props.family }}>
        {props.input}
      </p>
    </li>
  );
}
export default Font;
