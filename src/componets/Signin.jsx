import { useRef, useState } from "react";
import Input from "./Input";

function Signin() {
	const signInRef = useRef();
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
	});

	const handleChange = (event) => {
		setInputs((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(inputs);
		signInRef.current.reset();
		setInputs({
			email: "",
			password: "",
		});
	};

	return (
		<form onSubmit={handleSubmit} onChange={handleChange} ref={signInRef}>
			<Input
				type='email'
				name='email'
				placeholder='Почта'
				label='Ваша почта'
				value={inputs.email}
			/>
			<Input
				type='password'
				name='password'
				placeholder='Пароль'
				value={inputs.password}
			/>
			<button type='submit' onClick={handleSubmit}>
				Войти
			</button>
		</form>
	);
}

export default Signin;
