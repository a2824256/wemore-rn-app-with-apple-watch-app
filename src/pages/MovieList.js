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

export const PLAY = require('../components/img/play.png');


class MovieList extends Component {
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
                    dataSource: this.state.dataSource.cloneWithRows(responseData.user_info.recent_watch),
                    loaded: true,
                });
            });
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <View style={{height:100}}></View>
                <Text style={{color:'#4b4b4b'}}>
                    Loading...
                </Text>
            </View>
        );
    }

    componentDidMount() {
        this.fetchData();
    }

    renderMovies(movie) {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: movie.pic_url}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <View style={{marginLeft:30}}><Text style={styles.name}>{movie.name}</Text></View>
                    <View style={{height:10}}/>
                    <View style={{marginLeft:30,flexDirection: 'row',alignItems: 'center'}}>
                        <View style={{flex:1,flexDirection: 'row',alignItems: 'center'}}>
                            <Text style={styles.info}>{movie.content}</Text>
                        </View>
                    </View>
                </View>
                <Image source={PLAY} style={{height:40,width:40,marginRight:20}} />
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
                renderRow={this.renderMovies}
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
        fontSize: 20,
        marginBottom: 8,
        alignSelf: 'stretch',
        fontWeight: 'bold',
        color: '#444444'
    },
    info: {
        // fontSize: 30,
        color: '#707070',
    },
    thumbnail: {
        width: 80,
        height: 80,
        marginLeft: 10,
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

export default connect(select)(MovieList);