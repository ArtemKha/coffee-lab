import { json } from '@sveltejs/kit';
import { fetchCard, transformNote } from '$lib/Card';
import { setCache } from '$lib/server';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	try {
		const rawCard = await fetchCard();
		const card = transformNote(rawCard);

		setCache(card);

		return json(card);
	} catch (err) {
		console.error(err);
		return json(
			{
				error: err
			},
			{
				status: 500
			}
		);
	}
};
