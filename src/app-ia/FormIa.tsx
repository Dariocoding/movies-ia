import * as React from 'react';
import { Form, Formik } from 'formik';
import ButtonFormik from '@/components/@forms/ButtonFormik';
import InputFormik from '@/components/@forms/InputFormik';
import { TokenField } from '@/components/ui/TokenInput';
import TokenFieldsFormik from '@/components/@forms/TokenFields';
import { searchMovies } from './services';
import RenderIf from '@/components/ui/RenderIf';

const INITIAL_VALUES = {
	keywords: [],
};

interface IFormIaProps {}

const FormIa: React.FunctionComponent<IFormIaProps> = props => {
	const {} = props;

	const [result, setResult] = React.useState<string[]>([]);
	const onSubmit = async (values: typeof INITIAL_VALUES) => {
		const data = await searchMovies(values.keywords);
		const possibleSplit = [data.split('-'), data.split(' ')];
		const array = possibleSplit.find(split => split.length > 0);
		setResult(array.map(value => value.trim()).filter(value => value.trim()));
	};

	return (
		<Formik initialValues={INITIAL_VALUES} onSubmit={onSubmit}>
			<Form>
				<TokenFieldsFormik name="keywords" label={'Keywords'} />

				<div className="mb-1">
					<ButtonFormik className="btn-primary" full>
						Buscar
					</ButtonFormik>
				</div>
				<RenderIf isTrue={result.length}>
					<div className="form-group">
						<button
							className="btn btn-xs w-full btn-outline-danger"
							onClick={() => setResult([])}
						>
							Limpiar
						</button>
					</div>
				</RenderIf>

				<RenderIf isTrue={result.length}>
					<ul>
						{result.map((str, idx) => (
							<li key={idx}>- {str}</li>
						))}
					</ul>
				</RenderIf>
			</Form>
		</Formik>
	);
};

export default FormIa;
