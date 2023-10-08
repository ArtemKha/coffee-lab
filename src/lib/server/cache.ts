import type { Card } from '$lib/Card';

let cache: Card | undefined;

export function setCache(value: Card) {
	cache = value;
	console.log('Cache was updated.');
}

export function getCache() {
	if (cache) {
		console.log('Cache was found.');
		return cache;
	} else {
		console.log('Cache is empty.');
		return null;
	}
}
