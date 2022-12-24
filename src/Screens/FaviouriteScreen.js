import {View, Text, StyleSheet} from 'react-native';
import { useGlobalContext } from '../../store/context';
import NoInternet from '../components/NoInternet';

const Favourite = () => {
    const {isConnected} = useGlobalContext();
    console.log(isConnected);
    
    return (
        isConnected ? 
        <View style={styles.container}>
            <Text>Favorite Screen</Text>
        </View> :
        <View style = {styles.NoInternet}>
            <NoInternet/>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    NoInternet:{
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Favourite;