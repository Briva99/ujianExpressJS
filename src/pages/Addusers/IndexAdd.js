import React, { Component } from 'react'
import { TouchableOpacity, View, Text, PermissionsAndroid, Platform, Alert, ActivityIndicator,StyleSheet} from 'react-native'
import InputData from '../../component/Inputdata/IndexInput'


export default class Addusers extends Component {
    constructor(props){
        super(props);

        this.state ={
            username:'',
            email:'',
            phone:'',
            alamat:'',
        };
    };
    onInputChangetext = (namaState, value) => {
        this.setState({
            [namaState]: value,
        });
    };
    onSubmit = () => {
        post('', {
            username: username,
            email: email,
            phone: phone,
            address: address,
          })
          .then((res) => {
            console.log(res);
            navigation.navigate('User');
            Alert.alert('Berhasil Diinput');
          })
          .catch((err) => {
            console.log(err);
          });
      };

    }
    
    render() {
        return (
            <View style={styles.pages}>
                <InputData 
                    label='Username'
                    placeholder='Masukkan Username'
                    onChangeText={this.onInputChangetext}
                    namaState="username"
                    value={this.state.username}
                />

                <InputData 
                    label='Email'
                    placeholder='Masukkan email'
                    onChangeText={this.onInputChangetext}
                    namaState="email"
                    value={this.state.email}
                />
                 <InputData 
                    label='Phone'
                    placeholder='Masukkan phone'
                    keyboardType="number-pad"
                    onChangeText={this.onInputChangetext}
                    namaState="phone"
                    value={this.state.phone}
                />
                 <InputData
                    label="Alamat"
                    placeholder="Masukkan Alamat"
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
    text: {
        justifyContent:'center',
        alignItems: 'center',
        marginTop:16
    },
    textKoordinat: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom:5
    }

})