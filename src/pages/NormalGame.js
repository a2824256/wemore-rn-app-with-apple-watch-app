import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Text, Image} from 'react-native';
import {connect} from 'react-redux';
var {width, height} = Dimensions.get('window');
var bw = width - 40;
var bh = height / 2 - 40

class NormalGame extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#f5f5f5'}}>
                <View style={styles.frame_1}>
                    <View style={styles.left_box}></View>
                    <View style={styles.box_1}>
                        <View style={styles.column_box}></View>
                        <View style={styles.team_box}>
                            <View style={styles.top_team_box_1}>
                                <View style={{flex: 1}}/>
                                <Text style={styles.text_style}>A组</Text>
                            </View>
                            <View style={styles.bottom_team_box}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <View style={styles.center_box}>
                                        <View style={{flex: 1}}>
                                            <Image source={{uri: this.props.user.touxiang_url}}
                                                   style={{height: 50, width: 50, borderRadius: 25}}/>
                                        </View>
                                        <View style={{flex: 1}}>
                                            <Text style={{
                                                fontSize: 15,
                                                marginBottom: 8,
                                                alignSelf: 'stretch',
                                                fontWeight: 'bold',
                                                color: '#444444'
                                            }}>{this.props.user.name}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.center_box}>
                                        <View style={{flex: 1}}>
                                            <View style={{
                                                height: 50,
                                                width: 50,
                                                borderRadius: 25,
                                                backgroundColor: '#018d73',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Text style={{
                                                    fontSize: 30,
                                                    marginBottom: 8,
                                                    fontWeight: 'bold',
                                                    color: '#fff'
                                                }}>?</Text>
                                            </View>
                                        </View>
                                        <View style={{flex: 1}}>
                                            <Text style={{
                                                fontSize: 15,
                                                marginBottom: 8,
                                                alignSelf: 'stretch',
                                                fontWeight: 'bold',
                                                color: '#444444'
                                            }}>等待加入</Text>
                                        </View>
                                    </View>
                                    <View style={styles.center_box}>
                                        <View style={{flex: 1}}>
                                            <View style={{
                                                height: 50,
                                                width: 50,
                                                borderRadius: 25,
                                                backgroundColor: '#018d73',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Text style={{
                                                    fontSize: 30,
                                                    marginBottom: 8,
                                                    fontWeight: 'bold',
                                                    color: '#fff'
                                                }}>?</Text>
                                            </View>
                                        </View>
                                        <View style={{flex: 1}}>
                                            <Text style={{
                                                fontSize: 15,
                                                marginBottom: 8,
                                                alignSelf: 'stretch',
                                                fontWeight: 'bold',
                                                color: '#444444'
                                            }}>等待加入</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.column_box}></View>
                    </View>
                    <View style={styles.right_box}></View>
                </View>
                {/*<View style={{height: 0.5, backgroundColor: '#00ffb4'}}/>*/}
                <View style={styles.frame_2}>
                    <View style={styles.left_box}></View>
                    <View style={styles.box_2}>
                        <View style={styles.column_box}></View>
                        <View style={styles.team_box}>
                            <View style={styles.top_team_box_2}>
                                <View style={{flex: 1}}/>
                                <Text style={styles.text_style}>B组</Text>
                                <View style={{flex: 1}}>

                                </View>
                            </View>
                            <View style={styles.bottom_team_box}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <View style={styles.center_box}>
                                        <View style={{flex: 1}}>
                                            <View style={{
                                                height: 50,
                                                width: 50,
                                                borderRadius: 25,
                                                backgroundColor: '#00ab8f',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Text style={{
                                                    fontSize: 30,
                                                    marginBottom: 8,
                                                    fontWeight: 'bold',
                                                    color: '#fff'
                                                }}>?</Text>
                                            </View>
                                        </View>
                                        <View style={{flex: 1}}>
                                            <Text style={{
                                                fontSize: 15,
                                                marginBottom: 8,
                                                alignSelf: 'stretch',
                                                fontWeight: 'bold',
                                                color: '#444444'
                                            }}>等待加入</Text>
                                        </View>
                                    </View>
                                    <View style={styles.center_box}>
                                        <View style={{flex: 1}}>
                                            <View style={{
                                                height: 50,
                                                width: 50,
                                                borderRadius: 25,
                                                backgroundColor: '#00ab8f',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Text style={{
                                                    fontSize: 30,
                                                    marginBottom: 8,
                                                    fontWeight: 'bold',
                                                    color: '#fff'
                                                }}>?</Text>
                                            </View>
                                        </View>
                                        <View style={{flex: 1}}>
                                            <Text style={{
                                                fontSize: 15,
                                                marginBottom: 8,
                                                alignSelf: 'stretch',
                                                fontWeight: 'bold',
                                                color: '#444444'
                                            }}>等待加入</Text>
                                        </View>
                                    </View>
                                    <View style={styles.center_box}>
                                        <View style={{flex: 1}}>
                                            <View style={{
                                                height: 50,
                                                width: 50,
                                                borderRadius: 25,
                                                backgroundColor: '#00ab8f',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Text style={{
                                                    fontSize: 30,
                                                    marginBottom: 8,
                                                    fontWeight: 'bold',
                                                    color: '#fff'
                                                }}>?</Text>
                                            </View>
                                        </View>
                                        <View style={{flex: 1}}>
                                            <Text style={{
                                                fontSize: 15,
                                                marginBottom: 8,
                                                alignSelf: 'stretch',
                                                fontWeight: 'bold',
                                                color: '#444444'
                                            }}>等待加入</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.column_box}></View>
                    </View>
                    <View style={styles.right_box}></View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    frame_1: {
        flex: 1,
        flexDirection: 'row',
    },
    frame_2: {
        flex: 1,
        flexDirection: 'row',
    },
    box_1: {
        flex: 10,
        flexDirection: 'column',
    },
    box_2: {
        flex: 10,
        flexDirection: 'column',
    },
    left_box: {
        flex: 1,
        // backgroundColor: '#ff392b',
    },
    right_box: {
        flex: 1,
        // backgroundColor: '#153fff',
    },
    column_box: {
        flex: 1,
        // backgroundColor: '#00ffb4',
    },
    team_box: {
        flex: 10,
        borderWidth: 3,
        borderColor: '#cccccc',
        borderRadius: 7,
        backgroundColor: '#f9f9f9',
    },
    top_team_box_1: {
        flex: 2,
        backgroundColor: '#018d73',
    },
    top_team_box_2: {
        flex: 2,
        backgroundColor: '#00ab8f',
    },
    bottom_team_box: {
        flex: 8,
    },
    text_style: {
        color: '#fff',
        flex: 3,
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center',
    },
    center_box: {
        flex: 1, flexDirection: 'column', alignItems: 'center', marginTop: 30
    }
});

function select(store) {
    return {
        user: store.userStore.user,
    }
}


export default connect(select)(NormalGame);
