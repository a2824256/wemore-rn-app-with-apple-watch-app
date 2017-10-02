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


class FriendRequestList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            loaded: false,
        };
    }


    accept_friend_request(id) {
        this.props.actions.acceptFsRequest(id);
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
        this.props.actions.fetchReqData(this.props.user.id);
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
                    <TouchableHighlight underlayColor="#fff" onPress={() => {
                        this.accept_friend_request(friends.id)
                    }}>
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
        if (this.props.status == 'loading') {
            return this.renderLoadingView();
        } else if (this.props.status == 'null') {
            return (
                <View style={{flex: 1}}>
                    <View style={{height: 100}}></View>
                    <View style={{justifyContent: 'center', alignItems: 'center',}}><Text>没有请求</Text></View>
                </View>
            )
        } else {
            try {
                // Alert.alert(JSON.stringify(this.props.content));
                if (this.props.content._cachedRowCount > 0) {
                    return (
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <View style={{flex: 1, justifyContent: 'center'}}>
                                <Text style={{textAlign: 'center', color: '#565656', fontSize: 20}}>好友请求</Text>
                            </View>
                            <View style={{height: 0.5, backgroundColor: '#2e2e2e'}}/>
                            <View style={{flex: 9}}>
                                <ListView
                                    dataSource={this.props.content}
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
                            <View style={{justifyContent: 'center', alignItems: 'center',}}><Text>没有请求</Text></View>
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
        user: store.userStore.user,
        status: store.friendReq.type,
        content: store.friendReq.content,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}


export default connect(select, mapDispatchToProps)(FriendRequestList);