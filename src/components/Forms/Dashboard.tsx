import React from 'react';

import './Dashboard.css';
import { Alert, Form } from 'react-bootstrap';
import { FormikErrors } from 'formik';

export class InputOptions {
    type: string;
    label: string;
    name: string;
    as?: React.ElementType;
    children?: JSX.Element;

    constructor(label = '', as?: React.ElementType, children?: JSX.Element, type = 'text', name = label.toLowerCase().replace(' ', '')) {
        this.type = type;
        this.label = label;
        this.name = name;
        this.as = as;
        this.children = children        
    }
}

type ContainerParams = {
    headerText: string;
    onChange: any;
    values: any;
    fields: InputOptions[];
}

export const Container = ({ headerText, onChange, values = {}, fields }: ContainerParams) => {

    var sections: JSX.Element[] = [];

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
        </div>
    );
}

type LabelParams = {
    text: string;
}

export const Header = ({ text } : LabelParams) => {
    return (
        <h3 className='dashboard-input-container-header'>{text}</h3>
    );
}

export const Label = ({ text }: LabelParams) => {
    return (
        <p className='dashboard-input-label'>{text}</p>
    );
}

type SectionParams = {
    labelText: string;
    children: JSX.Element | JSX.Element[];
}

export function Section({ labelText, children }: SectionParams) {
    return (
        <div className='dashboard-input-section'>
            {labelText && (<Label text={labelText} />)}
            {children}
        </div>
    );
}

export function ErrorMessage({ errors }: { errors: FormikErrors<any> }) {
    var keys = Object.keys(errors);

    return keys.length > 0 ? (
        <Alert variant='danger'>
            {keys.map(error => (
                <p key={error}>{errors[error]}</p>
            ))}
        </Alert>
    ) : null;
}