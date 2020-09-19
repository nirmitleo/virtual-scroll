import React from 'react';
import { Data } from 'Data/data';

const Row: React.FC<Data> = (props) => {
	return <div key={props.index}>{props.text}</div>;
};
export default Row;
