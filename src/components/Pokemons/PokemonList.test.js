import { render } from 'test-utils';
import PokemonList from './PokemonList';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ to, children }) => (
      <a href={to}>{children}</a>
    )
  }
})

const pokemons = [
  { name: 'pi', url: '1' },
  { name: 'pika', url: '2' },
  { name: 'pikapika', url: '3' },
  { name: 'pikachu', url: '4' },
]

describe('pokemon list component', () => {

  it('should render without errors', () => {
    const { queryByTestId } = render(<PokemonList pokemons={pokemons} />);

    expect(queryByTestId('list-component')).not.toBeNull();
  })
  
  it('should render null if no pokemons given', () => {
    const { queryByTestId } = render(<PokemonList />);

    expect(queryByTestId('list-component')).toBeNull();
  })

  it('should render pokemons rows', () => {
    const { queryAllByTestId } = render(<PokemonList pokemons={pokemons} />);

    expect(queryAllByTestId('pokemon-name-cell').length).toBe(4);
    expect(queryAllByTestId('pokemon-url-cell').length).toBe(4);
  })
})
