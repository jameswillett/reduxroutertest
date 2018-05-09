import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { setMessage } from '../actions/message';

class Input extends Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.setState({
      message: '',
    })
  }
  handleChange(e){
    this.setState({
      message: e.target.value
    });
  }
  render(){
    return (
    <div>
      <Helmet><title>home</title></Helmet>
      <div>
        <h1>{this.props.message.message}</h1>
        <input
          type='text'
          onChange={this.handleChange}
        />
        <button onClick={() => this.props.setMessage(this.state.message)}>text</button>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  message: state.message,
})

const mapDispatchToProps = {
  setMessage,
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);
