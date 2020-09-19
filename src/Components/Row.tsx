import React from 'react';
import { Data } from 'Data/data';

const Row: React.FC<Data> = (props) => {
	return (
		<div className='row' key={props.index}>
			{props.text}
		</div>
	);
};
export default Row;
