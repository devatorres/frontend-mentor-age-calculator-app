import {
	isValid,
	parse,
	differenceInYears,
	differenceInMonths,
	differenceInDays
} from 'date-fns'

export const isValidDate = (date: string) => {
	const dateFormated = parse(date, 'yyyy/MM/dd', new Date())

	return isValid(dateFormated)
}

export const format = (number: number) => {
	const numberString = number.toString()

	return numberString.length < 2 ? `0${numberString}` : numberString
}

export const getDiff = (date: string) => {
	const currentDate = parse(date, 'yyyy/MM/dd', new Date())
	const now = new Date()

	const years = differenceInYears(now, currentDate)
	const months = differenceInMonths(now, currentDate) % 12
	const days = differenceInDays(now, currentDate) % 30

	console.log(years, months, days)

	return { years, months, days }
}
