import {StatusBar} from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";

export default function App() {
    const [p, setP] = useState([
        {name: 's', key: '1'},
        {name: 'fs', key: '2'},
        {name: 'ssfb', key: '3'},
        {name: 'dbs', key: '4'},
        {name: 'sfdb', key: '5'},
        {name: 'sbdf', key: '6'},
        {name: 'snfm', key: '7'},
        {name: 's.;.', key: '8'},
        {name: 'sfd', key: '9'},
        {name: 'ssef', key: '10'},
        {name: 'sthh', key: '11'}])
    return (
        <View style={styles.container}>
            <ScrollView>
                {p.map(item=> (
                        <View key={item.key}>
                            <Text style={styles.item}>{item.name}</Text>
                        </View>
                    )
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: 40,
        paddingHorizontal: 20
    },item:{
        marginTop:24,
        padding:30,
        backgroundColor:'pink',
        fontSize:24
    }
});
