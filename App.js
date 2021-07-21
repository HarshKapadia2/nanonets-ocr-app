import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { API_KEY, MODEL_ID } from "@env";
import { extractData } from "nanonets-ocr";
import Input from "./components/Input";
import Output from "./components/Output";

if (typeof Buffer === "undefined") global.Buffer = require("buffer").Buffer;

const App = () => {
	const [output, setOutput] = useState({});

	const extractText = async (url) => {
		const res = await extractData(API_KEY, MODEL_ID, url);
		const dataArr = res.result[0].prediction;
		let textObj = {};

		for (let i = 0; i < dataArr.length; i++) {
			textObj[dataArr[i].label] = dataArr[i].ocr_text;
		}
		console.log(textObj);

		setOutput(textObj);
	};

	return (
		<View style={styles.container}>
			<Input extractText={extractText} />

			<Output outputText={output} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "black",
		alignItems: "center"
	},
	input: {
		borderColor: "#fafafa",
		borderWidth: 2,
		paddingHorizontal: 20,
		marginVertical: 50
	}
});

export default App;
