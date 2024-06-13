import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";

const TEST_USERNAME = 'Maks'

describe('Header tests', () => {
    it('renders greeting wuth userName', () => {
        render(<Header userName={TEST_USERNAME} />);
        const greetingElement = screen.getByText(`Hey, ${TEST_USERNAME}`);
        expect(greetingElement).toBeInTheDocument();
    });
})