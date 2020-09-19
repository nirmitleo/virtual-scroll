import React from 'react';
import 'App.css';
import VirtualScroll, { VirtualScrollConfig } from 'Components/VirtualScroll';
import { Data, fetchData } from 'Data/data';
import Row from 'Components/Row';

function App() {
	const quantity = 14;
	const sampleData = fetchData(quantity);
	const sampleConfig: VirtualScrollConfig = {
		minIndex: 0,
		maxIndex: quantity - 1,
		startIndex: 5,
		offset: 3,
		tolerance: 2,
		itemHeight: 20,
	};
	const getData = (startIndex: number, offset: number): Array<Data> => {
		const from = Math.max(startIndex, sampleConfig.minIndex);
		const to = Math.min(from + offset - 1, sampleConfig.maxIndex);
		return sampleData.slice(from, to + 1);
	};
	return (
		<VirtualScroll
			config={sampleConfig}
			get={getData}
			rowTemplate={Row}
		></VirtualScroll>
	);
}

export default App;
