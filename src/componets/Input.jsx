import "./input.scss";


function Input({
	type = "text",
	placeholder = "",
	label = placeholder,
	name = "",
	id,
	value = "",
	disabled = false,
	asterisk = false,
	variant = "default",
	error = false,
	description = "",
	size="m",
	radius="m"
}) {

	let classArray = [];
	classArray.push(
		variant === "filled" ? "filled" : variant === "unstyled" ? "unstyled" : ""
	);
	classArray.push(error && "error");
	classArray.push(size)
	const customClassName = classArray.join(" ");

	let borderRadius = {
		s: 2,
		m: 4,
		l: 6
	}

	return (
		<div
			style={{
				display: "flex",
				flexDirection: type !== "radio" ? "column" : "row",
			}}
			className={size}
		>
			<label>
				{label} {asterisk && <span style={{ color: "red" }}>*</span>}
			</label>
			{description && <div className='desc'>{description}</div>}
			<input
				type={type}
				placeholder={placeholder}
				label={label}
				name={name}
				id={id}
				value={value}
				disabled={disabled}
				className={customClassName}
				style={{ borderRadius: `${borderRadius[radius]}px` }}
			/>
			{error && <div className='error-text'>{error}</div>}
		</div>
	);
}

export default Input;
