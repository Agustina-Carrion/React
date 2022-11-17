function ColorBox(props) {
  return (
    <>
      <div style={{ backgroundColor: props.color, height: "50px", textAlign: "center"}}>
        {props.children}
      </div>
    </>
  );
}

export default ColorBox;
