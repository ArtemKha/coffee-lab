import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Filters from './Filters.svelte';

const filtersMock = {
	options: ['one', 'two', 'three'],
	onFilter: vi.fn()
};

describe('<Filters />', () => {
	test('should render', () => {
		const { container } = render(Filters, {
			filters: [],
			options: filtersMock.options,
			setFilter: filtersMock.onFilter
		});

		filtersMock.options.forEach((option) => {
			expect(container).toHaveTextContent(option);
		});
	});

	test('should handle click event', () => {
		const { getByText } = render(Filters, {
			filters: [],
			options: filtersMock.options,
			setFilter: filtersMock.onFilter
		});

		const value = filtersMock.options[0];
		const button = getByText(value);

		button.click();

		expect(filtersMock.onFilter).toBeCalledWith(value);
	});
});
