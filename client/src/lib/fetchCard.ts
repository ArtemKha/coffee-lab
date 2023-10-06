import { env } from '$env/dynamic/public';
import type { RawCard } from '$lib';

export const fetchCard = async (): Promise<RawCard> => {
	try {
		const cardRequest = fetch(env.PUBLIC_DATA_API);
		const imageRequest = fetch(env.PUBLIC_IMAGE_API);

		const [cardData, imageData] = await Promise.all([cardRequest, imageRequest]);
		const card = (await cardData.json()) as Omit<RawCard, 'image'>;
		const imageMeta = (await imageData.json()) as { file: string };

		return {
			...card,
			image: imageMeta.file
		};
	} catch (error) {
		throw error;
	}
};
