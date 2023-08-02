import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const Portal = ({ children, elementId, className }) => {
    const portalRef = useRef(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        portalRef.current = document.querySelector(`#${elementId}`);
        setMounted(true);
    }, [mounted, elementId]);

    return (mounted && portalRef.current ? createPortal(
        <div className={`fixed top-0 left-0 w-full h-screen bg-black/10 ${className ?? "z-70"} backdrop-blur-lg transition-all duration-300`}>
            {children}
        </div>, 
        portalRef.current
    ) : null);
};

Portal.propTypes = {
    children: PropTypes.node.isRequired,
    elementId: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default Portal;