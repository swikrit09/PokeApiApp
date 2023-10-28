// import React from 'react'

import { Modal, View, Image, ScrollView, Pressable, Text, StyleSheet } from "react-native"
import { useGlobleContext } from "../context/Context"

const PokeModal = () => {
    const { isModalVisible, setIsModalVisible, setSelectedItem, selectedItem, getPokemonColor } = useGlobleContext()
    return (
        <Modal
            visible={isModalVisible}
            animationType='slide'
        >
            <ScrollView style={styles.modalScroll}>

                <Pressable onPress={() => {
                    setIsModalVisible(false)
                    setSelectedItem("")
                }}>
                    <Text style={styles.closeTxt}>X</Text>
                    {console.log(selectedItem)}
                </Pressable>

                {/* {console.log(selectedItem[0])} */}

                {selectedItem &&

                    <View style={{
                        alignItems: "center"
                    }} >
                        <Image
                            source={{ uri: selectedItem[0].sprites.other.dream_world.front_default }}
                            resizeMode='contain'
                            style={{ width: 300, height: 300 }}
                        />
                        <Text style={styles.nameTxt}>{selectedItem[0].name}</Text>
                        <Text style={styles.extra}> weight: {selectedItem[0].weight}</Text>
                        <Text style={styles.extra}> height: {selectedItem[0].height}</Text>

                        <View style={{
                            flexDirection: "row"
                            , gap: 6,
                            backgroundColor: getPokemonColor(selectedItem[0].types[0].type.name),
                            margin: 30,
                            padding: 10,
                            borderRadius: 10
                        }}>
                            <Text style={styles.typetxt}> Types:</Text>
                            {
                                selectedItem[0].types.map((item) => (

                                    <Text style={styles.typetxt}> {item.type.name}</Text>
                                ))
                            }
                        </View>

                        <View style={styles.moveBox}>

                            <Text style={{
                                color: "#fff",
                                fontSize: 20,

                            }}>
                                Moves:
                            </Text>
                            <View style={styles.moveFlex}>
                                {/* {console.log(selectedItem[0].moves)} */}
                                {selectedItem[0].moves.length > 10 
                                ? 
                                (selectedItem[0].moves.slice(0, 10).map((item) => (
                                    <Text style={{
                                        color: "#fff"

                                    }}> {item.move.name}</Text>)
                                )) 
                                : 
                                selectedItem[0].moves.map((item) => (
                                    <Text style={{
                                        color: "#fff"
                                    }}> {item.move.name}</Text>
                                ))}
                            </View>
                        </View>

                    </View>
                }

            </ScrollView>


        </Modal>
    )
}

const styles = StyleSheet.create({
    modalScroll: { flex: 1, backgroundColor: "#040D12" },
    closeTxt: {
        fontSize: 40,
        margin: 20,
        backgroundColor: "#183D3D"
        , color: "#fff",
        width: 60,
        aspectRatio: 1 / 1,
        textAlign: "center",
        borderRadius: 10
    },
    nameTxt: {
        fontSize: 70,
        textTransform: "capitalize",
        padding: 20,
        textTransform: 'uppercase',
        fontFamily: 'verdana',
        fontSize: 40,
        fontWeight: '700',
        color: '#f5f5f5',
    },
    extra: {
        fontSize: 20,
        color: "#fff",
        textTransform: "capitalize",
        fontFamily: "Trumbuchet MS"
    },
    typetxt: {
        fontSize: 20,
        color: "#fff",
        textTransform: "capitalize",
        fontFamily: "Trumbuchet MS"
    },
    moveBox: {
        backgroundColor: "#183D3D",
        gap: 10,
        margin: 20,
        padding: 10,
        borderRadius: 10
    },
    moveFlex: { 
    flexDirection: "row", 
    gap: 5, 
    flexWrap: "wrap",
    justifyContent: "center"
 }
})

export default PokeModal