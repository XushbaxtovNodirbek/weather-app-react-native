import { Modal, Alert, StatusBar, useWindowDimensions, View ,Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import WeatherModel from '../../model/weather-model'
import DateModels from '../../model/date-model'
import React ,{ useState } from 'react'
import GetStyles from '../../model/styles'

const MainPage = ({weather,getWeatherByCity}) => {
  const windowHeight = useWindowDimensions().height;
  const [modalVisible, setModalVisible] = useState(weather.err ? true : false);

  const [input,setInput] = useState('')
  const changeLocation =  () =>{
    if(input !== ''){
      getWeatherByCity(input)
    }
  }
  return (
    <LinearGradient
      colors={GetStyles.getBackgroundColors()}
      style={{flex: 1}}
    >
      <StatusBar 
        barStyle={GetStyles.getStatusBarStyle().style}
        backgroundColor={GetStyles.getStatusBarStyle().backgroundColor}
      />
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={[{
          minHeight:Math.round(windowHeight),
          flex:1,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:GetStyles.getBackgroundColors()[0],
          opacity:1,
        }]}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{weather.err}</Text>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={[styles.button, styles.buttonClose]}>
              <Text style={styles.close} >Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={[{
          minHeight:Math.round(windowHeight),
          flex:1,
          justifyContent:'center',
          alignItems:'center',
        }]}>
        <View style={styles.searchView}>
          <Text style={styles.citiyName}>{ weather.name || 'Tashkent' }</Text>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.text}
              placeholder="Citiy"
              placeholderTextColor="white"
              maxLength={20}
              onChangeText={(text)=>setInput(text)}
              value={input}
            />
            <View style={styles.buttonWrapper}>
              <TouchableOpacity onPress={changeLocation}>
                <Image  
                  source={require('../../assets/search-icon-white.png')}
                  style={styles.searchButton}
                />
              </TouchableOpacity>
              
            </View>
          </View>
        </View>
        <View style={styles.contentView}>
            <View style={styles.iconView}>
              <Image
                source={WeatherModel.getIcons(weather.weather?.[0].icon)}
                style={styles.icon}
              />
            </View>
            <View style={styles.infoView}>
              <Text style={styles.desc}>{weather.weather?.[0].main || 'moderate rain'}</Text>
              <Text style={styles.temp}>{getTemp(weather.main?.temp || 24)}°C</Text>
              <Text style={styles.dateText}>{`${DateModels.getDay()} ${DateModels.getMonth()} ${DateModels.getDate()}.${DateModels.getYear()}`}</Text>
            </View>
        </View>
        <View style={styles.detailView}>
          <View style={styles.contentDetail}>
            {/* Wind */}
            <View style={styles.detailCard}>
              <Image
                source={require('../../assets/weather-detail/wind.png')}
                style={{
                  width:'50%',
                  height:'30%',
                  resizeMode:'center'
                }}
              />
              <Text style={styles.cardValue}>{Math.round(weather.wind?.speed) || 5} km/h</Text>
              <Text style={styles.cardTitle}>Wind</Text>
            </View>
            {/* Humidity */}
            <View style={styles.detailCard}>
              <Image
                source={require('../../assets/weather-detail/humidity.png')}
                style={{
                  width:'50%',
                  height:'30%',
                  resizeMode:'center'
                }}
              />
              <Text style={styles.cardValue}>{`${weather.main?.humidity || 66}%`}</Text>
              <Text style={styles.cardTitle}>Humidity</Text>
            </View>
            {/* Visibility */}
            <View style={styles.detailCard}>
              <Image
                source={require('../../assets/weather-detail/visibility.png')}
                style={{
                  width:'50%',
                  height:'30%',
                  resizeMode:'center'
                }}
              />
              <Text style={styles.cardValue}>{weather?.visibility/1000 || 5.5} km</Text>
              <Text style={styles.cardTitle}>Visibility</Text>
            </View>
            {/* pressure */}
            <View style={styles.detailCard}>
              <Image
                source={require('../../assets/weather-detail/pressure.png')}
                style={{
                  width:'50%',
                  height:'30%',
                  resizeMode:'center'
                }}
              />
              <Text style={styles.cardValue}>{`${weather.main?.pressure || 866}hpa`}</Text>
              <Text style={styles.cardTitle}>Pressure</Text>
            </View>
            {/* Min Temperature */}
            <View style={styles.detailCard}>
              <Image
                source={require('../../assets/weather-detail/min_temp.png')}
                style={{
                  width:'50%',
                  height:'30%',
                  resizeMode:'center'
                }}
              />
              <Text style={styles.cardValue}>{`${getTemp(weather.main?.temp_min) || 20}°C`}</Text>
              <Text style={styles.cardTitle}>Min Temp</Text>
            </View>
            {/* Max Temperature */}
            <View style={styles.detailCard}>
              <Image
                source={require('../../assets/weather-detail/max_temp.png')}
                style={{
                  width:'50%',
                  height:'30%',
                  resizeMode:'center'
                }}
              />
              <Text style={styles.cardValue}>{`${getTemp(weather.main?.temp_max) || 20}°C`}</Text>
              <Text style={styles.cardTitle}>Min Temp</Text>
            </View>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
    close:{
      color:'#fff',
      fontSize:15,
      fontFamily:'NotoSans_Condensed-Regular',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontSize:20,
      fontFamily:'NotoSans_Condensed-SemiBold',
    },
    buttonClose: {
      backgroundColor: 'red',
    },
    button: {
      borderRadius: 20,
      paddingVertical: 10,
      elevation: 2,
      paddingHorizontal:20,
    },
    modalView:{
      width:'70%',
      backgroundColor:'#fff',
      borderRadius:25,
      padding:15,
      alignItems:'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    buttonWrapper:{
      position:'absolute',
      backgroundColor:'#0040FF',
      paddingVertical:11,
      paddingHorizontal:30,
      right:0,
      borderRadius:25,
      height:'auto',
    },
    searchButton:{
      width:16,
      height:16,
    },
    searchWrapper:{
      marginTop:15,
      position:'relative',
      backgroundColor:'rgba(255,255,255,0.3)',
      paddingHorizontal:20,
      paddingVertical:5,
      borderRadius:25,
      flexDirection:'row',
    },
    searchInput:{
      width:'100%',
      height:'100%',
      color:'white',
      fontSize:20,
    },
    text:{
      fontSize:18,
      color:'white',
      fontFamily:'NotoSans_Condensed-Regular',
      width:'75%',
    },
    citiyName:{
      fontSize:30,
      color:'white',
      fontFamily:'NotoSans_Condensed-Regular',
      fontWeight:'700',
      letterSpacing:1,
    },
    searchView:{
      flex:1,
      width:'100%',
      marginTop:25,
      padding:20,
    },
    contentView:{
      flex:3,
      width:'100%',
      flexDirection:'row',
      padding:25
    },
    iconView:{
      flex:1,
      justifyContent:'center'
    },
    infoView:{
      flex:1,
    },
    icon:{
      width:'95%',
      height:'75%',
      resizeMode:'center'
    },
    detailView:{
      flex:5,
      width:'100%',
      padding:20,
    },
    desc:{
      color:'#fff',
      fontFamily:'NotoSans_Condensed-SemiBold',
      textTransform:'capitalize',
      paddingTop:40,
      paddingBottom:5,
      paddingLeft:15,
      fontSize:23,
      letterSpacing:1,
    },
    temp:{
      textAlign:'center',
      color:'#fff',
      fontSize:60,
      fontWeight:'bold',
    },
    dateText:{
      color:'#fff',
      fontFamily:'NotoSans_Condensed-Regular',
      textTransform:'capitalize',
      fontSize:16,
      paddingLeft:15,
      fontWeight:'600'
    },
    contentDetail:{
      backgroundColor:'rgba(255,255,255,0.3)',
      width:'100%',
      height:'100%',
      borderRadius:25,
      flexWrap:'wrap',
      flexDirection:'row',
    },
    detailCard:{
      width:'33.33%',
      height:'50%',
      justifyContent:'center',
      alignItems:'center',
    },
    cardValue:{
      color:'#fff',
      fontSize:17,
      fontFamily:'NotoSans_Condensed-SemiBold',
      fontWeight:'bold',
    },
    cardTitle:{
      color:'#fff',
      fontSize:15,
      fontFamily:'NotoSans_Condensed-Regular',
      letterSpacing:1,
    }
})

const getTemp= (temp) => {
    return Math.round(temp)
}

export default MainPage
