import { useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import Table from '../../molecules/Table';
import './ClientList.scss';
import Search from '../../atoms/Search/Search';
import clientNotFound from '../../../assets/images/clientNotFound.svg';
import Loader from '../../atoms/Loader';

const ClientList = () => {
  const [query, setQuery] = useState('');
  const { clients, isLoading } = useFetch(
    `${import.meta.env.VITE_APP_API_URL}?q=${query}`,
  );

  return (
    <div className="list-container">
      <h3>List of registered clients</h3>
      <Search
        onSearchChange={(e) => {
          setQuery(e.target.value.toLowerCase());
        }}
      />
      {isLoading ? (
        <Loader />
      ) : clients && clients.length > 0 ? (
        <Table data={clients} />
      ) : (
        <img src={clientNotFound} alt="Clients not found" />
      )}
    </div>
  );
};

export default ClientList;
