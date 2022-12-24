import { useState, useEffect } from "react";
import {View, Text, StyleSheet, ActivityIndicator, StatusBar, ScrollView} from "react-native";
import { PRIMARY_SCREEN_COLOR } from "../../res/colors";
import {useGlobalContext} from '../../store/context';
import NoInternet from "../components/NoInternet";
import Swiper from "react-native-swiper";
import {DecodeTitle, destructuredPostData} from '../../utill/util';
import Card from "../components/Card";

const Home = () => {
    const [data, setData] = useState([])
	console.log("TCL: Home -> [data", data)
    const {isConnected} = useGlobalContext()
    console.log(isConnected);

    useEffect(() => {
        fetchPosts()
    
      }, [])

      const fetchPosts = async () => {
        try{
            let result = await fetchData("articles", {})
			console.log("TCL: fetchPosts -> result", result)
            setData(result.articles.data)
            setRefresh(false)
        } catch (error){
            console.log(fetchPosts);
        }
      }


  const renderItem = ({ item }) => {

    let {title, urlToImage} = destructuredPostData(item)

    let decodedTitle = DecodeTitle(title.rendered)
  
    return  (
        isConnected ?
        <ScrollView style = {styles.MainContainer}>
        <Card/>
        <View style={styles.ActivityIndicator}>
        <ActivityIndicator
        size={'large'}
        color={PRIMARY_SCREEN_COLOR}
        />
    </View> :
    <Swiper/>
    </ScrollView> :
    <View style = {styles.NoInternet}>
        <NoInternet/>
    </View>
    )
}
}
const styles = StyleSheet.create({
    MainContainer:{
        flex: 1,
        backgroundColor: '#F5F5F5',
        marginBottom: 50
    },
    ActivityInd: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30
    },
    NoInternet:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }    
})

export default Home