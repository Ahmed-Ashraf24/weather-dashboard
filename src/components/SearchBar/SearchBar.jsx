
import './SearchBar.css';
function SearchBar({ onSearch, loading }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const city = formData.get('city').trim();

    if (city) {
      onSearch(city);
    }
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        name="city"
        placeholder="Search for a city..."
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
}

export default SearchBar;
