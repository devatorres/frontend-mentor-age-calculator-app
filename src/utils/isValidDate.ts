import { isValid, parse } from 'date-fns'

export const isValidDate = (date: string) => {
	const dateFormated = parse(date, 'yyyy/MM/dd', new Date())

	return isValid(dateFormated)
}
