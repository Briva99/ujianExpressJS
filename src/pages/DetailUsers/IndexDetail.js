import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
// import Firebase from '../../config/Firebase/Index'

export default class DetailKontak extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             kontak :{},
        }
    }

    // componentDidMount() {
    //     Firebase.database()
    //         .ref('Kontak/' + this.props.route.params.id)
    //         .once('value', (querySnapShot) => {
    //             let data = querySnapShot.val() ? querySnapShot.val() : {};
    //             let userItem = { ...data };

    //             this.setState({
    //                 kontak: userItem,
                    
    //             })
    //         })
    // }
    
    render() {
        const {kontak} = this.state
        return (
            <View style ={styles.pages}>
                <Text>Username : </Text>
                <Text style= {styles.text}>{kontak.username}</Text>

                <Text>Email : </Text>
                <Text style= {styles.text}>{kontak.email}</Text>

                <Text>Phone : </Text>
                <Text style= {styles.text}>{kontak.phone}</Text>

                <Text>Alamat : </Text>
                <Text style= {styles.text}>{kontak.alamat}</Text>


            </View>
        )
    }
}

const styles = StyleSheet.create({

    pages : {
        margin: 30,
        padding: 20,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    text : {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    }
})
