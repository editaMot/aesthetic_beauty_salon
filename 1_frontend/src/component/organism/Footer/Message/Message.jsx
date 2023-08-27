import { useState } from 'react';
import ContactForm from '../../../molecules/ContactForm';
import Modal from '../../../molecules/Modal';
import Button from '../../../atoms/Button';
import './Message.scss';
import SuccessCard from '../../../atoms/SuccessCard';
import letter from '../../../../assets/images/letter.svg';

const Message = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="message">
      <h3 className="message__heading">STAY IN TOUCH</h3>
      <span className="dash"></span>
      <Button
        bgColor="secondary-light"
        smallBtn
        action={() => {
          setIsModalOpen(true);
        }}
      >
        Write us a message
      </Button>
      {isModalOpen && (
        <Modal withCloseIcon handleClose={() => setIsModalOpen(!isModalOpen)}>
          <div className="message__modal">
            <img src={letter} alt="make up artist" />
            <div className="message__form">
              {isSubmitted ? (
                <SuccessCard
                  text="Your message has been sent successfully"
                  size="10rem"
                  btnText="Sent another message"
                  action={() => setIsSubmitted(false)}
                />
              ) : (
                <ContactForm
                  initialValues={{ name: '', email: '', message: '' }}
                  setIsSubmitted={setIsSubmitted}
                />
              )}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Message;
