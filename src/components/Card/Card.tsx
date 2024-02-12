import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'

import { formSchema } from './Card.config'
import { WrCard, Formulary, Preview } from './sections'
import { DateObject, initialValues } from '../../types'
import { format, isValidDate } from '../../utils'
import './Card.css'

export const Card = () => {
	const methods = useForm<DateObject>({
		values: initialValues(),
		mode: 'onBlur',
		resolver: yupResolver(formSchema)
	})

	const calculateDate = ({ day, month, year }: DateObject) => {
		const date = `${year}/${format(month)}/${format(day)}`

		if (!isValidDate(date)) {
			methods.setError('day', {
				type: 'custom',
				message: 'Must be a valid date'
			})
			methods.setError('month', { type: 'custom', message: ' ' })
			return methods.setError('year', { type: 'custom', message: ' ' })
		}

		// sdiopfsdofhj
	}

	return (
		<WrCard>
			<article className="card radius">
				<FormProvider {...methods}>
					<Formulary calculateDate={calculateDate} />
					<Preview />
				</FormProvider>
			</article>
		</WrCard>
	)
}
