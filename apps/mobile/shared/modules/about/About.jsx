const Modal = React.createClass({
  onOK() {
    this.props.fulfill(1);
  },

  onCancel() {
    this.props.fulfill(0);
  },

  render() {
    return (
      <div className="madal">
        modal
        <button className="btn btn-primary" onClick={this.onOK}>OK</button>
        <button className="btn btn-default" onClick={this.onCancel}>Cancel</button>
      </div>
    )
  }
});

About = React.createClass({

  onAlert() {
    Overlay.alert('성공했습니다.').then((value) => {
      alert(value);
    });
  },

  onConfirm() {
    Overlay.confirm('계속갈까요?').then((value) => {
      alert(value);
    });
  },

  onPage() {
    Overlay.page(<Modal />, { className: 'slide-up' }).then((value) => {
      alert(value);
    })
  },

  notify() {
    Overlay.notify('새로운 소식이 왔습니다.');
  },

  render() {
    return (
      <main id="content">
        <App.Header />

        <article className="page">

          <h3>About</h3>

          <div className="btn-toolbar">
            <button className="btn btn-primary" onClick={this.onAlert}>alert</button>
            <button className="btn btn-info" onClick={this.onConfirm}>confirm</button>
            <button className="btn btn-warning" onClick={this.onPage}>page</button>
            <button className="btn btn-success" onClick={this.notify}>notify</button>
          </div>
        </article>
      </main>
    );
  }
});
