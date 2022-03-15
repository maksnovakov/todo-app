import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

const TEST_USERNAME = 'Sofia'

describe('Header tests', () => {
    it('renders greeting with userName', () => {
        render(<Header userName={TEST_USERNAME}/>);
        const greetingElement = screen.getByText(`Hey, ${TEST_USERNAME}`);
        expect(greetingElement).toBeInTheDocument();
    });
})