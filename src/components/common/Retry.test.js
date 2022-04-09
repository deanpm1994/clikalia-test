import { fireEvent, render } from 'test-utils';
import Retry from './Retry';

describe('retry component', () => {

  it('should render without errors', () => {
    const { queryByTestId } = render(<Retry open onRetry={null} />);

    expect(queryByTestId('retry-component')).not.toBeNull();
  })
  
  it('should call retry function', () => {
    const onRetry = jest.fn()
    const { getByText } = render(<Retry open onRetry={onRetry} />);

    fireEvent.click(getByText('Retry'))

    expect(onRetry).toHaveBeenCalledTimes(1)
  })
})
