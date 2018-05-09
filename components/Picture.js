import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

class Picture extends Component {
  render(){
    const pictures = [
      'https://cdn8.littlethings.com/app/uploads/2017/05/cool-dog-names-five-600x600.jpg',
      'http://i0.kym-cdn.com/entries/icons/original/000/002/203/20533_cooldog.jpg',
    ];
    return (
    <div>
      <Helmet><title>this is a cool dog</title></Helmet>
      <div>
        <h1>{this.props.message.message}</h1>
        <img src={pictures[this.props.id - 1]} />
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  message: state.message,
  id: state.component.payload,
})

export default connect(mapStateToProps)(Picture);
