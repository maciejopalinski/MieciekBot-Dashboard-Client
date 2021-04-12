import { Spinner as BSSpinner } from 'react-bootstrap';

export const Spinner = ({ className } : { className?: string }) => {
    
    return (
        <BSSpinner animation='border' role='status' className={className}>
            <span className='sr-only'>Loading...</span>
        </BSSpinner>
    );
}