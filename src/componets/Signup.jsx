import { useRef, useState } from "react";
import Input from "./Input";
import "./sign.scss";

function Signup() {
	const SignUpRef = useRef();
	const [inputs, setInputs] = useState({
		name: "",
		nickname: "",
		email: "",
		gender: "",
		password: "",
		repeatPassword: "",
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
		SignUpRef.current.reset();
		setInputs({
			name: "",
			nickname: "",
			email: "",
			gender: "",
			password: "",
			repeatPassword: "",
		});
	};
	return (
		<form onSubmit={handleSubmit} onChange={handleChange} ref={SignUpRef}>
			<Input placeholder='Имя' name='name' value={inputs.name} />
			<Input placeholder='Ник' name='nickname' value={inputs.nickname} />
			<Input
				type='email'
				placeholder='Почта'
				name='email'
				label='Ваша почта'
				value={inputs.email}
			/>
			<Input type='radio' name='gender' value='male' label='Мужчина' />
			<Input type='radio' name='gender' value='female' label='Женщина' />
			<Input
				type='password'
				name='password'
				placeholder='Пароль'
				value={inputs.password}
			/>
			<Input
				type='password'
				name='repeatPassword'
				placeholder='Повторить пароль'
				value={inputs.repeatPassword}
			/>
			<button type='submit' onClick={handleSubmit}>
				Войти
			</button>
		</form>
	);
}

export default Signup;
