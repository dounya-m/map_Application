import { View, Text, StyleSheet, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import MapView from 'react-native-maps'
import { Marker } from "react-native-maps";

export default function Map() {
    // const [data, setData] = useState({})
    const [region, setRegion] = useState({
        latitude: 51.5079145,
        longitude: -0.0899163,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    const tokyoRegion = {
        latitude: 35.6762,
        longitude: 139.6503,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
        };

        // useEffect(() =>{
        //     fetch('http://localhost:3000/api/mapApp/map')
        //     .then(response => response.json())
        //     .then(data => {
        //         setData(data)
        //     })
        // })

return (
    <View style={mapStyle.container}>
        <MapView 
            style={mapStyle.map}
            initialRegion={tokyoRegion}
            onRegionChangeComplete={(region) => setRegion(region)}
        >
            <Marker 
            coordinate={tokyoRegion}
            >
            <Image 
                    source={require("../../assets/images/moto.png")} 
                    style={{ width: 40, height: 40 }} // set the desired width and height
                />
            </Marker>
            <Marker
            coordinate={{
            latitude: 35.67714827145542,
            longitude: 139.6551462687416,
            }}
            >
            <Image 
                    source={require("../../assets/images/moto.png")} 
                    style={{ width: 40, height: 40 }} // set the desired width and height
                />
            </Marker>
            <Marker
            coordinate={{
            latitude: 35.66620,
            longitude: 139.650780,
            }}
            >
            <Image 
                    source={require("../../assets/images/moto.png")} 
                    style={{ width: 40, height: 40 }} // set the desired width and height
                />
            </Marker>
        </MapView>

        <View style={mapStyle.bottom}>
            <Text style={mapStyle.text}>Current lat: {region.latitude}</Text>
            <Text style={mapStyle.text}>Current lon: {region.longitude}</Text>
        </View>
    </View>
)
}


const mapStyle = StyleSheet.create({
    container:{
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    map:{
        ...StyleSheet.absoluteFillObject
    },
    marker: {
        width: 60,
        height: 60
    },
    text: {
    color: "#fff",  
    backgroundColor: '#a9a9a9',
    paddingLeft: 5,
    paddingRight: 5,
    },
    bottom:{
        position: 'absolute',
        bottom: 0,
    }
})