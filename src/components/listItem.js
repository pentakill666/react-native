import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class listItem extends Component {
  render() {
    return (
      <View style={styles.cell}>
        <View style={styles.label}>
          <Image source={this.props.imgurl}
          style={styles.img}
          resizeMode='stretch'
          style={styles.ilabel}/>
          <Text>{this.props.ilabel}</Text>
        </View>
        <View style={styles.desc}>
          <Text style={styles.info}>{this.props.info}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cell:{
      flexDirection:'row',
      borderBottomWidth:1,
      borderColor:'#ccc',
      paddingBottom:8,
      paddingTop:4,
  },
  label:{
    width:52,
    justifyContent:'center',
    alignItems:'center'
  },
  desc:{
    flex:1,
    paddingLeft:10,
  },
  img:{
    width:15,
    height:13
  },
  ilabel:{
    fontSize:14,
  },
  info:{
    fontSize:14,
    lineHeight:26
  }
});
