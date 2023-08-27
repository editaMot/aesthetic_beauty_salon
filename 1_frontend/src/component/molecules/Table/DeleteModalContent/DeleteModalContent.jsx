import { memo } from 'react';
import './DeleteModalContent.scss';
import PropTypes from 'prop-types';
import Button from '../../../atoms/Button';

const DeleteModalContent = ({ handleDelete, clientId, handleModalOpen }) => {
  return (
    <div>
      <p className="modal-text">
        Are you sure you want to permanently delete this registration?
      </p>
      <div className="modal-btn">
        <Button
          bgColor="primary-light"
          smallBtn
          action={() => {
            handleDelete(clientId);
            handleModalOpen(false);
            window.location.reload(true);
          }}
        >
          Yes
        </Button>
        <Button bgColor="primary" action={() => handleModalOpen(false)} smallBtn>
          Cancel
        </Button>
      </div>
    </div>
  );
};

DeleteModalContent.propTypes = {
  handleDelete: PropTypes.func,
  clientId: PropTypes.string,
  handleModalOpen: PropTypes.func,
};

export default memo(DeleteModalContent);
