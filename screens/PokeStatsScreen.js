import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default class PokeStatsScreen extends React.Component {

    render() {
        const { forms } = this.props.route.params;
        const formUrl = forms[0].url;

        const { name } = this.props.route.params;
        const { id } = this.props.route.params;

        const { types } = this.props.route.params;
        let typeList = '';
        for (const type of types) {
            typeList += capitalizeFirstLetter(type.type.name) + ', ';
        }
        typeList = typeList.substring(0, typeList.length - 2);

        const { abilities } = this.props.route.params;

        let abilityList = '';
        for (const ability of abilities) {
            abilityList += capitalizeFirstLetter(ability.ability.name) + ', ';
        }
        abilityList = abilityList.substring(0, abilityList.length - 2);

        console.log(this.props.route.params);
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Text>Name: {capitalizeFirstLetter(name)}</Text>
                <Text>ID: {id}</Text>
                <Text>Type(s): {typeList}</Text>
                <Text>Abilities: {abilityList}</Text>
            </View>
        );
    }
}