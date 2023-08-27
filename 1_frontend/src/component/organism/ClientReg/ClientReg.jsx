import { useState } from 'react';
import './ClientReg.scss';
import RegForm from '../../molecules/RegForm';
import makeUp from '../../../assets/makeUp.png';
import SuccessCard from '../../atoms/SuccessCard';

const ClientReg = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <div className="registration-wrapper">
      <section className="registration">
        <div className="registration__img">
          <img src={makeUp} alt="make up" />
        </div>
        <div className="registration__form">
          {isSubmitted ? (
            <SuccessCard
              text="Your registration is successfull!"
              size="15rem"
              btnText="Make another appointment"
              action={() => setIsSubmitted(false)}
            />
          ) : (
            <>
              <h2>Make an appointment</h2>
              <RegForm
                editClientInfo={{ name: '', email: '', date: '', time: '' }}
                setIsSubmitted={setIsSubmitted}
              />
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default ClientReg;
