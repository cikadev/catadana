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
    );
  }
}

export default App;
