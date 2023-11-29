
import { View, Text, ActivityIndicator, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { useGlobleContext } from '../context/Context'

import PokeModal from './PokeModal'
import PokeCard from './PokeCard'
import ControlButtons from './ControlButtons'


const PokeHome = () => {
    const { pokemons, isLoading, searchTerm, setSearchTerm, getSearchPokemon,errMsg } = useGlobleContext()
    return (
        <>
            <PokeModal />
            <View style={styles.searchContainer}>

                <TextInput style={styles.search}
                    value={searchTerm}
                    onChangeText={setSearchTerm}
                    placeholder='Search Pokemon'
                    autoCorrect={false}
                    autoCapitalize="none"
                // secureTextEntry
                // keyboardType='numeric'
                // multiline
                />
                <TouchableOpacity style={styles.searchBtn} onPress={getSearchPokemon}>
                    <Text style={styles.searchBtnTxt}>Search</Text>
                </TouchableOpacity>
            </View>
                {errMsg && <Text style={{color:"#fff"}}>{errMsg}</Text>}

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
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 20,
        padding: 20
    },
    searchContainer: {
        flexDirection: "row",
        gap: 5
    },
    search: {
        height: 40,
        width: 200,
        padding: 8,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#fff",
        color: "#fff",
        borderRadius: 4
    },
    searchBtn: {
        padding: 8,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 4,
        backgroundColor: "rgb(24, 61, 61)",
        justifyContent: "center"
    },
    searchBtnTxt: {
        color: "#fff",
        fontSize: 10
    },
})

export default PokeHome;
