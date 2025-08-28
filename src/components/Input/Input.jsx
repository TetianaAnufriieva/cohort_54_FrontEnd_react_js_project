import "./styles.css";

function Input({ name, type = "text", placeholder, label }) {
  return (
    <div className="inpinput_wrapper">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        className="input_component"
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
