import React from 'react' ;

export default class YouTubeDebugger extends React.Component {
  constructor() {
    this.state = {
      errors: [],
      user: null,
      settings: {bitrate: 8, video: {resolution: '1080p'}}
    }
    this.changeBitRate = this.changeBitRate.bind(this) ;
    this.changeRes = this.changeRes.bind(this) ;
  }
  changeBitRate = () => {
    this.setState({
      settings[bitrate]: 12
    })
  }
  changeRes = () => {
    this.setState({
      settings[video][resolution]: '720p'
    }) ;
  }
  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.changeBitRate} />
        <button className="resolution" onClick={this.changeRes} />
      </div>
    )
  }
}
