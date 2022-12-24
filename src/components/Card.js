import {View, StyleSheet, Image} from 'react-native';

const Card = () => {
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/img.jpg')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
    }
})

export default Card;