import { Data } from 'Data/data';
import React, { useState } from 'react';
type VirtualScrollState = {
	startIndex: number;
	offset: number;
};
export type VirtualScrollConfig = {
	minIndex: number;
	maxIndex: number;
	startIndex: number;
	offset: number;
	tolerance: number;
};
type VirtualScrollProps = {
	config: VirtualScrollConfig;
	rowTemplate: any;
	get: (startIndex: number, offset: number) => Array<Data>;
};
const VirtualScroll: React.FC<VirtualScrollProps> = (props) => {
	const [vsState, getVSState] = useState(props.rowTemplate);
	return (
		<div className='virtual-scroll-container'>
			<div className='top-section'></div>
			<div className='viewport'></div>
			<div className='bottom-section'></div>
		</div>
	);
};

export default VirtualScroll;
