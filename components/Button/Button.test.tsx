import React, { RefObject } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Button, { ButtonProps } from './Button';

afterEach(() => {
    window.dataLayer = [];
});

describe('Button', () => {
    test('renders without errors', () => {
        render(<Button>Click me</Button>);
        const button = screen.getByRole('button') as HTMLButtonElement;
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Click me');
        expect(button.classList.contains('btn')).toBeTruthy();
    });

    test('renders with custom props', () => {
        const props: ButtonProps = {
            variant: 'secondary',
            isFullWidth: true,
            className: 'custom-class',
        };
        render(<Button {...props}>Click me</Button>);
        const button = screen.getByRole('button') as HTMLButtonElement;
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Click me');
        expect(button.classList.contains('btn')).toBeTruthy();
        expect(button.classList.contains('btn--secondary')).toBeTruthy();
        expect(button.classList.contains('btn--full-width')).toBeTruthy();
        expect(button.classList.contains('custom-class')).toBeTruthy();
    });

    test('handles clicks', () => {
        const onClickMock = jest.fn();
        render(<Button onPress={onClickMock}>Click me</Button>);
        const button = screen.getByRole('button');

        fireEvent.click(button);

        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    test('forwards refs', () => {
        const ref: RefObject<HTMLButtonElement> = React.createRef();
        render(<Button ref={ref}>Click me</Button>);
        const button = screen.getByRole('button');
        expect(ref.current).toBe(button);
    });
});
