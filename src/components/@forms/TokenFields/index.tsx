import { TokenField } from '@/components/ui/TokenInput';
import { useFormikContext } from 'formik';
import Label from '../label';
import * as React from 'react';

interface ITokenFieldsFormikProps {
	name: string;
	label?: React.ReactNode;
}

const TokenFieldsFormik: React.FunctionComponent<ITokenFieldsFormikProps> = props => {
	const { name, label } = props;
	const { setFieldValue } = useFormikContext();

	const onChangeToken = (items: string[]) => {
		setFieldValue(name, items);
	};

	return (
		<div className="form-group">
			<Label htmlFor={name}>{label}</Label>

			<TokenField onChange={onChangeToken} />
		</div>
	);
};

export default TokenFieldsFormik;
