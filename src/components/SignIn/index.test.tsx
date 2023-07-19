import { render, screen, waitFor } from '@testing-library/react'
import { SignIn } from './index'

describe('Components/SignIn', () => {
    it('renders SignIn', () => {
        const { container } = render(<SignIn />);
        expect(container).toMatchSnapshot();
    })

    it('Should see the header in the screen', () => {
        render(<SignIn />);
        expect(screen.getByRole('heading', { name: "Sign in with your account" })).toBeInTheDocument();
    });

    it('Should see the Github login button', () => {
        render(<SignIn />);
        expect(screen.getByRole('button', { name: "Sign in with Github" })).toBeInTheDocument();
    });

    it('Should see the Google login button', () => {
        render(<SignIn />);
        expect(screen.getByRole('button', { name: "Sign in with Google" })).toBeInTheDocument();
    });

    it('Should see the Facebook login button', () => {
        render(<SignIn />);
        expect(screen.getByRole('button', { name: "Sign in with Facebook" })).toBeInTheDocument();
    });
});