import { useContext, useEffect, useState } from 'react'
import { ScrollView, View, Text, Image, Pressable, Modal, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native'
import { useGlobleContext } from '../context/Context'

import PokeModal from './PokeModal'
import PokeCard from './PokeCard'
import ControlButtons from './ControlButtons'


const PokeHome = () => {
    const { pokemons, isLoading} = useGlobleContext()
    return (
        <>
            <PokeModal />
            <View style={styles.container}>
                {/* {console.log(pokemons)} */}
                {pokemons && pokemons.length !== 0 ?
                    pokemons?.map((pokemon) => (

                        <PokeCard pokemon={pokemon} />

                    )) : isLoading ? (
                        <ActivityIndicator size={"large"} />

                    ) : (
                        <Text style={{
                            color: "#fff"
                        }}>No Pokemon Found</Text>
                    )

                }
            </View>

            <ControlButtons />

        </>
    )
}
const styles=StyleSheet.create({
    container:{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 20,
        padding: 20
    }
})

export default PokeHome;
