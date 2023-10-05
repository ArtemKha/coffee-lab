import type { RawCard } from './types';

export const transformNote = (it: RawCard) => ({
	...it,
	notes: it.notes.split(',').map((note) => note.trim())
});
