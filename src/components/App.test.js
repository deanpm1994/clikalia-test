import axios from 'axios';
import { render } from 'test-utils';
import App from './App';

jest.mock('axios');

describe('app component', () => {

  it('should render without errors', () => {
    const { queryByTestId } = render(<App />);

    expect(queryByTestId('app-component')).not.toBeNull();
  })

  it('should load all pokemons on initialize', () => {
    axios.get.mockImplementationOnce(() => Promise.resolve());

    render(<App />);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      "https://pokeapi.co/api/v2/pokemon", { params: { limit: "-1" } }
    );
  })
})
