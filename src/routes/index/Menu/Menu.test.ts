import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Menu from './Menu.svelte';

const menuMock = {
	counter: 0,
	fetchNewCard: vi.fn(),
	loading: false
};

describe('<Menu />', () => {
	test('should render', () => {
		const { container } = render(Menu, { ...menuMock });

		expect(container).toHaveTextContent(menuMock.counter.toString());
	});

	test('should handle click event', () => {
		const { getByRole } = render(Menu, { ...menuMock });

		const button = getByRole('button');

		expect(button).toBeInTheDocument();

		button.click();

		expect(menuMock.fetchNewCard).toBeCalled();
	});
});
