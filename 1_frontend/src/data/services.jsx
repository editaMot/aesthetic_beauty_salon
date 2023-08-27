import HairProcedure from '../component/atoms/Icons/HairProcedure';
import HairStylingIcon from '../component/atoms/Icons/HairStylingIcon';
import ManicureIcon from '../component/atoms/Icons/ManicureIcon';
import PedicureIcon from '../component/atoms/Icons/PedicureIcon';
import FacialProcIcon from '../component/atoms/Icons/FacialProcIcon';

const services = [
  {
    serviceName: 'Manicure',
    icon: <ManicureIcon />,
  },
  {
    serviceName: 'Pedicure',
    icon: <PedicureIcon />,
  },
  {
    serviceName: 'Hair Treatment',
    icon: <HairProcedure />,
  },
  {
    serviceName: 'Hair Styling',
    icon: <HairStylingIcon />,
  },
  {
    serviceName: 'Facial Procedure',
    icon: <FacialProcIcon />,
  },
];

export default services;
