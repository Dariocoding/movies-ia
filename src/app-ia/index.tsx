import Layout from '@/layouts/Layout';
import { APP_NAME } from '@/utils';
import * as React from 'react';
import FormIa from './FormIa';

interface IAppIaProps {}

const AppIa: React.FunctionComponent<IAppIaProps> = props => {
	const {} = props;
	return (
		<Layout>
			<div className="text-center mb-6">
				<h5>{APP_NAME}</h5>
				<div className="text-sm sm:px-6 mt-1">
					<p>¿Estás aburrido y no sabes que serie o película ver?</p>
					<p>
						Prueba esta APP para conseguir tu nueva peli
						preferida
					</p>
				</div>
			</div>
			<FormIa />
		</Layout>
	);
};

export default AppIa;
