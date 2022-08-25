// Write your code here
import './index.css'

import Component from 'react'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState}))
  }

  render() {
    const {isSubscribed} = this.state

    let subButton
    if (isSubscribed === true) {
      subButton = (
        <button onClick={this.onSubscribe} type="button" className="button">
          Subscribe
        </button>
      )
    } else {
      subButton = (
        <button onClick={this.onSubscribe} type="button" className="button">
          Subscribed
        </button>
      )
    }
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        {subButton}
      </div>
    )
  }
}

export default Welcome
