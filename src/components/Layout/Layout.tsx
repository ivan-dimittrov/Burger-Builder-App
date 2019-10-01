import React      from 'react';
import Aux        from '../../hoc/_Aux/_Aux'
import Toolbar    from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import './layout.css'

interface ILayoutState {
    showSideDrawer: boolean
}

interface ILayoutProps {
    children: any
}

class Layout extends React.Component<ILayoutProps,ILayoutState> {

    state = {
        showSideDrawer: false
    };

    public sideDrawerCloseHandler = () => {
        console.log(1212121);
        this.setState({showSideDrawer: false})
    };

    public sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        })
    };

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
                <main className='content'>
                    {this.props.children}
                </main>
            </Aux>)
    }
};
export default Layout;