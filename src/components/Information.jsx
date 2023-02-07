function Information() {
  return (
    <div className="information">
      <div className="information_blocks">
        <div>
          <p className="information_type">Total contacts</p>

          <p className="count">1</p>
        </div>
        <button className="information_arrow">&gt;</button>
      </div>
      <div className="information_blocks">
        <div>
          <p className="information_type">Opens</p>
          <div className="progress">
            <p className="count">0</p>
            <p className="percentage">0%</p>
          </div>
        </div>
        <button className="information_arrow">&gt;</button>
      </div>
      <div className="information_blocks">
        <div>
          <p className="information_type">Clicks</p>
          <div className="progress">
            <p className="count">0</p>
            <p className="percentage">0%</p>
          </div>
        </div>
        <button className="information_arrow">&gt;</button>
      </div>
      <div className="information_blocks">
        <div>
          <p className="information_type">Blocklists</p>
          <div className="progress">
            <p className="count">0</p>
            <p className="percentage">0%</p>
          </div>
        </div>
        <button className="information_arrow">&gt;</button>
      </div>
    </div>
  );
}

export default Information;
