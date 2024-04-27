import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import Alterar from './Alterar';
import Cadastrar from './Cadastrar';

const Stack = createStackNavigator();

export default function Rotas(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Alterar" component={Alterar} />
            <Stack.Screen name="Cadastrar" component={Cadastrar} />
        </Stack.Navigator>
    );
}