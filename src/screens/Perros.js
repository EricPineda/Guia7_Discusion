import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const DATA = [
    {
        id: '1',
        raza: 'Basset Hound',
        pais: 'Francia',
        imagen: require('../img/basset.jpg'),
    },
    {
        id: '2',
        raza: 'Alaskan Malamute',
        pais: 'Alaska, EEUU',
        imagen: require('../img/alaskanmalamute.jpg'),
    },
    {
        id: '3',
        raza: 'Spaniel Bretón',
        pais: 'Francia',
        imagen: require('../img/spanielbreton.jpg'),
    },
    {
        id: '4',
        raza: 'Bulldog Inglés',
        pais: 'Reino Unido',
        imagen: require('../img/bulldog.jpg'),
    },
    {
        id: '5',
        raza: 'Mastín Español',
        pais: 'España (Extremadura)',
        imagen: require('../img/mastinespanol.jpg'),
    },
    {
        id: '6',
        raza: 'Rottweiler',
        pais: 'Alemania',
        imagen: require('../img/rottweiler.jpg'),
    },
    {
        id: '7',
        raza: 'Pitbull',
        pais: 'Gran Bretaña',
        imagen: require('../img/pitbull.jpg'),
    },
    {
        id: '8',
        raza: 'Golden Retriever',
        pais: 'Inglaterra',
        imagen: require('../img/golden.jpg'),
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
