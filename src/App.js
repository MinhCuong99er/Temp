import React, { Component, useState } from "react";
import styles from "./styles/styles.css";
import List from "./component/List";
import Form from "./component/Form"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          number: '123',
          name: 'ewfrrw',
          email: '3rd4w'
        }, {
          number: '123',
          name: 'ewfrrw',
          email: '3rd4w'
        },
      ],
      // number: '',
      // name: '',
      // email: ''
      nameInput : "",
      numberInput: "",
      emailInput: "",
    };
    // this.addInfo = this.addInfo.bind(this);
  };
  setInfo = (event) => {
    let name = event.target.name
    let value = event.target.value
    this.setState({[name] : value});
  }
  addInfo = (event) => {
    let name = event.target.name
    let value = event.target.value
    if (name=="number") {
      this.setState({
        numberInput: value
      });
    }
    else if (name=="name") {
      this.setState({
        nameInput: value
      });
    }
    else if (name=="email") {
      this.setState({
        emailInput: value
      });
    }
    // this.setState({
      
    // });
  }
  
  submitInfo = (e) => {
    e.preventDefault()
    console.log(this.state.students)
  }
  
  render() {
    // console.log(this.state.students);
    let students = this.state.students;
    
    // const addInfo = (event) => {
    //   let name = event.target.name
    //   let value = event.target.value
    //   this.setState({
    //     students: [
    //       ...this.state.students,
    //       {
    //         [name] : value
    //       },
    //     ],
    //   });
    // };

    const removeNote = (_index) => {
      const newState = this.state.students.filter((elm, index) => index != _index);
      this.setState({
        students: newState,
      });
    };
    return (
        <div className="App">
          <div className="container">
            <h1>List Student Information:</h1>
            <form className="form-inline" onSubmit={event => this.submitInfo(event)}>
              <div className="form-group">
                <input type="number" name="number"
                  value={this.state.number} onChange={number => this.addInfo(number)} placeholder="Enter number"/>
              </div> 
              <div className="form-group">
                <input type="text" name="name"  
                  value={this.state.name} onChange={name => this.addInfo(name)} placeholder="Enter name"/>
              </div>
              <div className="form-group">
                <input type="email" name="email"  
                  value={this.state.email} onChange={email => this.addInfo(email)} placeholder="Enter email"/>
              </div>
              <button type="submit" >Add</button>
            </form>
            {/* <Form addInfo={addInfo}/> */}
            <List removeNote={removeNote} students={students}/>
          </div>
        </div>
    );
  }
}

export default App;
