import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <div className='modal'>{this.props.children}</div>,
      document.getElementById('modal-root')
    );
  }
}

function App() {
  return (
    <div>
      <Modal>This is a modal content!</Modal>
    </div>
  );
}

export default App;