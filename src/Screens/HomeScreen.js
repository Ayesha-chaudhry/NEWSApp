import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  date,
  ActivityIndicator,
  StatusBar,
  ScrollView,
} from "react-native";
import { PRIMARY_SCREEN_COLOR, WHITE_COLOR } from "../../res/colors";
import { useGlobalContext } from "../../store/context";
import NoInternet from "../components/NoInternet";
import { destructuredPostData } from "../../utill/util";
import { FlashList } from "@shopify/flash-list";
import { fetchData } from "../../services/getData";
import { API_KEY } from "../../res/constant";
import SwiperBanner from "../components/Swiper";
import Badge from "../components/Badge";

const Home = () => {
  // const [page, setPage] = useState(1)
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
      pageSize: 10,
      //   page: page
    });
    // console.log("TCL: fetchPosts -> result", result);
    setData(result.data.articles);
  };

  const renderItem = ({ item, category, TIME_AGO_FORMAT, publishedAt }) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.urlToImage }} style={styles.img} />
        </View>
        <View style={styles.dataContainer}>
          <View style={styles.titleWrapperContainer}>
            <Text numberOfLines={2} style={styles.titleWrapper}>
              {item.title}
            </Text>
            <Text style={styles.authorWrapper}>NEWS APP By Ashi</Text>
          </View>
          {/* <Badge
                        date={publishedAt}
                        category={category}
                        type={TIME_AGO_FORMAT}
                    /> */}
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <SwiperBanner data={data} />
        <FlashList
          data={data}
          renderItem={renderItem}
          estimatedItemSize={100}
        />
      </View>
    </ScrollView>
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
  mainContainer: {
    width: "95%",
    height: 90,
    marginHorizontal: 8,
    marginVertical: 6,
    alignSelf: "center",
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    backgroundColor: WHITE_COLOR,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  img: {
    width: 74,
    height: 74,
    resizeMode: "cover",
    borderRadius: 8,
    marginLeft: 6,
  },
  imageContainer: {
    flex: 0.24,
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "center",
  },
  dataContainer: {
    flex: 0.76,
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingEnd: 8,
    paddingVertical: 8,
    display: "flex",
  },
  titleWrapper: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18,
  },
  titleWrapperContainer: {
    flex: 0.7,
    justifyContent: "space-between",
  },
  authorWrapper: {
    color: "gray",
    fontSize: 12,
  },
});

export default Home;
