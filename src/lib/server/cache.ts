import type { Card } from '$lib/types';

let cache: Card | undefined;

export function cacheCard(value: Card) {
	cache = value;
	console.log('Cache was updated.');
}

export function getCachedCard() {
	if (cache) {
		console.log('Cache was found.');
		return cache;
	} else {
		console.log('Cache is empty.');
		return null;
	}
}
