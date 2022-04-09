import { render } from 'test-utils';
import Pokemons from './Pokemons';

describe('pokemons component', () => {

  it('should render without errors', () => {
    const { queryByTestId } = render(<Pokemons />);

    expect(queryByTestId('pokemons-component')).not.toBeNull();
  })
  
  it('should render nested components', () => {
    const { queryByTestId } = render(<Pokemons />);

    expect(queryByTestId('search-component')).not.toBeNull();
    expect(queryByTestId('list-component')).not.toBeNull();
    expect(queryByTestId('pagination-component')).not.toBeNull();
  })
})
