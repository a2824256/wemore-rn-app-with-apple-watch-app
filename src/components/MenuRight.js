import React, {Component} from 'react';
import {View, TextInput, StyleSheet, Text, TouchableHighlight, Image} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/main';

class MenuRight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: null
        }
    }

    _search(o) {
        this.props.actions.searchContent(o);
        this.props.callback('right');
    }

    render() {
        return (
            <View style={{backgroundColor: '#009999', flex: 1}}>
                <View style={{flex: 2}}>
                    <View style={{flex: 3}}/>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 9}}>
                            <TextInput style={styles.textInput}
                                       placeholder="  输入关键字搜索" underlineColorAndroid='transparent'
                                       placeholderTextColor="#ffffff"
                                       onChangeText={(text) => this.setState({text})}/>
                        </View>
                        <View style={{
                            flex: 1, alignSelf: 'center',
                            justifyContent: 'center',
                        }}>
                            <TouchableHighlight onPress={() => {
                                this._search(this.state.text)
                            }}>
                                <View>
                                    <Image source={require('./img/search.png')} style={{width: 20, height: 20}}/>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={{height: 0.5, backgroundColor: '#fdfdfd'}}/>
                </View>
                <View style={{flex: 8}}>
                    <View style={{flexDirection: 'row', flex: 1}}>
                        <View style={{flex: 1}}/>
                        <View style={{flex: 9}}>
                            <View style={styles.box}><Text style={styles.text}>热门搜索</Text></View>
                            <View style={styles.box}><Text style={styles.text_2}>最强战队</Text></View>
                            <View style={styles.box}><Text style={styles.text_2}>海底捞</Text></View>
                            <View style={styles.box}><Text style={styles.text_2}>生活模式抢城堡</Text></View>
                            <View style={styles.box}><Text style={styles.text_2}>职业战攻略</Text></View>
                            <View style={styles.box}><Text style={styles.text_2}>wemore深圳活动</Text></View>
                            <View style={styles.box}><Text style={styles.text_2}>......</Text></View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    textInput: {
        height: 30,
        backgroundColor: '#00bab0',
        borderWidth: 1,
        borderColor: '#00e2cd',
        // borderRightColor:'#00bab0',
        marginLeft: 5,
        marginRight: 5
    },
    text: {
        color: '#fff',
        fontSize: 30
    },
    text_2: {
        color: '#e1e1e1',
    },
    box: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        marginTop: 20,
        marginLeft: 5,
        marginBottom: 5,
    }
});

function select(store) {
    return {
        content: store.mainStore.content,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

export default connect(select, mapDispatchToProps)(MenuRight);