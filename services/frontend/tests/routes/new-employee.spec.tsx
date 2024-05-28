import { createRemixStub } from '@remix-run/testing';
import { render, screen, act } from '@testing-library/react';
import Index from 'services/frontend/app/routes/_index';
import NewEmployee from 'services/frontend/app/routes/new-employee';
import { installGlobals } from '@remix-run/node';

installGlobals();

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

    await act(() => {
        render(<RemixStub initialEntries={['/new-employee']} />);
    });

    await screen.findAllByText("Add employee");

    expect(screen.findAllByText("Add employee")).toBeTruthy();
    
});


