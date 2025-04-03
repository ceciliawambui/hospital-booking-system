import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import Button from './Button';
jest.mock('axios');
test('fetches data when button is clicked', async () => {
  axios.get.mockResolvedValue({ data: 'Mocked data' });
  const { getByText, getByTestId } = render(<Button label="Click me" />);
  const buttonElement = getByText('Click me');
  const dataElement = getByTestId('data');
  fireEvent.click(buttonElement);
  await waitFor(() => {
    expect(dataElement.textContent).toBe('Data: Mocked data');
  });
});