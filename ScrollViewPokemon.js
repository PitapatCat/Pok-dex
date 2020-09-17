import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import Row from './Row';

const ScrollViewPokemon = props => (
    <ScrollView>{props.pokemon.map(pokemon => <Row {...pokemon} />)}</ScrollView>
);

ScrollViewPokemon.propTypes = {
    contacts: PropTypes.array,
}

export default ScrollViewPokemon;