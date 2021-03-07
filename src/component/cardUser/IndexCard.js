import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

// const CardKontak= ({id, userItem, navigation, removeData}) => {
    const CardKontak= ({ navigation, removeData}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate('DetailKontak' )}>
        {/* <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate('DetailKontak' , {id:id})}> */}
            <View>
            <Text style={styles.nama}>Username  :</Text>
            <Text style={styles.umur}>Email     : </Text>
            <Text style={styles.umur}>Phone     : </Text>
            <Text style={styles.umur}>Alamat    : </Text>
            {/* <Text style={styles.umur}>   Latitude :{userItem.Latitude}</Text>
            <Text style={styles.umur}>   Longitude :{userItem.Longitude}</Text> */}
            </View>
            <View style={styles.icon}>
                <FontAwesomeIcon icon={faEdit} color={'orange'} size={25} onPress={()=> navigation.navigate('editUser')}/>
                <FontAwesomeIcon icon={faTimes} color={'red'} size={25} onPress={()=> removeData}/>
                {/* <FontAwesomeIcon icon={faEdit} color={'orange'} size={25} onPress={()=> navigation.navigate('editUser' , {id:id})}/>
                <FontAwesomeIcon icon={faTimes} color={'red'} size={25} onPress={()=> removeData(id)}/> */}
            </View>
        </TouchableOpacity>
    )
}

export default CardKontak

const styles = StyleSheet.create({
    container : {
        flexDirection:'row',
        padding:15,
        borderRadius:5,
        backgroundColor: 'white',
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    nama : {
        fontWeight: 'bold',
        fontSize: 16,
    },
    umur : {
        color: 'grey',
        fontSize: 12,
    },
    icon : {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems:'center',
    }
})
