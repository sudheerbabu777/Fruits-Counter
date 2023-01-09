// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count: 0, value: 0}

  onIncrementMango = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onIncrementBanana = () => {
    this.setState(prevState => ({value: prevState.value + 1}))
  }

  render() {
    const {count, value} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="mango">{count}</span> mangoes
            <span className="banana">{value}</span> bananas
          </h1>
          <div className="items-container">
            <div className="item-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="pictures"
                alt="mango"
              />
              <button
                className="button"
                type="button"
                onClick={this.onIncrementMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="item-container ">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="pictures"
                alt="banana"
              />
              <button
                className="button"
                type="button"
                onClick={this.onIncrementBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
