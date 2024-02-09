import dayjs from 'dayjs'
import { Fragment, ReactElement } from 'react'
import {
	Control,
	FieldErrors,
	UseFormHandleSubmit,
	useFormContext
} from 'react-hook-form'
import { ButtonIcon, TextInput } from '../../components'
import { DateObject } from '../../../../types'
import './Formulary.css'

type TForm = {
	handleSubmit: UseFormHandleSubmit<DateObject, DateObject>
	calculateDate: (data: DateObject) => void
	children: ReactElement
}

type TInputs = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	control: Control<DateObject, any, DateObject>
	errors: FieldErrors<DateObject>
}

type TSubmit = {
	handleSubmit: UseFormHandleSubmit<DateObject, DateObject>
	calculateDate: (data: DateObject) => void
}

type TFormulary = {
	calculateDate: (data: DateObject) => void
}

const Form = ({ handleSubmit, calculateDate, children }: TForm) => {
	return (
		<form
			className="formulary"
			onKeyDown={(event) => {
				if (event.key === 'Enter') return undefined
			}}
			onSubmit={handleSubmit((data: DateObject) => {
				calculateDate(data)
			})}>
			{children}
		</form>
	)
}

const Inputs = ({ control, errors }: TInputs) => {
	return (
		<section className="wr-inputs">
			<TextInput
				control={control}
				error={errors?.day}
				label="DAY"
				name="day"
				placeholder="DD"
				max={31}
			/>
			<TextInput
				control={control}
				error={errors?.month}
				label="MONTH"
				name="month"
				placeholder="MM"
				max={12}
			/>
			<TextInput
				control={control}
				error={errors?.year}
				label="YEAR"
				name="year"
				placeholder="YYYY"
				max={dayjs().year()}
			/>
		</section>
	)
}

const Submit = ({ handleSubmit, calculateDate }: TSubmit) => {
	return (
		<section className="wr-submit">
			<div className="separator" />
			<ButtonIcon
				isFloat
				action={handleSubmit((data: DateObject) => {
					calculateDate(data)
				})}
			/>
		</section>
	)
}

export const Formulary = ({ calculateDate }: TFormulary) => {
	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useFormContext<DateObject>()

	return (
		<section className="wr-formulary">
			<Form handleSubmit={handleSubmit} calculateDate={calculateDate}>
				<Fragment>
					<Inputs control={control} errors={errors} />
					<Submit handleSubmit={handleSubmit} calculateDate={calculateDate} />
				</Fragment>
			</Form>
		</section>
	)
}
