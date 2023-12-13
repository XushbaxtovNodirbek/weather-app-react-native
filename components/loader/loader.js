import { View, StyleSheet, Image, Text , StatusBar } from 'react-native';


const Loader = () => {
  
  return (
    <View style={styles.container} >
        <StatusBar 
          barStyle='dark-content'
          backgroundColor='#FEFCBF'
        />
        <Image
          style={styles.loader}
          source={require('../../assets/spinner.gif')}
        />
        <Text>Loading...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FEFCBF',
        justifyContent: "center",
        alignItems:"center"
    },
    loader:{
        height:80,
        width:80,
    }
})

export default Loader
