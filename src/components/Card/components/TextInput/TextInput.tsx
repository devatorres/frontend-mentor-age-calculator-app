import { useCallback } from 'react'
import { Control, Controller, FieldError } from 'react-hook-form'
import './TextInput.css'

type TextInputProps = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	control: Control<any, any>
	name: string
	error?: FieldError
	label?: string
	placeholder?: string
	max?: number
}

export const TextInput = ({
	control,
	name,
	error = undefined,
	label = undefined,
	placeholder = undefined,
	max = undefined
}: TextInputProps) => {
	const isError = useCallback(() => error && error.message, [error])

	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => {
				return (
					<div className={`wr-input ${isError() ? 'error' : ''}`}>
						{label && <label htmlFor={name}>{label}</label>}
						<input
							{...field}
							id={name}
							required
							className={`text-input ${isError() ? 'error' : ''}`}
							type="number"
							min={0}
							max={max}
							placeholder={placeholder}
							pattern="[0-9]*"
							inputMode="numeric"
							spellCheck="false"
							autoComplete="off"
							onFocus={(e) => e.target.select()}
						/>
						{isError() && <p className="error-message">{error?.message}</p>}
					</div>
				)
			}}
		/>
	)
}
