import { render } from 'test-utils';
import Pokemon from './Pokemon';

describe('pokemon component', () => {

  it('should render without errors', () => {
    const { queryByTestId } = render(<Pokemon />);

    expect(queryByTestId('pokemon-component')).not.toBeNull();
  })

})
