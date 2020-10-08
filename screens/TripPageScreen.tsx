import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, View, TouchableOpacity, Text, TouchableHighlight } from 'react-native';

const TripScreen = ({navigation}) => {
    return (
      <ScrollView>
        <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
            }}>
            {/* month and km number */}
            <View style={{height: 100, backgroundColor: '#068D3C', flexDirection: 'row', justifyContent: 'space-between'}} >
                <TouchableOpacity onPress = {() => {navigation.navigate('Reward')}}>
                    <View style = {{height: 50, width: 170, alignItems: 'center', 
                                    backgroundColor: 'white', justifyContent: 'center',
                                    borderRadius: 40, marginVertical: 30}}>
                        <Text style = {{color: 'green', fontFamily: 'Roboto-Bold',
                                    fontSize: 20}}>August</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => {navigation.navigate('Home')}}>
                    <View style = {{height: 50, width: 170, alignItems: 'center', 
                                    backgroundColor: 'white', justifyContent: 'center',
                                    borderRadius: 40, marginVertical: 30}}>
                        <Text style = {{color: 'green', fontFamily: 'Roboto-Bold',
                                    fontSize: 20}}>92km</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* the date of today */}
            <View style={{height: 56, backgroundColor: '#DFECDC', flexDirection: 'row', justifyContent: 'center'}} >
                <TouchableOpacity onPress = {() => {navigation.navigate('Reward')}}>
                    <View style = {{height: 25, width: 200, alignItems: 'center', justifyContent: 'center', 
                                    backgroundColor: 'white', borderRadius: 40, marginVertical: 18, borderWidth: 1, borderColor: 'grey' }}>
                        <Text style = {{color: 'black', fontFamily: 'Roboto', fontSize: 17}}>SAT, 29TH</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* display the cards */}
            <View style={{backgroundColor: '#DFECDC', alignItems: 'center', justifyContent: 'center'}} >
                <View style={{width: '95%', height: 40, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}} >
                    <Text style={styles.textSmall}>Coles $5 egift card</Text>
                </View>
                <TouchableOpacity onPress = {() => {navigation.navigate('Reward')}}>
                    <Text style = {{color: 'green', fontFamily: 'Roboto-Bold',
                            fontSize: 20, marginRight: 200, marginTop: 10}}>Not Correct?</Text>
                </TouchableOpacity>
                <Text>{"\n"}</Text>

                <ImageBackground source={require("../img/HOYTS-Frankston-Recliner.jpg")} style={{width: '97.5%', height: 220, marginLeft: 10}} >
                    <Image
                        source={require("../img/hotys.png")}
                        style={{width: '60%', height: 130, borderRadius: 20, 
                                marginLeft: 115, marginTop: 70}}
                    />
                </ImageBackground>
                <View style={{width: '95%', height: 40, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}} >
                    <Text style={styles.textSmall}>HOYTS $15 egift card</Text>
                </View>
                <TouchableOpacity onPress = {() => {navigation.navigate('Reward')}}>
                    <View style = {{height: 50, width: 200, backgroundColor: '#068D3C', 
                                    alignItems: 'center', justifyContent: 'center', 
                                    borderRadius: 40, marginVertical: 10}}>
                        <Text style = {{color: 'white', fontFamily: 'Roboto-Bold',
                                    fontSize: 22}}>Redeem for 15km</Text>
                    </View>
                </TouchableOpacity>
                <Text>{"\n"}</Text>

                <ImageBackground source={{uri: "https://raw.githubusercontent.com/danielzhangau/DECO3801-7381-Zoomers/master/img/airbnb%20p.jpg"}} style={{width: '97.5%', height: 220, marginLeft: 10}} >
                    <Image
                        source={{uri: "https://raw.githubusercontent.com/danielzhangau/DECO3801-7381-Zoomers/master/img/airbnb.png"}}
                        style={{width: '60%', height: 130, borderRadius: 20, 
                                marginLeft: 115, marginTop: 70}}
                    />
                </ImageBackground>
                <View style={{width: '95%', height: 40, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}} >
                    <Text style={styles.textSmall}>Airbnb $15 egift card</Text>
                </View>
                <TouchableOpacity onPress = {() => {navigation.navigate('Reward')}}>
                    <View style = {{height: 50, width: 200, backgroundColor: '#068D3C', 
                                    alignItems: 'center', justifyContent: 'center', 
                                    borderRadius: 40, marginVertical: 10}}>
                        <Text style = {{color: 'white', fontFamily: 'Roboto-Bold',
                                    fontSize: 22}}>Redeem for 30km</Text>
                    </View>
                </TouchableOpacity>
                <Text>{"\n"}</Text>

                <ImageBackground source={require("../img/Coles-supermarket.jpg")} style={{width: '97.5%', height: 220, marginLeft: 10}} >
                    <Image
                        source={require("../img/colesCard.png")}
                        style={{width: '60%', height: 130, borderRadius: 20, 
                                marginLeft: 115, marginTop: 70}}
                    />
                </ImageBackground>
                <View style={{width: '95%', height: 40, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}} >
                    <Text style={styles.textSmall}>Coles $30 egift card</Text>
                </View>
                <TouchableOpacity onPress = {() => {navigation.navigate('Reward')}}>
                    <View style = {{height: 50, width: 200, backgroundColor: '#068D3C', 
                                    alignItems: 'center', justifyContent: 'center', 
                                    borderRadius: 40, marginVertical: 10}}>
                        <Text style = {{color: 'white', fontFamily: 'Roboto-Bold',
                                    fontSize: 22}}>Redeem for 25km</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        color: 'black',
        alignSelf: 'flex-start',
        marginLeft: 10,
        marginBottom: 10,
    },
    textSmall: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: 'black',
    },
  })

export default TripScreen;