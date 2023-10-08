import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Card from './Card.svelte';
import { cardMock } from './Card.mock';

describe('<Card />', () => {
	test('should render', () => {
		const { container } = render(Card, {
			card: cardMock
		});

		expect(container).toHaveTextContent(cardMock.blend_name);
	});
});
