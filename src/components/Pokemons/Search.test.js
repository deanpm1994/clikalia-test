import { render, fireEvent } from 'test-utils';
import Search from './Search';

describe('search component', () => {

  it('should render without errors', () => {
    const { queryByTestId } = render(<Search />);

    expect(queryByTestId('search-component')).not.toBeNull();
  })

  it('should search pokemon name', () => {
    const onSearch = jest.fn()
    const { queryByTestId, getByLabelText } = render(<Search onChange={onSearch} />);

    expect(queryByTestId('search-field')).not.toBeNull();

    let query = (Math.random() + 1).toString(36).substring(7);

    fireEvent.change(getByLabelText('Find pokemon'), { target: { value: query } })

    expect(onSearch).toHaveBeenCalledWith(query)
  })
})
