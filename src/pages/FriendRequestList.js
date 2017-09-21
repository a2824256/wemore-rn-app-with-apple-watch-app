'use strict';

import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ListView,
    Alert,
    TouchableHighlight
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/main';
import * as URL from '../configs/urlManage';


class FriendRequestList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
        // this._sendRequest = this._sendRequest.bind(this);
    }


    renderLoadingView() {
        return (
            <View style={styles.container}>
                <View style={{height: 100}}></View>
                <Text style={{color: '#4b4b4b'}}>
                    Loading...
                </Text>
            </View>
        );
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        let url = URL.FRIEND_REQUEST_LIST + '&id=' + this.props.user.id
        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.list),
                    loaded: true,
                });
            });
    }

    renderFriends(friends) {
        return (
            <View>
                <View style={styles.container}>
                    <Image
                        source={{uri: friends.touxiang_url}}
                        style={styles.thumbnail}
                    />
                    <View style={styles.rightContainer}>
                        <View style={{marginLeft: 30}}><Text style={styles.name}>{friends.name}</Text></View>
                    </View>
                    <TouchableHighlight  underlayColor="#fff">
                        <View style={styles.add_friend_button}>
                            <Text style={{color: '#fff'}}>接受请求</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View>
                    <View style={{height: 0.5, backgroundColor: '#959595'}}/>
                </View>
            </View>
        );
    }

    render() {

        if (!this.state.loaded) {
            return this.renderLoadingView();
        } else {
            try {
                if (this.state.dataSource._cachedRowCount > 0) {
                    return (
                        <View style={{flex:1,flexDirection:'column'}}>
                            <View style={{flex:1,justifyContent: 'center'}}>
                                <Text style={{textAlign:'center',color:'#565656',fontSize:20}}>好友请求</Text>
                            </View>
                            <View style={{height: 0.5, backgroundColor: '#2e2e2e'}}/>
                            <View style={{flex:9}}>
                                <ListView
                                    dataSource={this.state.dataSource}
                                    renderRow={this.renderFriends.bind(this)}
                                    style={styles.listView}
                                />
                            </View>
                        </View>
                    );
                } else {
                    return (
                        <View style={{flex: 1}}>
                            <View style={{height: 100}}></View>
                            <View style={{justifyContent: 'center', alignItems: 'center',}}><Text>没有找到相关用户</Text></View>
                        </View>
                    )
                }
            } catch (e) {
                Alert.alert('error');
                return (
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                        <Text>{e.name}</Text>
                        <Text>{e.message}</Text>
                    </View>
                );
            }
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightContainer: {
        flex: 1,
    },
    name: {
        fontSize: 15,
        marginBottom: 8,
        alignSelf: 'stretch',
        fontWeight: 'bold',
        color: '#444444'
    },
    info: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#00ab8f',
    },
    thumbnail: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 30,
        marginBottom: 10,
        marginTop: 10
    },
    listView: {
        // flex: 9,
    },
    add_friend_button: {
        borderColor: '#00ab8f',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#00ab8f',
        height: 30,
        justifyContent: 'center',
        marginRight: 10
    }
});

function select(store) {
    return {
        page: store.mainStore.status,
        user: store.userStore.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

// <ListView
//    dataSource={this.state.dataSource}
//    renderRow={this.renderFriends}
//    style={styles.listView}
// />

export default connect(select, mapDispatchToProps)(FriendRequestList);