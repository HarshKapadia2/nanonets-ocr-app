import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const Input = ({ extractText }) => {
	const [url, setUrl] = useState("");

	return (
		<View>
			<TextInput
				placeholder="Paste the URL of a USA Driver's License image"
				style={styles.input}
				value={url}
				onChangeText={(val) => setUrl(val)}
			></TextInput>

			<Button
				title="Extract"
				style={styles.btn}
				color="green"
				onPress={() => extractText(url)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		borderColor: "#fafafa",
		borderWidth: 2,
		paddingHorizontal: 20,
		marginTop: 50,
		marginBottom: 30,
		width: 350
	},
	btn: {
		marginBottom: 50
	}
});

export default Input;
