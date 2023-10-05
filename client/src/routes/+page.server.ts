import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { fetchCard, transformNote, type Card } from '$lib';
import { cacheCard, getCachedCard } from '$lib/server';

export const load = (async () => {
	try {
		let card: Card;

		const cachedCard = await getCachedCard();

		if (cachedCard) {
			card = cachedCard;
		} else {
			const rawCard = await fetchCard();
			card = transformNote(rawCard);
			cacheCard(card);
		}

		return {
			card
		};
	} catch (err) {
		console.log(err);
		return error(500, 'Oops! Something went wrong.');
	}
}) satisfies PageServerLoad;
