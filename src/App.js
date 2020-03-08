import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  Header,
  Fab,
  Card,
  CardItem,
  View,
  Button,
  Footer,
  FooterTab,
  Text,
  H2,
  Body,
  Title
} from 'native-base';
import {
  ProgressChart
} from 'react-native-chart-kit';

const data = {
  labels: ["Swim", "Bike", "Run"],
  data: [0.4, 0.6, 0.8]
};

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
        <Header>
          <Body>
            <Title>Overview</Title>
          </Body>
        </Header>
        <View style={{ flex: 1 }}>
          <ProgressChart
            data={data}
            height={220}
            width={220}
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
              }
            }}
            hideLegend={false}
          />

          <H2>Plan Ahead</H2>

          <Card>
            <CardItem header bordered>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem footer bordered>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>

          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{}}
            style={{
              backgroundColor: '#5067FF'
            }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}
          >
            <Icon name="cash" />
            <Button style={{ backgroundColor: '#f48fb1' }}>
              <Icon name="minus" />
            </Button>
            <Button style={{ backgroundColor: '#64dd17' }}>
              <Icon name="plus" />
            </Button>
          </Fab>
        </View>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="compass-outline" />
              <Text>Overview</Text>
            </Button>
            <Button vertical>
              <Icon name="history" />
              <Text>History</Text>
            </Button>
            <Button vertical>
              <Icon name="dots-horizontal" />
              <Text>More</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default App;
