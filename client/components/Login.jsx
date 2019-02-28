import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signin} from '../actions/auth'
import {TextField, Button} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      surname: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit (e) {
    const user = this.state
    this.props.dispatch(signin(user))
    this.setState({
      name: '',
      surname: '',
      password: ''
    })
    e.preventDefault()
  }

  render () {
    if (this.props.auth.loggedIn) {
      return <Redirect to='/' />
    }

    const {name, surname, password} = this.state
    const style = {
      alignText: 'center'
    }
    return (
      <Grid container justify = "center">
        <div className='signin' style={style}>
          <form>
            <div>
              <h1>Login To Food Mood</h1>
            </div>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <div>
              <label htmlFor="firstname">
              
            Firstname: <TextField id='firstname' name='name' variant="outlined" placeholder='firstname' onChange={this.handleChange} value={name} /> </label>
            </div>
            <div>

              <label htmlFor="lastname">
            Lastname: <TextField id='lastname' variant="outlined" name='surname' placeholder='lastname' onChange={this.handleChange} value={surname} /></label>
            </div>
            <div>

          Password: <TextField id='password' variant="outlined" name='password' placeholder='password' onChange={this.handleChange} value={password} type='password' />
            </div>
            <div>
              <Grid container justify = "center">
                <label htmlFor="signinBtn" >
                  <Button name='signinBtn' id='signinBtn' onClick={this.handleSubmit}>Login</Button></label>
              </Grid>
            </div>
          </form>
        </div>
      </Grid>
    )
  }
}

const mapStateToProps = ({auth}) => ({auth})
export default connect(mapStateToProps)(Login)