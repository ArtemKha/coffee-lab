export type RawCard = {
	id: number;
	uid: string;
	blend_name: string;
	origin: string;
	variety: string;
	notes: string;
	intensifier: string;
	image: string;
};
export type Card = Omit<RawCard, 'notes'> & {
	notes: Array<string>;
};
export type Cards = Array<Card>;
