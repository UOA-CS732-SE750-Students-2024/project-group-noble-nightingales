import "./SearchTopRowCSS/SearchTopRow.css";

export default function SearchTopRow() {
  return (
    <div className="SearchTopRow-container">
      <div className="left">
        <input className="searchBar" type="text" placeholder="Search..." />
      </div>
      <div className="right">
        <h2>Top Tracks</h2>
        <ul>
          <li>Track 1</li>
          <li>Track 2</li>
          <li>Track 3</li>
        </ul>
      </div>
    </div>
  );
}
