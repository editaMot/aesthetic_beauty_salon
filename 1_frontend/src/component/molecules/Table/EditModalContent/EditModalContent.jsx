import { memo, useState } from 'react';
import RegForm from '../../RegForm';
import './EditModalContent.scss';
import PropTypes from 'prop-types';
import SuccessCard from '../../../atoms/SuccessCard';

const EditModalContent = ({ editClientInfo, clientId }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <div className="form-wrapper">
      {isSubmitted ? (
        <SuccessCard
          text="Client information updated successfully!"
          size="15rem"
          hasBtn={false}
        />
      ) : (
        <RegForm
          editClientInfo={editClientInfo}
          clientId={clientId}
          setIsSubmitted={setIsSubmitted}
        />
      )}
    </div>
  );
};

EditModalContent.propTypes = {
  editClientInfo: PropTypes.object,
  clientId: PropTypes.string,
};

export default memo(EditModalContent);
