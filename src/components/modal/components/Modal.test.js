import {render, screen} from '@testing-library/react';
import Modal from "./Modal";

test('render modal', () => {
    render(
        <Modal show title='this is title' onClose={jest.fn()}>
            <div></div>
        </Modal>
    );
    const linkElement = screen.getByText(/this is title/i);
    expect(linkElement).toBeInTheDocument();
});