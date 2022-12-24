import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
  ScrollView,
} from "react-native";
import { PRIMARY_SCREEN_COLOR } from "../../res/colors";
import { useGlobalContext } from "../../store/context";
import NoInternet from "../components/NoInternet";
import Swiper from "react-native-swiper";
import { DecodeTitle, destructuredPostData } from "../../utill/util";
import Card from "../components/Card";
import { FlashList } from "@shopify/flash-list";
import { fetchData } from "../../services/getData";
import { API_KEY } from "../../res/constant";
import SwiperBanner from "../components/Swiper";

const Home = () => {
  const [data, setData] = useState([]);
  console.log("TCL: Home -> [data", data);
  const { isConnected } = useGlobalContext();
  console.log(isConnected);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    let result = await fetchData("top-headlines", {
      apiKey: "0f9a9573497e413c96b65a12042c79d2",
      country: "us",
    });
    console.log("TCL: fetchPosts -> result", result);
    setData(result.data.articles);
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SwiperBanner data={data} />
      <FlashList data={data} renderItem={renderItem} estimatedItemSize={100} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    marginBottom: 50,
  },
  ActivityInd: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  NoInternet: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
