import CountUp from 'react-countup'
import { usePreviewStore } from '../../hooks'
import './Preview.css'

type TPreviewRow = {
	label: string
	value: number | undefined
}

const CountUpValue = ({ value }: { value: number | undefined }) => {
	return typeof value === 'undefined' ? (
		<span className="textValue noValue">{'--'}</span>
	) : (
		<CountUp end={value} duration={6}>
			{({ countUpRef }) => <span ref={countUpRef} className="textValue" />}
		</CountUp>
	)
}

const PreviewRow = ({ label, value }: TPreviewRow) => {
	return (
		<p className="text">
			<CountUpValue value={value} />{' '}
			<span className="less-spacing">{label}</span>
		</p>
	)
}

export const Preview = () => {
	const { date } = usePreviewStore()

	return (
		<section className="preview">
			<PreviewRow label="years" value={date.years} />
			<PreviewRow label="months" value={date.months} />
			<PreviewRow label="days" value={date.days} />
		</section>
	)
}
