import React from 'react';
import { SectionList, Text} from 'react-native';
import PropTypes from 'prop-types';

import Row from './Row';

const renderSectionHeader = ({section}) => <Text>{section.title}</Text>;

// TODO: not sure what SectionListPokemon is doing
const SectionListPokemon = props => {
    /*  see Nicholas messenger to understand in greater detail
        obj = {
            a: [pokemon0, pokemon1],
            b: [pokemon2, pokemon3, pokemon4],
            c: [],
            d: [pokemon5],
            ...
        }
    */

    //console.log('props.pokemon', props.pokemon);

    const pokemonByLetter = props.pokemon.reduce((obj, pokemon) => {
        const firstLetter = pokemon.name[0].toUpperCase();
        return {
            ...obj,
            [firstLetter]: [...(obj[firstLetter] || []), pokemon],
        }
    }, {});

    //console.log('pokemonByLetter', pokemonByLetter);

    // what does sections look like in code?
    // Object.keys() method returns array of given object's own enumerable property names/keys
        // (e.g. returns Array ['a', 'b', 'c', ...])
    // sections points to Array of sorted Objects by letter:
        // [{ data: [pokemon0], title: a }, { data: [pokemon1], title: b }, ... ]
    const sections = Object.keys(pokemonByLetter)
        .sort()
        .map(letter => ({
            data: pokemonByLetter[letter],
            title: letter,
        })
    );

    //console.log('sections', sections);

    // https://reactnative.dev/docs/sectionlist
    return (
        <SectionList
            sections={sections}
            keyExtractor={item => item.name}
            renderItem={({item}) => <Row {...item} onSelectPokemon={props.onSelectPokemon} />}
            renderSectionHeader={renderSectionHeader}
        />
    );
}

SectionListPokemon.propTypes = {
    pokemon: PropTypes.array,
};

export default SectionListPokemon;