import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { LinearGradient } from "expo-linear-gradient";
import { WHITE_COLOR } from "../res/colors";
import { DecodeTitle, destructuredPostData } from '../util/util'

const { height, width } = Dimensions.get("window");

const SwiperBanner = () => {
  return (
    <View style={styles.swiper}>
      <Swiper
        style={{ height: 300 }}
        showsButtons={false}
        activeDotColor={WHITE_COLOR}
        dotStyle={{ opacity: 1, borderColor: "white", borderWidth: 1 }}
        autoplay={true}
        autoplayTimeout={4}
      >
        {
            data.map((item) => {
                let {title, urlToImage} = destructuredPostData(item)

                let titleCovert = DecodeTitle(title.rendered)

                return(
                    <TouchableOpacity
                    key={item.urlToImage}
                    onPress={() => alert(Pressed)}
                    >
                        <ImageBackground
                        style={styles.banner}
                        borderRadius={6}
                        source={{uri: urlToImage}}
                        >
                            <LinearGradient
                            colors={['rgba(255,255,255,0)', 'rgba(0,0,0,1)']}
                            style={styles.cardGrad}
                            >
                                <View style={styles.textContainer}></View>
                                <Text numberOfLines={2} style={styles.swiperTextWrapper}>
                                    {titleCovert}
                                </Text>
                            </LinearGradient>                            
                        </ImageBackground>
                    </TouchableOpacity>
                )

            })
        }
      </Swiper>
    </View>
  );
};

export default SwiperBanner;
const styles = StyleSheet.create({
  swiper: {
    width: width,
    height: width / 2,
    alignItems: "center",
    marginTop: 20,
    borderRadius: 10,
  },
  banner: {
    height: width / 2,
    borderRadius: 10,
    marginHorizontal: 12,
  },
  cardGrad: {
    height: width / 2,
    borderRadius: 8,
  },
  swiperTextWrapper: {
    color: WHITE_COLOR,
    fontWeight: "bold",
    fontSize: 20,
    padding: 4,
    paddingHorizontal: 8,
  },
  textContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
