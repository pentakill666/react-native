import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  Button,
  View,
} from 'react-native';

export default class radioBtn extends Component {
  constructor(props) {
    super(props);
    this.state={
      isSelected:true,
    }
  }
  componentDidMount() {
    console.log(this.state.isSelected)
  }
  toggle() {
    this.setState({
      isSelected:!this.state.isSelected
    })
  }
  render() {
    return (
            <View style={styles.wrapper}>
                  <ImageBackground
                  source={{uri:this.state.isSelected?'http://i4.bvimg.com/596158/26494bb1c083f501s.png':'1'}}
                  resizeMode='center'
                  style={styles.bg}>
                      <Text style={styles.btn} onPress={this.toggle.bind(this)}></Text>
                  </ImageBackground>
                <Text style={styles.label}>{this.props.label}</Text>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper:{
    height:100,
    flexDirection:'row',
  },
  bg:{
    width:18,
    height:18,
  },
  btn:{
    width:18,
    height:18,
    borderRadius:18,
    borderWidth:1,
    borderColor:'#ccc',
  },
  label:{
    flex:1,
    marginLeft:8,
  }
});
