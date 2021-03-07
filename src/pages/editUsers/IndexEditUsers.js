import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import InputData from '../../component/Inputdata/Index'
// import Geolocation from '@react-native-community/geolocation';
// import { CameraKitCameraScreen } from 'react-native-camera-kit';
// import styles from "./style";
// import Firebase from '../../config/Firebase/Index'


export default class editUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            phone: '',
            alamat: '',
            
        };
    };

    

    onInputChangetext = (namaState, value) => {
        this.setState({
            [namaState]: value,
        });
    };
    onSubmit = () => {
    //     if(this.state.nama && this.state.umur){
    //         const tambahUser = Firebase.database().ref('Kontak/' + this.props.route.params.id);
    //         const kontak ={
    //             nama : this.state.nama,
    //             umur : this.state.umur,
    //             keterangan : this.state.keterangan,
    //             Longitude: this.state.currentLongitude,
    //             Latitude: this.state.currentLatitude
    //         }
    //             tambahUser
    //             .update(kontak)
    //             .then((data)=>{
    //                 Alert.alert('Sukses', 'Data Berhasil Di Update');
    //                 //apabila sukses menyimpan maka akan kembali ke Home
    //                 this.props.navigation.replace('Home');
    //             })
    //             .catch((error)=> {
    //                 console.log("Error :", error)
    //             })

    //     } else {
    //         Alert.alert('Error', 'Nama dan Umur Harus Diisi')
    //     }
       
    };


    render() {
            return (
                <View style={styles.pages}>
                    <InputData
                        label="username"
                        placeholder="Masukkan username"
                        onChangeText={this.onInputChangetext}
                        namaState="username"
                        value={this.state.username}

                    />
                    <InputData
                        label="email"
                        placeholder="Masukkan email"
                        onChangeText={this.onInputChangetext}
                        namaState="email"
                        value={this.state.email}

                    />
                    <InputData
                        label="phone"
                        placeholder="Masukkan phone"
                        keyboardType="number-pad"
                        onChangeText={this.onInputChangetext}
                        namaState="phone"
                        value={this.state.phone}

                    />
                    <InputData
                        label="alamat "
                        placeholder="Masukkan alamat Anda"
                        isTextArea={true}
                        onChangeText={this.onInputChangetext}
                        namaState="alamat"
                        value={this.state.alamat}

                    />
                                       

                    <TouchableOpacity style={styles.tombol} onPress={() => this.onSubmit()}>
                        <Text style={styles.textTombol}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            )
    }
    
}

export default InputData

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        padding: 30
    },
    tombol: {
        backgroundColor: 'skyblue',
        padding: 10,
        borderRadius: 5,
        marginTop: 10

    },
    textTombol: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16
    },
    
    
})


