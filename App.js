<<<<<<< HEAD
import React from "react";
import { Text, View, ScrollView } from "react-native";
import { createAppContainer, SafeAreaView } from "react-navigation";
import { createDrawerNavigator, DrawerActions } from "react-navigation-drawer";
import { Appbar, Drawer, FAB, Portal, Provider, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class AddItem extends React.Component {
  state = {
    open: false,
  };

  render() {
    return (
      <Provider>
         <Portal>
           <FAB.Group
             style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
             }}
             open= {this.state.open}
             icon={ this.state.open ? 'close' : 'add' }
             actions={[
               { icon: 'add', label: 'Income', onPress: () => console.log('Pressed add') },
               { icon: (props) => <Icon name="minus" {...props} />, label: 'Outcome', onPress: () => console.log('Pressed add') },
             ]}
             onStateChange={({ open }) => this.setState({ open })}
             onPress={() => {
               if (this.state.open) {
                 // do something if the speed dial is open
               }
             }}
           />
          </Portal>
       </Provider>
    );
  }
}

class First extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View>
          <Appbar.Header>
            <Appbar.Action
              icon="menu"
              onPress={() =>
                this.props.navigation.dispatch(DrawerActions.toggleDrawer())
              }
            />
            <Appbar.Content title="First Page" />
          </Appbar.Header>
        </View>
        <ScrollView>
          <Text>First Page</Text>
        </ScrollView>
        <AddItem />
      </View>
    );
  }
}

class Second extends React.Component {
  render() {
    return (
      <View>
        <Appbar.Header>
          <Appbar.Action
            icon="menu"
            onPress={() =>
              this.props.navigation.dispatch(DrawerActions.toggleDrawer())
            }
          />
          <Appbar.Content title="Second Page" />
        </Appbar.Header>
        <Text>Second Page</Text>
      </View>
=======
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Header, Fab, View, Button } from 'native-base';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <Container>
        <Header />
        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}
          >
            <Icon name="plus" />
            <Button style={{ backgroundColor: '#3B5998' }}>
                <Icon name="facebook-box" />
            </Button>
          </Fab>
        </View>
      </Container>
>>>>>>> Restarting the project and alter the UI using NativeBase
    );
  }
}

<<<<<<< HEAD
const Menu = createDrawerNavigator(
  {
    First: { screen: First },
    Second: { screen: Second }
  },
  {
    contentComponent: props => (
      <ScrollView>
        <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
          <Drawer.Item
            label="First Page"
            active="true"
            onPress={() => props.navigation.navigate("First")}
          />
          <Drawer.Item
            label="Second Page"
            onPress={() => props.navigation.navigate("Second")}
          />
        </SafeAreaView>
      </ScrollView>
    )
  }
);

const AppNav = createAppContainer(Menu);

export default class App extends React.Component {
  render() {
    return <AppNav />;
  }
}
=======
export default App;
>>>>>>> Restarting the project and alter the UI using NativeBase
