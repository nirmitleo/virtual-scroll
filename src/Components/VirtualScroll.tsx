import { Data } from 'Data/data';
import React, { useState } from 'react';
import Row from './Row';
type VirtualScrollState = {
	topHeight: number;
	viewportHeight: number;
	bottomHeight: number;
	data: Array<Data>;
};
export type VirtualScrollConfig = {
	minIndex: number;
	maxIndex: number;
	startIndex: number;
	offset: number;
	tolerance: number;
	itemHeight: number;
};
type VirtualScrollProps = {
	config: VirtualScrollConfig;
	rowTemplate: any;
	get: (startIndex: number, offset: number) => Array<Data>;
};
const VirtualScroll: React.FC<VirtualScrollProps> = (props) => {
	const [vsState, getVSState] = useState<VirtualScrollState>(() => {
		const visibleItemCount = props.config.startIndex + props.config.offset - 1;
		const initialState: VirtualScrollState = {
			viewportHeight: visibleItemCount * props.config.itemHeight,
			topHeight: props.config.tolerance * props.config.itemHeight,
			bottomHeight: props.config.tolerance * props.config.itemHeight,
			data: props.get(props.config.startIndex, props.config.offset),
		};
		return initialState;
	});
	return (
		<div className='viewport' style={{ height: vsState.viewportHeight }}>
			<div className='top-section' style={{ height: vsState.topHeight }}></div>
			{vsState.data.map((d) => (
				<Row {...d}></Row>
			))}
			<div
				className='bottom-section'
				style={{ height: vsState.bottomHeight }}
			></div>
		</div>
	);
};

export default VirtualScroll;
