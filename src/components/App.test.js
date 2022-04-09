import { render } from 'test-utils';
import App from './App';

describe('app component', () => {

  it('should render without errors', () => {
    const { queryByTestId } = render(<App />);

    expect(queryByTestId('app-component')).not.toBeNull();
  })

})
