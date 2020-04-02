import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello World</Text>
//     </View>
//   );
// }

export default class Game extends Component {
  // set initial state
  state = {
    secret : 0,
    input: '',
    feedback: ''
  }
  // function to pick a random number
  generateRandom(){
    return Math.round(Math.random() * 100)
  }
  // function to initialise the game
  init(){
    const secretNumber = this.generateRandom()
    this.setState({secret: secretNumber})
  } 
  // lifecycle function
  componentDidMount(){
    this.init()
  }
  // update input state
  updateInput = (value) => {this.setState({input: value})}

  checkGuess = () =>{
    const userGuess = parseInt(this.state.input);
    const secretNumber = this.state.secret;
    if (userGuess == secretNumber) {
      this.setState({feedback: 'You Guessed Right, The Number Is ' + secretNumber})
      // restart the game
      this.init()
      return
    }
    if (userGuess < secretNumber){
      this.setState({feedback: 'The Number Is Larger Than ' + userGuess})
    }
    if (userGuess > secretNumber){
      this.setState({feedback: 'The Number Is Smaller Than ' + userGuess})
    }
    return
  }
  render (){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Guess my number</Text>
        <TextInput style={styles.input}
        keyboardType='number-pad'
        onChangeText={this.updateInput}>
        </TextInput> 
        <TouchableHighlight 
        style={styles.button}
        underlayColor='#fff'
        onPress={this.checkGuess}>
          <Text>SUBMIT GUESS</Text>
        </TouchableHighlight>
        <Text style={styles.feedback}>{this.state.feedback}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button:{
    width: 200,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'yellow',
    marginTop: 50
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 32
  },
  input: {
    backgroundColor:'#fff',
    width: 100,
    marginTop: 20,
    padding: 10,
    textAlign: 'center',
    fontSize: 32
  },
  feedback: {
    color: 'red',
    marginTop: 20,
    fontSize: 20
  }
});
