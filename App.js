import * as React from 'react';
import { Text, View, Button, Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import HomePage from './components/home/HomePage';
import ProfilePage from './components/profile/ProfilePage';
import LoginPage from './components/login/LoginPage';
import WelcomePage from './components/login/WelcomePage';
import EventsPage from './components/events/EventsPage';
import DiscoverPage from './components/discover/DiscoverPage';
import ChatPage from './components/home/chat/ChatPage';
import AddAnnouncement from './components/home/AddAnnouncement';
import SignupPage from './components/login/SignupPage';

function Chores() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chores Screen!</Text>
    </View>
  );
}

function Signup() {
  return (
    <View>
      <Text>Sign-Up</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
    <Stack.Navigator 
      style={styles.nav}
      initialRouteName="Welcome"
      screenOptions={{
        headerStyle: {
        backgroundColor: '#0CA789',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 32
      },
      headerTintColor: '#fff',
      }}>
      <Stack.Screen name="Welcome" component={WelcomePage} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Signup" component={SignupPage} />
      <Stack.Screen name="Main" 
      component={MyTabs} 
      options={{headerShown: false}}/>
      <Stack.Screen name="Chat" component={ChatPage} />
      <Stack.Screen name="AddAnnouncement"
      component={AddAnnouncement} 
      options={{headerTitle: 'Add'}}/>
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      style={styles.nav}
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#0CA789',
        headerStyle: {
          backgroundColor: '#0CA789',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 32
        },
        headerTintColor: '#fff',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={({navigation}) => ({
          title: "myRoommies",
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerRight: () => (
            <Pressable
            onPress={() => navigation.navigate("Chat")}
            style={{marginRight: 20}}>
              <MaterialCommunityIcons name="chat" size={30} color="white" />
            </Pressable>
          ),
          headerLeft: () => (
            <Pressable
            onPress={() => navigation.navigate("AddAnnouncement")}
            style={{marginLeft: 20}}>
              <MaterialCommunityIcons name="plus" size={30} color="white" />
            </Pressable>
          )
        })}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverPage}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventsPage}
        options={{
          tabBarLabel: 'Events',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chores"
        component={Chores}
        options={{
          tabBarLabel: 'Chores',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  nav: {
    flex: 1
  }
});

export default function App() {
  return (
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
  );
}

// import { NavigationContainer } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// function HomeScreen() {
//   return(
//   <View style={styles.container}>
//     <Text>Open up App.js to start working on your app!</Text>
//     <StatusBar style="auto" />
//     <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//   </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
