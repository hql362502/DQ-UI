import React from "react";
import {render, fireEvent} from '@testing-library/react'
import Button,{ButtonType, ButtonProps, ButtonSize} from "./button";

const defaultProps ={
    onClick: jest.fn()
}

const testProps:ButtonProps = {
    btnType: 'primary',
    size: 'lg',
    className: 'hql'
}

const disabledProps:ButtonProps = {
    disabled: true,
    onClick: jest.fn()
}
describe('test Button component',()=>{
    it('should render the correct default button',()=>{
        const view = render(<Button {...defaultProps}>Nice</Button>)
        const element = view.getByText('Nice') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('btn btn-default')
        expect(element.tagName).toEqual('BUTTON')
        fireEvent.click(element)
        expect(element.disabled).toBeTruthy()
        expect(defaultProps.onClick).toHaveBeenCalled()
    })
    it('should render the correct component based on different props',()=>{
        const view = render(<Button {...testProps}>Nice</Button>)
        const element = view.getByText('Nice')
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('btn btn-primary btn-lg hql')
    })
    it('should render a link when btnType equals link and href is provided',()=>{
        const view = render(<Button btnType ='link' href="javascript:;">Link</Button>)
        const element = view.getByText('Link')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('A')
        expect(element).toHaveClass('btn btn-link')
        expect(element.getAttribute('href')).toEqual('javascript:;')
    })
    it('should render disabled button when disabled set to true',()=>{
        const view = render(<Button {...disabledProps}>Nice</Button>)
        const element = view.getByText('Nice')
        expect(element).toBeInTheDocument()
        expect(element).toBeDisabled()
        fireEvent.click(element)
        expect(disabledProps.onClick).not.toHaveBeenCalled()
    })
})
