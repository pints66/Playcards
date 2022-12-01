import { render, screen } from '@testing-library/react';
import App from './App';

test('check text', ()=> {
  const { getByText } = render(<App />);
  const text = getByText("Play Cards");
  expect(text).toBeTruthy()
});