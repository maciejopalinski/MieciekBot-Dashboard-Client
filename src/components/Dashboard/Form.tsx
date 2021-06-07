import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { IGuildConfig, submitGuildConfig } from '../../data';
import { ConfirmPopup } from './';

const capitalize = (input: string) => input.charAt(0).toUpperCase() + input.slice(1);

export const DashboardForm = ({ config } : { config : IGuildConfig }) => {

    return (
        <Formik
            initialValues={config}

            onSubmit={(data, { setSubmitting }) => {
                submitGuildConfig(config.guildID, data)
                .then(() => {
                    setSubmitting(false);
                })
                .catch((err) => {
                    setSubmitting(false);
                });
            }}

            enableReinitialize={true}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, isValidating, resetForm, setValues }) => (
                <Form onSubmit={handleSubmit}>

                    <Form.Label>Basic Settings</Form.Label>
                    <Form.Group controlId='basic'>

                        <Form.Label>Prefix</Form.Label>
                        <Form.Control type='text' name='prefix' placeholder='!' value={values.prefix} onChange={handleChange} onBlur={handleBlur} />

                        <Form.Label>Delete Timeout</Form.Label>
                        <Form.Control type='number' name='delete_timeout' placeholder='3000' value={values.delete_timeout} onChange={handleChange} onBlur={handleBlur} />

                    </Form.Group>

                    <Form.Label>Roles</Form.Label>
                    <Form.Group controlId='roles'>

                        {Object.entries(values.roles).map(([key, value]) => (
                            <div key={`roles_${key}`}>
                                <Form.Label>{key.length > 3 ? capitalize(key) : key.toUpperCase()}</Form.Label>
                                <Form.Control type='text' name={`roles.${key}`} placeholder='000000000' minLength={17} maxLength={18} value={value} onChange={handleChange} onBlur={handleBlur} />
                            </div>
                        ))}

                    </Form.Group>

                    <Form.Label>Announce Settings</Form.Label>
                    <Form.Group controlId='announce'>

                        <Form.Label>Channel ID</Form.Label>
                        <Form.Control type='text' name='announce.channel_id' placeholder='000000000' minLength={17} maxLength={18} value={values.announce.channel_id} onChange={handleChange} onBlur={handleBlur} />

                        <Form.Label>Announce new members</Form.Label>
                        <Form.Switch name='announce.toggles.add_member' id='add_member' checked={values.announce.toggles.add_member} onChange={handleChange} onBlur={handleBlur} />

                        <Form.Label>Announce leaving members</Form.Label>
                        <Form.Switch name='announce.toggles.remove_member' id='remove_member' checked={values.announce.toggles.remove_member} onChange={handleChange} onBlur={handleBlur} />

                    </Form.Group>

                    <Form.Label>Spam Channels</Form.Label>
                    <Form.Group controlId='spam_channels'>

                        {values.spam_channels.map((value, index) => (
                            <div key={`spam_channel_${index}`}>
                                <Form.Control type='text' name={`spam_channels[${index}]`} placeholder='000000000' minLength={17} maxLength={18} value={values.spam_channels[index]} onChange={handleChange} onBlur={handleBlur} />

                                <Button variant='outline-secondary' onClick={() => {
                                    values.spam_channels.splice(index, 1);
                                    setValues(values);
                                }}>X</Button>
                            </div>
                        ))}

                        <Button variant='outline-success' onClick={() => {
                            values.spam_channels.push('');
                            setValues(values);
                        }}>+</Button>

                    </Form.Group>

                    <ConfirmPopup isBtnDisabled={isSubmitting || isValidating} isVisible={Object.keys(touched).length > 0} resetAction={resetForm} />

                </Form>
            )}
        </Formik>
    );
}