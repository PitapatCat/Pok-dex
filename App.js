import React, { createContext } from 'react';
// import react-native
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
// import navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import screens
import PokeListScreen from './screens/PokeListScreen';
import PokeStatsScreen from './screens/PokeStatsScreen';
import { fetchPokemon } from './PokeAPI';

/*
	:
	- at least one 'StackNavigator'
	- search screen allowing users to search for movies
		- should show more than 10 results exist
	- there should be a screen that shows additional info about a selected movie
	- let the home page be a list of pokemon names sorted alphabetically
*/

// /*  : Are the parameters of the stack navigator still the same?
// const Stack = createStackNavigator(
//     {
//         PokeList: { screen: PokeListScreen },
//         PokeStats: { screen: PokeStatsScreen },
//     },
//     {
//         initialRouteName: 'PokeList'
//     },
// );
// */

// const AppContext = createContext();

// class AppProvider extends Component {
//     state = {
//         name: '',
//     }
//     render() {
//         const { children } = this.props;
//         return (
//             <AppContext.Provider
//                 value={{
//                     state: this.state,
//                     changeName
//                 }}
//         );
//     }
// }

function PokeList() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>PokeList</Text>
        </View>
    );
}

function PokeStats() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>>
            <Text>PokeStats</Text>
        </View>
    );
}

const Stack = createStackNavigator();

export default class App extends React.Component {
    // state = {
    //     pokemon: null,
    // }

    // componentDidMount() {
    //     this.getPokemon();
    // }

    // getPokemon = async () => {
    //     const results = await fetchPokemon();
    //     this.setState({pokemon: results});
    //     console.log('after fetchPokemon:');
    //     console.log('updated results', results);
    // }


    // don't need function keyword in function

    render() {
    	return (
    		<NavigationContainer>
    			<Stack.Navigator initialRouteName='PokeList'>
    				<Stack.Screen name='PokeList' component={PokeListScreen} />
    				<Stack.Screen name='PokeStats' component={PokeStatsScreen} />
    			</Stack.Navigator>
    		</NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

// navigator: component that implements navigation pattern (e.g. tabs, stack navigator)
	// each navigator has one or more route
	// route: a navigator is parent of route, route is child of navigator
// each route must have a name and screen component
	// name is unique across the app
	// the screen component is React component rendered when route is active
	// screen component can be another navigator

// createStackNavigator is function returning an object containing 2 properties: Screen and Navigator
	// both Screen and Navigator are React components used for configuring the navigator
	// Navigator should contain Screen elements as its children to define configuration for routes
// NavigationContainer is a component which manages our navigation tree and contains the navigation state
	// this component must wrap all navigators structure
	// usually render this component at root of app, which is usually the component exported from App.js
// only required configuration for screen (line 21) is the name and component props
// here, the Home route corresponds to the HomeScreen component
	// Details route corresponds to the DetailsScreen component

// component prop accepts component, not render function
	// don't pass inline function, or your component will unmount and remount losing all state when parent component re-render
// if want to specify same options for all screens in navigator, can pass screenOptions prop to navigator

// 2 different ways to use react native: 1. use class structure 2. use function structure

/*
Context is designed to share data that can be considered 'global' for a tree of React components, such
as the current authenticated user, theme, or preferred language. For example, in the code below we manually
thread through a 'theme' prop in order to style the button component.

Using context, we can avoid passing props through intermediate events

*/