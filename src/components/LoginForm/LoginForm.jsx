import "./styles.css";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";

function LoginForm() {
  return (
    <div className="loginForm_component">
      <h1>Login form</h1>
      <Input name="email" type="email" placeholder="Enter your email" label="Email" />
      <Input name="password" type="password" placeholder="Enter your password" label="Password" />
      <Button buttonName="Login" type="submit" onClick={() => {}} />
    </div>
  );
}

export default LoginForm;
