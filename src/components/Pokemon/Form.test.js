import axios from 'axios';
import { render, waitFor, screen } from 'test-utils';
import Form from './Form';

jest.mock('axios');

describe('form component', () => {

  it('should render empty if no params passed', async () => {
    const { queryByTestId } = render(<Form />);

    expect(queryByTestId('form-component')).toBeNull();
  })

  it('should render without errors', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({
      data: { id: '25' }
    }));
    const { queryByTestId } = render(<Form form={{ name: "pikachu" }} />);

    await waitFor(() => screen.getByTestId('form-component'))

    expect(queryByTestId('form-component')).not.toBeNull();
  })

  it('should load selected form', () => {
    render(<Form form={{ name: "pikachu" }} />);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      "https://pokeapi.co/api/v2/pokemon-form/pikachu", { params: null }
    );
  })
})
