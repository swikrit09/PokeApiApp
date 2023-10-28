// import React from 'react'
import { useGlobleContext } from "../context/Context"
import { Pressable, Image, Text, StyleSheet } from "react-native"

const PokeCard = ({ pokemon }) => {
    const { getPokemonColor, cardPress } = useGlobleContext()
    return (
        <Pressable key={pokemon.id} style={[styles.card, { backgroundColor: getPokemonColor(pokemon.types[0].type.name), }]} onPress={() => cardPress(pokemon)}>

            <Image
                source={{ uri: pokemon.sprites.other.dream_world.front_default }}
                resizeMode='contain'
                style={{ width: 120, height: 120 }}
            />
            <Text style={styles.nameTxt}>{pokemon.name}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#183D3D",

        padding: 20,
        borderRadius: 10,
        gap: 6
    },
    nameTxt: {
        fontSize: 20,
        textAlign: "center",
        textTransform: "capitalize",
        color: "#fff"
    }

})

export default PokeCard