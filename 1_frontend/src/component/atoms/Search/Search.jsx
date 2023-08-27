import PropTypes from 'prop-types';
import './Search.scss';
import SearchIcon from '../Icons/SearchIcon';

const Search = ({ onSearchChange }) => {
  return (
    <div className="search">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={onSearchChange}
      />
    </div>
  );
};

Search.propTypes = {
  onSearchChange: PropTypes.func,
};

export default Search;
