import React, {Component, PropTypes} from 'react';
import {View, Text, TextInput, StyleSheet, Button, Alert, TouchableHighlight, Image} from 'react-native';
import {connect} from 'react-redux';
import TopTabBar from '../components/TopTabBar';
import SideMenu from 'react-native-side-menu';
import Menu from '../components/Menu';
import MenuRight from '../components/MenuRight';
import BottomBar from '../components/BottomBar';
import SwitchPage from './SwitchPage'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leftSideBar: false,
            rightSideBar: false,
            page: this.props.page
        };
        this.returnBack = this.returnBack.bind(this);
        this.updateMenuState = this.updateMenuState.bind(this);
    }

    // getType(o) {
    //     var _t;
    //     return ((_t = typeof(o)) == "object" ? o == null && "null" || Object.prototype.toString.call(o).slice(8, -1) : _t).toLowerCase();
    // }

    shouldComponentUpdate(nextProps, nextState) {

        if (nextProps.isLoggedIn != this.props.isLoggedIn && nextProps.isLoggedIn === false) {
            this.toLogin();
            return false;
        }
        return true;
    }

    toLogin = () => {
        const {router} = this.props;
        router.toLogin();
    }

    toSearch = () => {
        const {router} = this.props;
        router.toSearch();
    }

    returnBack(sideBarId) {
        if (sideBarId == 'left') {
            this.setState({leftSideBar: !this.state.leftSideBar});
        } else if (sideBarId == 'right') {
            this.setState({rightSideBar: !this.state.rightSideBar});
        } else {
            return;
        }
    }

    updateMenuState(isOpen, type) {
        if (type == 'left') {
            this.setState({leftSideBar: isOpen});
        } else if (type == 'right') {
            this.setState({rightSideBar: isOpen});
        }
        return;
    }


    render() {
        const menu = <Menu navigator={navigator} callback={this.returnBack}/>;
        const menuRight = <MenuRight navigator={navigator} callback={this.returnBack}/>

        return (
            // 右滑侧栏

            <SideMenu menu={menuRight} isOpen={this.state.rightSideBar} menuPosition="right"
                      onChange={(isOpen) => this.updateMenuState(isOpen, 'right')}>
                <SideMenu menu={menu} isOpen={this.state.leftSideBar} menuPosition="left"
                          onChange={(isOpen) => this.updateMenuState(isOpen, 'left')}>
                    <View style={{flex: 1, backgroundColor: '#FAFAFA'}}>
                        {/*我写的绿色顶部栏*/}
                        <TopTabBar pageStatus={this.props.page} callback={this.returnBack}/>
                        <View style={{flex: 1, zIndex: 1}}>
                            <SwitchPage pageStatus={this.props.page}/>
                        </View>
                        {/*我写的底部栏*/}
                        <BottomBar  style={{flex: 1, zIndex: 9999}}/>
                    </View>
                </SideMenu>
            </SideMenu>
        );
    }
}

function select(store) {
    return {
        page: store.mainStore.status,
        isLoggedIn: store.userStore.isLoggedIn,
        user: store.userStore.user,
        status: store.userStore.status,
    }
}

export default connect(select)(Main);