import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

export default class menber extends Component {
  constructor(props) {
      super(props);
      let ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
      this.state = {
        msg:'this is a text test',
        dataSource:ds,
      }
  }
  componentDidMount() {
    let iData = [
      {
        title:'购买旅游产品1',
        time:'2017-08-30',
        total:654
      },
      {
        title:'购买旅游产品2',
        time:'2017-07-25',
        total:1000
      },
      {
        title:'购买旅游产品3',
        time:'2017-08-30',
        total:695
      }
    ]
    this.setState({
      msg:'haha',
      msg2:'农',
      dataSource:this.state.dataSource.cloneWithRows(iData),
    })
  }
  _renderRow(item) {
    return(
      <View>
        <View>
          <Text>{item.title}</Text>
          <Text>{item.time}</Text>
        </View>
        <View>
          <Text>{item.total}</Text>
        </View>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.msg}</Text>
        <Text>{this.state.msg2}</Text>
          <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
