import "./styles.css";

function Button({
  buttonName = "Send",
  onClick = () => {},
  children,
  type = "button",
}) {
  return (
    <button className="button_component" onClick={onClick} type={type}>
      {/* {children ? "" : buttonName} */}

      {/* условный рендеринг */}
      {!children && buttonName}
    </button>
  );
}

export default Button;
