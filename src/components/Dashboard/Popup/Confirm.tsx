import { Button } from 'react-bootstrap';
import './Confirm.css';

export const ConfirmPopup = ({
    message = 'Careful - you have unsaved changes!',
    isBtnDisabled = false,
    isVisible = false,
    resetAction
} : {
    message?: string,
    isBtnDisabled?: boolean,
    isVisible?: boolean
    resetAction?: any
}) => {

    return isVisible ? (
        <div className='confirm-wrapper'>
            <div className='confirm-container'>
                <div className='confirm-content'>

                    <div className='confirm-message'>
                        {message}
                    </div>

                    <div className='confirm-buttons'>
                        
                        <Button
                            type='button'
                            variant='outline-secondary'
                            size='sm'
                            disabled={isBtnDisabled}
                            onClick={resetAction}
                        >
                            Reset
                        </Button>

                        <Button
                            type='submit'
                            variant='success'
                            size='sm'
                            disabled={isBtnDisabled}
                        >
                            Save Changes
                        </Button>
                    
                    </div>

                </div>
            </div>
        </div>
    ) : null;
}