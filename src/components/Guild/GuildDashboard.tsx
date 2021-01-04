import React from 'react';
import { GuildInfo } from '../../util';

import { Spinner } from 'react-bootstrap';
import { Formik, FormikErrors } from 'formik';
import { Dashboard, Confirm } from '../../components';

export function GuildDashboard({ guild } : { guild?: GuildInfo }) {
    
    const [ prefix, setPrefix ] = React.useState('mb!');

    if(guild) {
        return (
            <main className='guild-dashboard-wrapper'>

                <div className='guild-dashboard-info'>
                    <p>{guild.name} - Settings</p>
                </div>

                <div className='guild-dashboard-form'>

                    <Formik
                        initialValues={{
                            prefix: prefix,
                            setting1: 'this is a test value',
                            setting2: 'option C',
                            setting3: 'another text input'
                        }}

                        validate={(values) => {
                            const errors: FormikErrors<typeof values> = {};

                            if(!values.prefix) errors.prefix = 'Prefix is required';
                            if(values.prefix.includes(' ')) errors.prefix = 'Invalid prefix! Prefix cannot have a space in it.';

                            return errors;
                        }}

                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                console.log(values);
                                setSubmitting(false);
                            }, 1000);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleSubmit,
                            isSubmitting,
                            resetForm
                        }) => (
                            <form onSubmit={handleSubmit}>

                                <Dashboard.ErrorMessage errors={errors} />

                                <Dashboard.Container
                                    headerText='General Settings'
                                    onChange={handleChange} values={values}

                                    fields={[
                                        new Dashboard.InputOptions('Prefix'),
                                        new Dashboard.InputOptions('Setting 1'),
                                        new Dashboard.InputOptions('Setting 2', 'select', (
                                            <>
                                            <option>option A</option>
                                            <option>option B</option>
                                            <option>option C</option>
                                            <option>option D</option>
                                            </>
                                        ))
                                    ]}
                                />

                                <Dashboard.Container
                                    headerText='Some Other Settings'
                                    onChange={handleChange} values={values}

                                    fields={[
                                        new Dashboard.InputOptions('Setting 3')
                                    ]}
                                />

                                <Confirm isBtnDisabled={isSubmitting} resetAction={resetForm} />

                            </form>
                        )}
                    </Formik>

                </div>

            </main>
        );
    }
    else {
        // still loading
        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        );
    }
}