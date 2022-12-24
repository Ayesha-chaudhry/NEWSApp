import {View, Text, StyleSheet} from 'react-native';
import { useGlobalContext } from '../../store/context';
import NoInternet from '../components/NoInternet';

const Setting = () => {

    const {isConnected} = useGlobalContext();
    console.log(isConnected);
    return(
        isConnected ? 
        <View style={styles.container}>
            <Text>Settings Screen</Text>
        </View> :
        <View style = {styles.NoInternet}>
            <NoInternet/>
        </View>
    )
};
export default Setting;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    NoInternet: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});