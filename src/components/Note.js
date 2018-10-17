import React, { Component } from 'react'

export default class Note extends Component {
  render() {
    return (
      <div className="note">
        <p>{this.props.note.text}</p>
      </div>
    )
  }
}
