import React from "react";
import { Text, View, ScrollView } from "react-native";
import { createAppContainer, SafeAreaView } from "react-navigation";
import { createDrawerNavigator, DrawerActions } from "react-navigation-drawer";
import { Appbar, Drawer, FAB, Portal, Provider, Button } from "react-native-paper";

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
             open={this.state.open}
             icon={this.state.open ? 'close' : 'add'}
             actions={[
               { icon: 'add', label: 'Income', onPress: () => console.log('Pressed add') },
               { icon: 'minus', label: 'Income', onPress: () => console.log('Pressed add') },
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
    );
  }
}

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
