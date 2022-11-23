function Form({ label, type, inputValue, inputTypeHandler, addingBusinessCard }) {
  return (
    <>
      <label>{label}</label>
      <input
        value={inputValue}
        onChange={inputTypeHandler}
        onKeyPress={addingBusinessCard}
        type={type}
      />
      <br/>
      <br/>
    </>
  );
}

export default Form;
