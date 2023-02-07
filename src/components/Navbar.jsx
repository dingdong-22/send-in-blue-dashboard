function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_left">
        <img
          className="company_logo"
          src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/g0wipqhbt9udqeb1rdcb"
          alt=""
        />
        <button className="nav_buttons current">Campaigns</button>
        <button className="nav_buttons">Automation</button>
        <button className="nav_buttons">Transactional</button>
        <button className="nav_buttons">Contacts</button>
        <button className="nav_buttons">Add more apps</button>
      </div>
      <div className="navbar_right">
        <button className="nav_buttons">Bell</button>
        <button className="nav_buttons">Help</button>
        <button className="nav_buttons">Drop Down</button>
      </div>
    </div>
  );
}

export default Navbar;
