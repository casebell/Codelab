
Overlay.Confirm = React.createClass({
  handleClick(value) {
    this.props.fulfill(value);
  },

  render() {
    return (
      <section>
        <div className="overlay-message">{this.props.message}</div>

        <div className="overlay-btn-group">
          <div className="btn-group">
            <button type="button"
                    className="btn btn-primary overlay-btn"
                    onClick={this.handleClick.bind(this, true)} >
              {L('command_yes')}
            </button>
          </div>
          <div className="btn-group">
            <button type="button"
                    className="btn btn-default overlay-btn"
                    onClick={this.handleClick.bind(this, false)} >
              {L('command_no')}
            </button>
          </div>
        </div>
      </section>
    )
  }
});
