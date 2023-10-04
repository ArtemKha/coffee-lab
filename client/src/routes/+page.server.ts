import type { PageServerLoad } from './$types';
import type { Cards } from './types';

const cardsMock = [
	{
		id: 3417,
		uid: '9c772363-8362-48a2-b871-cdbbea018b86',
		blend_name: 'Blue Enlightenment',
		origin: 'Chiriqui, Panama',
		variety: 'Ethiopian Heirloom',
		notes: 'crisp, coating, black-tea,peanut, tobacco',
		intensifier: 'juicy',
		image: 'https://loremflickr.com/g/320/240/coffee?p=1'
	},
	{
		id: 3417,
		uid: '9c772363-8362-48a2-b871-cdbbea018b86',
		blend_name: 'Blue Enlightenment',
		origin: 'Chiriqui, Panama',
		variety: 'Ethiopian Heirloom',
		notes: 'crisp, coating, black-tea,peanut, tobacco',
		intensifier: 'juicy',
		image: 'https://loremflickr.com/g/320/240/coffee?p=2'
	},
	{
		id: 3417,
		uid: '9c772363-8362-48a2-b871-cdbbea018b86',
		blend_name: 'Blue Enlightenment',
		origin: 'Chiriqui, Panama',
		variety: 'Ethiopian Heirloom',
		notes: 'crisp, coating, black-tea,peanut, tobacco',
		intensifier: 'juicy',
		image: 'https://loremflickr.com/g/320/240/coffee?p=3'
	},
	{
		id: 3417,
		uid: '9c772363-8362-48a2-b871-cdbbea018b86',
		blend_name: 'Blue Enlightenment',
		origin: 'Chiriqui, Panama',
		variety: 'Ethiopian Heirloom',
		notes: 'crisp, coating, black-tea,peanut, tobacco',
		intensifier: 'juicy',
		image: 'https://loremflickr.com/g/320/240/coffee?p=4'
	}
];

const transformNotes = (cards: Cards) =>
	cards.map((it) => ({
		...it,
		notes: it.notes.split(',').map((note) => note.trim())
	}));

export const load = (async () => {
	return {
		cards: transformNotes(cardsMock)
	};
}) satisfies PageServerLoad;
