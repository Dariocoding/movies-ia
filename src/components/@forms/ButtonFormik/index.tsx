import RenderIf from '@/components/ui/RenderIf';
import Spinner from '@/components/ui/Spinner';
import classNames from 'classnames';
import { useFormikContext } from 'formik';
import * as React from 'react';

interface IButtonFormikProps {
	className?: string;
	children?: React.ReactNode;
	full?: boolean;
}

const ButtonFormik: React.FunctionComponent<IButtonFormikProps> = props => {
	const { className, full } = props;
	const { isSubmitting } = useFormikContext();
	return (
		<button type="submit" className={classNames('btn', full && 'w-full', className)}>
			<RenderIf isTrue={!isSubmitting}>{props.children}</RenderIf>
			<RenderIf isTrue={isSubmitting}>
				<Spinner className="text-gray-50" />
			</RenderIf>
		</button>
	);
};

export default ButtonFormik;
