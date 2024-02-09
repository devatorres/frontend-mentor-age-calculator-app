import * as Yup from 'yup'
import dayjs from 'dayjs'

export const formSchema = Yup.object().shape({
	day: Yup.number()
		.integer()
		.typeError('Must be a valid day')
		.required('This field is required')
		.min(1, 'Must be a valid day')
		.max(31, 'Must be a valid day'),
	month: Yup.number()
		.integer()
		.typeError('Must be a valid month')
		.required('This field is required')
		.min(1, 'Must be a valid day')
		.max(12, 'Must be a valid day'),
	year: Yup.number()
		.integer()
		.typeError('Must be in the past')
		.required('This field is required')
		.test('is-valid-year', 'Must be in the past', (value) => {
			const currentYear = dayjs().year()
			return value <= currentYear
		})
})
