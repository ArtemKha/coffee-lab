import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { fetchCard, transformNote, type Card } from '$lib/Card';
import { setCache, getCache } from '$lib/server';

export const load = (async () => {
	try {
		let card: Card;

		const cachedCard = await getCache();

		if (cachedCard) {
			card = cachedCard;
		} else {
			const rawCard = await fetchCard();
			card = transformNote(rawCard);
			setCache(card);
		}

		return {
			card
		};
	} catch (err) {
		console.error(err);
		return error(500, 'Oops! Something went wrong.');
	}
}) satisfies PageServerLoad;
