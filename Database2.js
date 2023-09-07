import React from "react";
import { StyleSheet, Text, FlatList, Image, View } from "react-native";

const FlatListDemo2 = () => {
    const names = [
        {
            index: "1",
            name: "Men's shoes",
            Image: require('./Icons/Mens foot wear.png')
        },
        {
            index: "2",
            name: "Women's Shoes",
            Image: require("./Icons/Ladies foot wear.png")
        },
        {
            index: "3",
            name: "Slipper",
            Image: require("./Icons/Slipper foot wear.png")
        },
    ];

    return (
        <View style={styles.View}> <FlatList
            style={styles.container}
            data={names}
            renderItem={(element) => {
                return (<View>
                    <Image
                        resizeMode={'contain'}
                        source={element.item.Image}
                        style={{ height: 50, width: 50, padding: 60, marginLeft: 30 }} />
                    <Text style={styles.Text1}>{element.item.name}</Text>
                </View>);

            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />

        </View>

    );


};

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        width: '100%'

    },
    Text1: {
        fontSize: 16,
        fontWeight: 600,
        marginTop: 10,
        marginLeft: 28
    },
    View: {
        width: '100%'
    }
});

export default FlatListDemo2