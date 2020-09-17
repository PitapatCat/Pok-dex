import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

import SectionListPokemon from '../SectionListPokemon';
import { fetchPokemon } from '../PokeAPI';

export default class PokeListScreen extends React.Component {

    state = {
        pokemon: null,
        showPokemon: true,
    }

    componentDidMount() {
        this.getPokemon();
    }

    getPokemon = async () => {
        const results = await fetchPokemon();
        this.setState({pokemon: results});
        //console.log('PokeListScreen pokemon:', this.state.pokemon);
    }

    togglePokemon = () => {
        this.setState(prevState => ({showPokemon: !prevState.showPokemon}))
    }

    handleSelectPokemon = pokemon => {
        this.props.navigation.navigate('PokeStats', pokemon);
    }

    render() {
        //console.log(this.state.pokemon);
        if (this.state.pokemon != null) {
            //console.log('case where this.state.pokemon is not null');
            // {this.state. ...}: acts as an if statement
            return (
                <View style={styles.container}>
                    {this.state.showPokemon && (
                        <SectionListPokemon
                            pokemon={this.state.pokemon}
                            onSelectPokemon={this.handleSelectPokemon}
                        />
                    )}
                </View>
            );
        } else {
            //console.log('case where this.state.pokemon is null');
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Loading PokeData...</Text>
                </View>
            );
        }
    }
}

// toggle/hide/show contacts button:
// <Button title='toggle pokemon' onPress={this.togglePokemon} />

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});