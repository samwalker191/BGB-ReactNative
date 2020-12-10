import React from "react";
import LoginOptionsComponent from "./session/login_options_component";
import HomeComponent from "./home/home_component";
import Modal from "./modals/modal_container";
import { NativeRouter, Route } from 'react-router-native';
import { View } from 'react-native';

const App = () => {
  return (
		<NativeRouter>
			<View style={{ overflow: "hidden" }}>
				<Route exact path="/" component={HomeComponent} />
				<Route path="/login" component={LoginOptionsComponent} />
				<Route path="/home" component={HomeComponent} />
				<Route path="/" component={Modal} />;
			</View>
		</NativeRouter>
	);
};

export default App;
