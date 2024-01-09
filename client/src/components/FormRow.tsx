import type { FC, InputHTMLAttributes } from "react";

interface FormRowProps extends InputHTMLAttributes<HTMLInputElement> {
	labelText?: string;
}

const FormRow: FC<FormRowProps> = ({
	type,
	name,
	labelText,
	defaultValue,
	required = false,
}) => {
	return (
		<div className="form-row">
			<label htmlFor={name} className="form-label">
				{labelText || name} :
			</label>
			<input
				type={type}
				id={name}
				name={name}
				className="form-input"
				defaultValue={defaultValue}
				required={required}
			/>
		</div>
	);
};

export default FormRow;
