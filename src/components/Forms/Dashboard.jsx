import React from 'react';

import './Dashboard.css';
import { Alert, Form } from 'react-bootstrap';

export class InputOptions {
    /** @type {string} */ type = 'text';
    /** @type {string} */ label = '';
    /** @type {string} */ name = '';
    /** @type {string} */ as = undefined;
    children = undefined;

    constructor(label, as, children, type, name) {
        if(type) this.type = type;
        if(label) this.label = label;
        if(as) this.as = as;
        if(children) this.children = children
        
        this.name = name || this.label.toLowerCase().replace(' ', '');
    }
}

/**
 * @param {object} param0
 * @param {string} param0.headerText
 * @param {Function} param0.onChange
 * @param {object} param0.values
 * @param {InputOptions[]} param0.fields
 * @param {Symbol[]} params0.children
 */
export function Container({ headerText, onChange, values, fields, children }) {

    var sections = [];

    if(fields) {
        fields.forEach(field => {
            sections.push(
                <Section labelText={field.label} key={field.name}>
                    <Form.Control
                        as={field.as}
                        name={field.name}
                        value={values[field.name]}

                        onChange={onChange}
                    >
                        {field.children}
                    </Form.Control>
                </Section>
            )
        });
    }

    return (
        <div className='dashboard-input-container'>
            {headerText && (<Header text={headerText} />)}

            {(sections) && sections}

            {children}
        </div>
    );
}

export function Header({ text }) {
    return (
        <h3 className='dashboard-input-container-header'>{text}</h3>
    );
}

export function Label({ text }) {
    return (
        <p className='dashboard-input-label'>{text}</p>
    );
}

export function Section({ labelText, children }) {
    return (
        <div className='dashboard-input-section'>
            {labelText && (<Label text={labelText} />)}
            {children}
        </div>
    );
}

export function ErrorMessage({ errors }) {
    var keys = Object.keys(errors);

    return keys.length > 0 ? (
        <Alert variant='danger'>
            {keys.map(error => (
                <p key={error}>{errors[error]}</p>
            ))}
        </Alert>
    ) : null;
}