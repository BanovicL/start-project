import { createRemixStub } from '@remix-run/testing';
import { render, screen, waitFor, fireEvent, queryAllByText } from '@testing-library/react';
import Index from 'services/frontend/app/routes/_index';
import NewEmployee from 'services/frontend/app/routes/new-employee';

test('renders new employee form', async () => {
    const RemixStub = createRemixStub([
        {
            path: "/new-employee",
            Component: NewEmployee
        },
        {
            path: "/",
            Component: Index
        }
    ])
    const { queryAllByLabelText, queryAllByText } = render(<RemixStub />);

    expect(queryAllByLabelText(/First name/i)).toBeTruthy();
    expect(queryAllByLabelText(/Last name/i)).toBeTruthy();
    expect(queryAllByLabelText(/Job position/i)).toBeTruthy();
    expect(queryAllByLabelText(/Email/i)).toBeTruthy();
    expect(queryAllByLabelText(/Address/i)).toBeTruthy();

    expect(queryAllByText(/Add employee/i)).toBeTruthy();
    expect(queryAllByText(/Cancel/i)).toBeTruthy();
});


