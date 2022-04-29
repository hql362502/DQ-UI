import React from 'react';
import { render } from '@testing-library/react';
import Alert from '../alert';

describe('<Alert />', () => {
  test('should render default', () => {
    const { container } = render(<Alert message='default' />);
    expect(container).toMatchSnapshot();
  });

  test('should render alert with type', () => {
    const type: any[] = ["success" , "default" , "danger" , "warning"];

    const { getByText } = render(
      <>
        {type.map((k) => (
          <Alert type={k} key={k} message={k}/>
        ))}
      </>,
    );

    type.forEach((k) => {
      expect(getByText(k)).toMatchSnapshot();
    });
  });
});