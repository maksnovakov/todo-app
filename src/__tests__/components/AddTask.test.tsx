import { render, screen } from '@testing-library/react';
import AddTask from '../../components/AddTask';

describe('AddTask tests', () => {

    it('renders add icon and input field with default label', () => {
        render(<AddTask addTaskToList={jest.fn}/>);
        expect(screen.getByTestId("add-icon")).toBeInTheDocument();
        expect(screen.getByText("What's on your mind today?")).toBeInTheDocument();
    });

})