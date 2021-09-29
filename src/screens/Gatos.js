import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const DATA = [
    {
        id: '1',
        raza: 'Gato snowshoe',
        pais: 'América',
        imagen: require('../img/gatosnowshoe.jpg'),
    },
    {
        id: '2',
        raza: 'Gato británico de pelo largo',
        pais: 'Reino Unido',
        imagen: require('../img/gatobritanico.jpg'),
    },
    {
        id: '3',
        raza: 'Chantilly-Tiffany',
        pais: 'Estados Unidos',
        imagen: require('../img/chantilly.jpg'),
    },
    {
        id: '4',
        raza: 'Gato angora turco',
        pais: 'Asía, Europa y Turquía',
        imagen: require('../img/angoraturco.jpg'),
    },
    {
        id: '5',
        raza: 'Gato Habana',
        pais: 'Europa, Reino Unido',
        imagen: require('../img/gatohabana.jpg'),
    },
    {
        id: '6',
        raza: 'Gato scottish fold',
        pais: 'Europa, Reino Unido',
        imagen: require('../img/scottish.jpg'),
    },
    {
        id: '7',
        raza: 'Savannah',
        pais: 'América, Estados Unidos',
        imagen: require('../img/Savannah.jpg'),
    },
    {
        id: '8',
        raza: 'Gato ural rex',
        pais: 'Europa, Rusia',
        imagen: require('../img/rex.jpg'),
    },
];

export default function Perros() {

    return (
        <ScrollView>
            {
                DATA.map((u, i) => {
                    return (
                        <View key={i} style={estilos.contenedor}>



                            <View style={estilos.carta}>
                                <Image resizeMode="cover" source={u.imagen} style={estilos.imagen} />

                                <View style={estilos.cont2}>
                                    <Text style={estilos.desc}>{u.raza}</Text>
                                    <Text style={estilos.desc2}>{u.pais}</Text>
                                </View>
                            </View>



                        </View>

                    );
                })
            }
        </ScrollView>
    );

}

const estilos = StyleSheet.create({
    contenedor: {
        marginTop: 15,
        marginBottom: 15,


    },

    carta: {



        justifyContent: "center",
        flexDirection: "row",

    },

    imagen: {
        width: 110,
        height: 110,

        flex: 1,
        marginLeft: 5,
        marginRight: 5,

    },
    titulo: {
        textAlign: 'center',

    },
    desc: {

        textAlign: 'justify',
        fontWeight: 'bold'
    },
    cont2: {
        flex: 3,
        justifyContent: 'space-around',
    },
    desc2: {
        color: 'gray',
        fontStyle: 'italic',
        textAlign: 'justify',
    }
});
