import * as Yup from 'yup'
import { getYear } from 'date-fns'

export const formSchema = Yup.object().shape({
	day: Yup.number()
		.integer()
		.typeError('This field is required')
		.required('This field is required')
		.min(1, 'Must be a valid day')
		.max(31, 'Must be a valid day'),
	month: Yup.number()
		.integer()
		.typeError('This field is required')
		.required('This field is required')
		.min(1, 'Must be a valid month')
		.max(12, 'Must be a valid month'),
	year: Yup.number()
		.integer()
		.typeError('This field is required')
		.required('This field is required')
		.min(1000, 'Must be a valid year')
		.test('is-valid-year', 'Must be in the past', (value) => {
			const currentYear = getYear(new Date())
			return value <= currentYear
		})
})
