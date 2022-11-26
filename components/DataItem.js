import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";

const DataItem = () => {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <Text style={styles.title}>Title</Text>
                <Text style={styles.subtitle}>Subtitle</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default DataItem;

const styles = StyleSheet.create({});
