import './Footer.scss';

import Contact from './Contact';
import Message from './Message';
import SocialContacts from './SocialContacts/SocialContacts';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer>
        <Contact />
        <SocialContacts />
        <Message />
      </footer>
    </div>
  );
};

export default Footer;
