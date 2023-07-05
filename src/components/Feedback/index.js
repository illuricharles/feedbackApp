import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isSubmited: false,
  }

  onClickEmoji = () => {
    this.setState(prevState => ({isSubmited: !prevState.isSubmited}))
  }

  render() {
    const {resources} = this.props
    const {emojis} = resources
    const {isSubmited} = this.state

    return (
      <div className="bg-container">
        {!isSubmited && (
          <div className="card-container">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>

            <ul className="emoji-container">
              {emojis.map(eachList => (
                <li key={eachList.id} className="emoji-items">
                  <img
                    src={eachList.imageUrl}
                    alt={eachList.name}
                    className="emoji"
                    onClick={this.onClickEmoji}
                  />
                  <p className="emoji-name">{eachList.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {isSubmited && (
          <div className="card-container submit-card-container">
            <img
              className="love-emoji"
              src="https://assets.ccbp.in/frontend/react-js/love-emoji-img.png"
              alt="love emoji"
            />
            <h1 className="submit-heading">Thank You!</h1>
            <p className="submit-description">
              We will use your feedback to improve out customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
