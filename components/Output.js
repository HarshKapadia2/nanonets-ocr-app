import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Output = ({ outputText }) => {
	console.log("hi");
	console.log(outputText);

	return (
		<View>
			<Text style={styles.text}>
				{JSON.stringify(outputText, null, "\t")}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		color: "#fafafa"
	}
});

export default Output;
