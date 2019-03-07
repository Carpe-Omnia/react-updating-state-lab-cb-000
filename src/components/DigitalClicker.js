import React from 'React' ;

export default class DigitalClicker extends React.Component {

  constructor() {
    super() ;
     this.state = {
       timesClicked: 0
     }
     this.clickCount = this.clickCount.bind(this)
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
