import Information from "./Information";
import Introduction from "./Introduction";

function MainSection() {
  return (
    <div className="main_section">
      <div className="first_row">
        <h4 className="dashboard_header">Dashboard</h4>
        <button className="create_a_campaign_button">Create a campaign</button>
      </div>
      <Introduction />
      <Information />
    </div>
  );
}

export default MainSection;
