export const format = (number: number) => {
	const numberString = number.toString()

	return numberString.length < 2 ? `0${numberString}` : numberString
}
