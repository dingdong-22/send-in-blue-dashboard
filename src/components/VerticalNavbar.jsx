function VerticalNavBar() {
  return (
    <div className="vertical_navbar">
      <button className="vertical_navbar_buttons">Dashboard</button>
      <button className="vertical_navbar_buttons">Email</button>
      <button className="vertical_navbar_buttons">Templates</button>
      <button className="vertical_navbar_buttons">Statistics</button>
      <button className="vertical_navbar_buttons">Settings</button>

      <div className="emails_section">
        <p className="emails_header">Emails</p>
        <p className="emails_text_info">300 emails</p>
        <p className="emails_text_view">View Details</p>
      </div>
    </div>
  );
}

export default VerticalNavBar;
