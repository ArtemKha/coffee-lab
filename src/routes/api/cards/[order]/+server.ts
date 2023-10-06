import { json } from '@sveltejs/kit';
import { fetchCard, transformNote } from '$lib';
import { cacheCard } from '$lib/server';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	try {
		const rawCard = await fetchCard();
		const card = transformNote(rawCard);

		cacheCard(card);

		return json(card);
	} catch (err) {
		throw err;
	}
};
