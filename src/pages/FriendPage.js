'use strict';

import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ListView,
    Alert
} from 'react-native';
import {connect} from 'react-redux';
import * as URL from '../configs/urlManage';


class FriendPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData() {
        let url = URL.USERINFO_URL + '&acc=' + this.props.user.acc
        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.user_info.friends),
                    loaded: true,
                });
            });
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
        }
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderFriends}
                style={styles.listView}
            />
        )
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
        borderRadius:25,
        marginLeft: 30,
        marginBottom:10,
        marginTop: 10
    },
    listView: {
        paddingTop: 20,
    },
});

function select(store) {
    return {
        user: store.userStore.user
    }
}

export default connect(select)(FriendPage);