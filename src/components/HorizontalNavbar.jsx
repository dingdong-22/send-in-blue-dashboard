import logo from "../images/company_logo.png";

function HorizontalNavBar() {
  return (
    <div className="horizontal_navbar">
      <div className="horizontal_navbar_left">
        <img className="company_logo" src={logo} alt="company_logo" />
        <button className="nav_buttons current">Campaigns</button>
        <button className="nav_buttons">Automation</button>
        <button className="nav_buttons">Transactional</button>
        <button className="nav_buttons">Contacts</button>
        <button className="nav_buttons">Add more apps</button>
      </div>
      <div className="horizontal_navbar_right">
        <button className="nav_buttons">Bell</button>
        <button className="nav_buttons">Help</button>
        <button className="nav_buttons">Drop Down</button>
      </div>
    </div>
  );
}

export default HorizontalNavBar;
