import { useMemo } from 'react';
import './Pagination.scss';
import PropTypes from 'prop-types';
import Button from '../Button';

const Pagination = ({ clientsPerPage, totalClients, paginate }) => {
  const pageNumbers = useMemo(() => {
    return Array.from(
      { length: Math.ceil(totalClients / clientsPerPage) },
      (_, index) => index + 1,
    );
  }, [totalClients, clientsPerPage]);

  return (
    <div className="pagination-list">
      {pageNumbers.map((number) => (
        <Button
          key={`page-${number}`}
          action={() => paginate(number)}
          smallBtn
          bgColor="primary-light"
        >
          {number}
        </Button>
      ))}
    </div>
  );
};

Pagination.propTypes = {
  clientsPerPage: PropTypes.number,
  totalClients: PropTypes.number,
  paginate: PropTypes.func,
};

export default Pagination;
