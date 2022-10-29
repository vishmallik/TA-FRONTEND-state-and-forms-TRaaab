import Font from "./Font";
function Fonts(props) {
  let fonts = [
    "Comfortaa",
    "FastHand",
    "Island Moments",
    "Josefin Sans",
    "Open Sans",
    "Poppins",
    "Raleway",
    "Roboto",
    "Roboto Mono",
  ];
  return (
    <ul className="flex wrap">
      {fonts.map((font) => (
        <Font
          family={font}
          size={props.state.size}
          input={props.state.input}
          key={font}
        />
      ))}
    </ul>
  );
}
export default Fonts;
