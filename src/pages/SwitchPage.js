import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {connect} from 'react-redux';
import Game from './Game';
import Mine from './Mine';
import Life from './Life';
import WorldGame from './WorldGame';
import Building from './Building';
import NormalGame from './NormalGame';
import Sucker from './Sucker';
import Props from './PropsShop';
import UserInfo from './UserInfo';
import MyAccount from './MyAccount';
import MyMsg from './MyMsg';
import Friend from './Friend';
import Setting from './Setting';
import Search from './Search';
import TextPage from './TextPage';
import Offical from './OfficalInfo';
import AddFriends from './AddFriends';
import FriendRequest from './FriendRequestList';

class SwitchPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        switch (this.props.page) {
            case 'life':
                return (
                    <View style={{flex: 1}}>
                        <Life/>
                    </View>
                );
                break;
            case 'mine':
                return (
                    <View style={{flex: 1}}>
                        <Mine/>
                    </View>
                );
                break;
            case 'world-game':
                return (
                    <View style={{flex: 1}}>
                        <WorldGame/>
                    </View>
                );
            case 'building':
                return (
                    <Building/>
                );
            case 'normal':
                return (
                    <NormalGame/>
                );
            case 'sucker':
                return (
                    <Sucker/>
                );
            case 'props':
                return (
                    <Props/>
                );
            case 'userinfo':
                return (
                    <UserInfo/>
                );
            case 'myaccount':
                return (
                    <MyAccount/>
                );
            case 'mymsg':
                return (
                    <MyMsg/>
                );
            case 'friend':
                return (
                    <Friend/>
                );
            case 'setting':
                return (
                    <Setting/>
                );
            case 'search':
                return (
                    <Search/>
                );
            case 'textpage':
                return (
                    <TextPage/>
                );
            case 'offical':
                return (
                    <Offical/>
                );
            case 'add-friends':
                return (
                    <AddFriends/>
                );
            case 'friend-request':
                return(
                    <FriendRequest/>
                );
            default:
                return (
                    <View style={{flex: 1}}>
                        <Game/>
                    </View>
                );
                break;
        }
    }
}


function select(store) {
    return {
        page: store.mainStore.status,
    }
}

export default connect(select)(SwitchPage);