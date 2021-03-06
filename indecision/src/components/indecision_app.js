import React, {Component} from 'react'
import AddOption from './add_option'
import Options from './options'
import Header from './header'
import Action from './action'
import OptionModal from './option_modal';

class IndecisionApp extends Component {

 state= {
    options: [],
    selectedOption: undefined
  };

  handleDeleteOptions = ()=> {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption = (optionToRemove) =>{
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }


  handlePick= () =>{
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];

    this.setState({selectedOption : option})
  };

  handleClean=()=>{
    this.setState(() =>({
      selectedOption:false
    }));
  };

  handleAddOption= (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className='container'>
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
        </div>


        <OptionModal
          selectedOption = {this.state.selectedOption}
          handleClean={this.handleClean}/>
      </div>
    );
  }
}

export default IndecisionApp;
