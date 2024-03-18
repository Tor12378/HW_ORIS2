import "../scss/header.scss";
function Header({ changeInputSearch }) {
  const ChangeInput = (event) => {
    changeInputSearch(event.target.value);
  };

  return (
    <header className="header">
      <h1 className="header_title">Who are you looking for?</h1>
      <div className="header_search-top">
        <div clasName="header_search">
          <div className="header_form">
            <input
              className="header_input"
              type="text"
              placeholder="E.g. Pikachu"
              onChange={ChangeInput}
            />
            <button className="header_button" type="submit">
              Go
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
