import React, {Component} from 'react'

export class AddMeal extends Component {
  constructor (props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleSubmit (event) {
    // this.setState({value: event.target.value})
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
          Add meal
            <input type="text" name="Notes" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddMeal
