

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  List,
  Provider as PaperProvider,
} from 'react-native-paper';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  // Define `title` and `content`
  const title = "Sample Title";
  const content = "This is some sample content.";

  return (
    <TouchableOpacity
      onPress={() =>
        navigation?.push('Details', {
          title,
          content,
        })
      }
    >
      <Card>
        <Card.Content>
          <Title>{title}</Title>
          <Paragraph>{content}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const DetailsScreen = (props) => {
  // Retrieve `title` and `content` from navigation params
  const { title, content } = props?.route?.params || {};
  
  return (
    <List.Section>
      <List.Subheader>{title}</List.Subheader>
      <List.Item title={content} />
    </List.Section>
  );
};

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}


// import 'react-native-gesture-handler';
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Button } from 'react-native-paper';
// import CustomNavigationBar from './MaterialUi/CustomNavigationBar';
// import { PaperProvider } from 'react-native-paper';
// import MyTabs from './MaterialUi/MyTabs';


// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <PaperProvider>
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//           header: (props) => <CustomNavigationBar {...props} />,
//         }}>
//         <Stack.Screen name="Home" component={MyTabs} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>

//     </NavigationContainer>
//     </PaperProvider>
//   );
// }

// function HomeScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text>Home Screen</Text>
//       <Button mode="contained" onPress={() => navigation.navigate('Details')}>
//         Go to details
//       </Button>
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View style={styles.container}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// Tabbar with paper ui


// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { Provider as PaperProvider } from 'react-native-paper';
// import MyTabs from './MaterialUi/MyTabs';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

// const App = () => {
//   return (
//      <SafeAreaProvider>
//     <PaperProvider>
//       <NavigationContainer>
//         <MyTabs />
//       </NavigationContainer>
//     </PaperProvider>
//     </SafeAreaProvider>
//   );
// };

// export default App;

