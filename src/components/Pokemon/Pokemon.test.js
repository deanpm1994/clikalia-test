import axios from 'axios';
import { render } from 'test-utils';
import Pokemon from './Pokemon';

jest.mock('axios');
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useParams: () => ({
    name: 'pikachu',
  }),
  useRouteMatch: () => ({ url: '/pokemon/pikachu' }),
}));

describe('pokemon component', () => {

  it('should render without errors', () => {
    const { queryByTestId } = render(<Pokemon />);

    expect(queryByTestId('pokemon-component')).not.toBeNull();
  })

  it('should load selected pokemon', () => {
    axios.get.mockImplementationOnce(() => Promise.resolve());

    render(<Pokemon />);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      "https://pokeapi.co/api/v2/pokemon/pikachu", { params: null }
    );
  })
})
