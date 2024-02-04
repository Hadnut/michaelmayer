import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Layout from './Layout';

describe('Layout.test.tsx', () => {
  it.skip('should show the main header', async () => {
    render(<Layout />);
    const heading = await screen.findByRole('heading');
    expect(heading).toHaveTextContent('Vite + React');
  });

  it.skip('should start with count 0', async () => {
    render(<Layout />);
    const countButton = await screen.findByRole('button');
    expect(countButton).toHaveTextContent('0');
  });

  it.skip('should increment count on click', async () => {
    render(<Layout />);
    const countButton = await screen.findByRole('button');
    await userEvent.click(countButton);
    await userEvent.click(countButton);
    expect(countButton).toHaveTextContent('2');
  });
});
