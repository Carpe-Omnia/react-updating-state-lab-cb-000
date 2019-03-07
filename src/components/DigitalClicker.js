import React from 'React' ;

export default class DigitalClicker extends React.Component {

  constructor() {
     this.State = {
       timesClicked: 0
     }
  }
  clickCount = () => {
    this.setState ({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.clickCount} />
      </div>
    )
  }
}
