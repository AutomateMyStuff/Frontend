import { render, screen, waitFor } from '@testing-library/react'
import { SignedIn } from './index'

jest.mock("next-auth/react", () => {
    const originalModule = jest.requireActual('next-auth/react');
    const mockSession = {
        expires: new Date(Date.now() + 2 * 86400).toISOString(),
        user: { username: "admin" }
    };
    return {
        __esModule: true,
        ...originalModule,
        useSession: jest.fn(() => {
            return { data: mockSession, status: 'authenticated' }  // return type is [] in v3 but changed to {} in v4
        }),
    };
});

describe('Components/SignedIn', () => {
    it('renders SignedIn and match snapshot', () => {
        const { container } = render(<SignedIn />);
        expect(container).toMatchSnapshot();
    })

    it('Should see the header in the screen', () => {
        render(<SignedIn />);
        expect(screen.getByRole('heading', { name: "Signed In" })).toBeInTheDocument();
    });

    it('Should see the Logout button', () => {
        render(<SignedIn />);
        expect(screen.getByRole('button', { name: "Sign out" })).toBeInTheDocument();
    });
});