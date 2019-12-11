import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  // state can possibly hold the default words so that way they can be reset properly? 

  // props will include be the callback function

  // props is probably also the next available ID number because Game knows how many players it has already and will call the next one over. Yea, that makes the most sense. 

  // Starting with the tags in the state so that upon reset, it'll always start with this text in it. 
  constructor(props) {
    super(props);
    this.state = {
      player: 1,
      adj1: 'adjective',
      noun1: 'noun', 
      adverb: 'adverb', 
      verb: 'verb', 
      adj2: 'adjective', 
      noun2: 'noun'
    }
  }
  //on word tabbing or entering, this takes the new information and adjusts state accordingly
  onInputChange = (event) => {
    //emtpy updated state
    const updatedState = {}
    //sets the data and name/label for setState
    const field = event.target.name;
    const value = event.target.value
    //updates the updated state at the particular name to have the value of value
    //bracket notation is needed when what we're passing into it is a variable
    updatedState[field] = value
    //updated the state with the updatedState object
    this.setState(updatedState)
  }

  //on submit, this takes the event and then takes all the items into state very momentarily
  onSubmitLine = (event) => {
    console.log("blarg")
    event.preventDefault();
    const line = {
      adj1: this.state.adj1,
      noun1: this.state.noun1, 
      adverb: this.state.adverb, 
      verb: this.state.verb, 
      adj2: this.state.adj2, 
      noun2: this.state.noun2,
    }

    //then, it uses the line to pass into the addLineCallback function, which will go back to Game
    this.props.addLineCallback(line);

    //this resets the form for use next time
    this.setState({
      adj1: 'adjective',
      noun1: 'noun', 
      adverb: 'adverb', 
      verb: 'verb', 
      adj2: 'adjective', 
      noun2: 'noun'
    })

    let inc = this.state.player
    inc = inc + 1
    this.setState({player: inc})

  }



  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{`${this.state.player}`}</h3>

        <form className="PlayerSubmissionForm__form"  onSubmit={this.onSubmitLine}>

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example
            }
            The 
            <input name="adj1" placeholder={this.state.adj1} type="text" onChange={this.onInputChange} value={this.state.adj1} />
            <input name="noun1" placeholder={this.state.noun1} type="text" onChange={this.onInputChange} value={this.state.noun1} />
            <input name="adverb" placeholder={this.state.adverb} type="text" onChange={this.onInputChange} value={this.state.adverb} />
            <input name="verb" placeholder={this.state.verb} type="text" onChange={this.onInputChange} value={this.state.verb} />
            the
            <input name="adj2" placeholder={this.state.adj2} type="text" onChange={this.onInputChange} value={this.state.adj2} />
            <input name="noun2" placeholder={this.state.noun2} type="text" onChange={this.onInputChange} value={this.state.noun2} />
            .
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn"/>
          </div>
        </form>
      </div>
    );
  }
}

PlayerSubmissionForm.propTypes = {
  addLineCallback: PropTypes.func.isRequired,
}

export default PlayerSubmissionForm;
