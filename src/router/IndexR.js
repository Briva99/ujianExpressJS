import React from 'react'
import IndexAdd from '../pages/Addusers/IndexAdd'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home/IndexHome'
import DetailKontak from '../pages/DetailUsers/IndexDetail'
import editUser from '../pages/editUsers/IndexEditUsers'

const Stack = createStackNavigator();

const Router=()=> {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}  options={{title :'Home'}}/>
            <Stack.Screen name="IndexAdd" component={IndexAdd}  options={{title :'Tambah User'}}/>
            <Stack.Screen name="DetailKontak" component={DetailKontak}  options={{title :'Detail User'}}/>
            <Stack.Screen name="editUser" component={editUser}  options={{title :'Edit User'}}/>
        </Stack.Navigator>
    )
}

export default Router
