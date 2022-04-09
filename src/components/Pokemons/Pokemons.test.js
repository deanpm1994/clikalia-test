import { render } from 'test-utils';
import Pokemons from './Pokemons';

describe('pokemons component', () => {

  it('should render without errors', () => {
    const { queryByTestId } = render(<Pokemons />);

    expect(queryByTestId('pokemons-component')).not.toBeNull();
  })

})
