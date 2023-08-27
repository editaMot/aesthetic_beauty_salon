import { useState, useEffect } from 'react';
import './Table.scss';
import axios from 'axios';
import Button from '../../atoms/Button';
import Modal from '../../molecules/Modal';
import PropTypes from 'prop-types';
import TrashCanIcon from '../../atoms/Icons/TrashCanIcon';
import PenIcon from '../../atoms/Icons/PenIcon';
import DeleteModalContent from './DeleteModalContent';
import EditModalContent from './EditModalContent';
import Pagination from '../../atoms/Pagination/Pagination';

const Table = ({ data }) => {
  const tHeadData = Object.keys(data[0]);
  const [deletionModalOpen, setDeletionModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [clientId, setClientId] = useState();
  const [editClientInfo, setEditClientInfo] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [clientsPerPage] = useState(10);

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = data.slice(indexOfFirstClient, indexOfLastClient);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDelete = (clientId) =>
    axios.delete(`${import.meta.env.VITE_APP_API_URL}/${clientId}`);

  const handleEdit = (client) => {
    setClientId(client._id);

    const formValues = {
      name: client.name,
      email: client.email,
      date: client.date.slice(0, 10),
      time: client.time,
    };

    setEditClientInfo(formValues);
  };

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            {tHeadData.slice(1, tHeadData.length - 1).map((item) => (
              <th key={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentClients.map((client) => (
            <tr key={client._id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.date.slice(0, 10)}</td>
              <td>{client.time}</td>
              <td className="table__action">
                <Button
                  noStyle
                  action={() => {
                    setDeletionModalOpen(true);
                    setClientId(client._id);
                  }}
                >
                  <TrashCanIcon />
                </Button>
                <Button
                  noStyle
                  action={() => {
                    setEditModalOpen(true);
                    setClientId(client._id);
                    handleEdit(client);
                  }}
                >
                  <PenIcon />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {deletionModalOpen && (
        <Modal
          isModalOpen={deletionModalOpen}
          handleClose={() => setDeletionModalOpen(!deletionModalOpen)}
        >
          <DeleteModalContent
            handleDelete={handleDelete}
            clientId={clientId}
            handleModalOpen={setDeletionModalOpen}
          />
        </Modal>
      )}
      {editModalOpen && (
        <Modal
          withCloseIcon
          isModalOpen={editModalOpen}
          handleClose={() => setEditModalOpen(!editModalOpen)}
        >
          <EditModalContent editClientInfo={editClientInfo} clientId={clientId} />
        </Modal>
      )}
      <Pagination
        clientsPerPage={clientsPerPage}
        totalClients={data.length}
        paginate={paginate}
      />
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.array,
  editClientInfo: PropTypes.object,
};

export default Table;
