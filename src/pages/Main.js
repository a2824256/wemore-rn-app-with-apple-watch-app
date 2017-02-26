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
        };
    }

    // getType(o) {
    //     var _t;
    //     return ((_t = typeof(o)) == "object" ? o == null && "null" || Object.prototype.toString.call(o).slice(8, -1) : _t).toLowerCase();
    // }

    returnBack(sideBarId) {
        if (sideBarId == 'left') {
            this.setState({leftSideBar: true, rightSideBar: false});
        } else if (sideBarId == 'right') {
            this.setState({rightSideBar: true, leftSideBar: false});
        } else {
            return;
        }
    }


    render() {
        const menu = <Menu navigator={navigator}/>;
        const menuRight = <MenuRight navigator={navigator}/>

        return (
            // 右滑侧栏
            <SideMenu menu={menu} isOpen={this.props.left} menuPosition="left">
                {/*//左滑侧栏*/}
                <SideMenu menu={menuRight} isOpen={this.props.right} menuPosition="right">
                    <View style={{flex:1,backgroundColor:'#FAFAFA'}}>
                        {/*我写的绿色顶部栏*/}
                        <TopTabBar  pageStatus={this.props.page}/>
                        <SwitchPage pageStatus={this.props.page}/>
                        {/*我写的底部栏*/}
                        <BottomBar/>
                    </View>
                </SideMenu>
            </SideMenu>
        );
    }
}

function select(store) {
    return {
        page: store.mainStore.status,
        left: store.sideBarStore.left,
        right: store.sideBarStore.right,
    }
}

export default connect(select)(Main);