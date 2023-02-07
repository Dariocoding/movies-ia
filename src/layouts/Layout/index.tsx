import * as React from 'react';
import styled from 'styled-components';
import BackgroundAuth from './backgroundAuth';
import classNames from 'classnames';

interface ILayoutProps {
	children?: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = props => {
	return (
		<div className="min-h-screen">
			<Material className={classNames('bg-blue-500')}>
				<BackgroundAuth />
			</Material>
			<div className="flex flex-col flex-auto items-center justify-center min-w-0 min-h-screen">
				<div
					className="max-w-[500px] bg-white rounded-lg md:min-w-[450px] shadow-xl p-8" /* bodyClass="md:p-10" */
				>
					<div>{props.children}</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;

const Material = styled.div`
	height: 100vh;
	width: 100vw;
	position: fixed;
	z-index: -1;
`;
