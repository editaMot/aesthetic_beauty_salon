import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button';
import CloseIcon from '../../atoms/Icons/CloseIcon';
import './Modal.scss';
import classnames from 'classnames';

const Modal = ({ isModalOpen, handleClose, children, withCloseIcon }) => {
  const disableScroll = () => isModalOpen && (document.body.style.overflow = 'hidden');

  useEffect(() => {
    const handleEscPress = (e) => {
      if (e.key === 'Escape') handleClose();
    };

    disableScroll();

    if (isModalOpen) document.addEventListener('keydown', handleEscPress);

    return () => {
      document.removeEventListener('keydown', handleEscPress);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return createPortal(
    <>
      <div className="modal-container">
        <div className={classnames('modal', withCloseIcon && 'modal--close-icon')}>
          {withCloseIcon && (
            <Button noStyle alignEnd className="modal__btn" action={() => handleClose()}>
              <CloseIcon size="24px" />
            </Button>
          )}
          {children}
        </div>
      </div>
    </>,
    document.getElementById('modal-portal'),
  );
};

Modal.propTypes = {
  isModalOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  withCloseIcon: PropTypes.bool,
};

export default Modal;
