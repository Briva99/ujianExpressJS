import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity } from 'react-native'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.title}>Daftar Laporan</Text>
                <View style={styles.garis} />
            </View>

            <View style={styles.wrapperButton}>
                <TouchableOpacity style={styles.btnTambah} onPress={() => this.props.navigation.navigate('Addusers')}>
                    <FontAwesomeIcon icon={faPlus} size={20} color={'white'} />
                </TouchableOpacity>
            </View>

            {/* <View style={styles.wrapperButtonCheckin}>
                <TouchableOpacity style={styles.btnTambahcek} onPress={() => this.props.navigation.navigate('cekIn')}>
                    <FontAwesomeIcon icon={faPlus} size={40} color={'white'} />
                </TouchableOpacity>
            </View> */}
        </View>
        )
    }
}

const styles = StyleSheet.create({
    page : {
        flex : 1
    },
    header:{
        paddingHorizontal: 30,
        paddingTop: 30,
    },
    title : {
        fontSize: 20,
        fontWeight: 'bold'
    },
    garis: {
        borderWidth: 1,
        marginTop: 10,
    },
    listUser:{
        paddingHorizontal : 30,
        marginTop : 20,
    },
    wrapperButton : {
        flex : 1,
        position : "absolute",
        top: 0,
        right: 0,
        margin:30
    },
    wrapperButtonCheckin : {
        flex : 1,
        position : "absolute",
        top: 0,
        left: 0,
        margin:30
    },
    btnTambah: {
        padding: 20,
        backgroundColor: 'skyblue',
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    btnTambahcek: {
        padding: 20,
        backgroundColor: 'skyblue',
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    }
})
