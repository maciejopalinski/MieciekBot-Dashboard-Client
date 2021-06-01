import { Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { IGuildConfig, submitGuildConfig } from '../../data';

export const DashboardForm = ({ config } : { config : IGuildConfig }) => {

    return (
        <Formik
            initialValues={config}
            onSubmit={data => submitGuildConfig(config.guildID, data)}
        >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
                <form onSubmit={handleSubmit}>

                    <Button type='submit'>Submit</Button>

                </form>
            )}
        </Formik>
    );
}