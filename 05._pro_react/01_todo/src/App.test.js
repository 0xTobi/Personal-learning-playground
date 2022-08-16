import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


function countChar(string, char) {
  let match = 0;
  for (let i = 0; i <= string.length; i++) {
      if (string[i] == char) {
          match += 1;
          console.log(`Match found at index ${i}`)
      }
  }
  return match
}