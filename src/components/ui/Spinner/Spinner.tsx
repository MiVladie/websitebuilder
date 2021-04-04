import React from 'react';

import classes from './Spinner.module.scss';

interface Props {
	size?: number;
}

const Spinner: React.FC<Props> = ({ size = 80 }) => {
	return (
		<div
			style={{ width: size, height: size, borderWidth: size * 0.25 > 6 ? 6 : size * 0.25 }}
			className={classes.Spinner}
		/>
	);
};

export default Spinner;