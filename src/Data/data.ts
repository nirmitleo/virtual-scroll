export type Data = {
	index: number;
	text: string;
};

export const fetchData = (quantity: number): Array<Data> => {
	const result: Array<Data> = [];
	for (let i = 0; i < quantity; i++) {
		result.push({
			index: i,
			text: `sample text for index: ${i}`,
		});
	}
	return result;
};
