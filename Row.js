import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const styles = StyleSheet.create({
    row: {padding: 20},
});

const Row = props => (
    <TouchableOpacity style={styles.row} onPress={() => props.onSelectPokemon(props)}>
        <Text>{capitalizeFirstLetter(props.name)}</Text>
    </TouchableOpacity>
);

Row.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number,
};

export default Row;