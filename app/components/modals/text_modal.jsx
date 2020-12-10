import React from 'react'
import { Text, View, Image, ImageBackground } from "react-native";
import { layoutStyles, loginOptionsStyles } from "../../styles/styles";

import { modalStyles } from "./_text_modal.js";

const TextModal = ({toggleModal, text = ["An unexpected error has occured"]}) => {
console.log(toggleModal)
  const exitModal = (e) => {toggleModal(false);}

  // 
  const errorMessages = text.map((err, i) => <Text key={i + text} style={modalStyles.textItem}>{err}</Text> )
  
  return (
		<View
			style={[
				loginOptionsStyles.loginLayoutCentering,
				modalStyles.modalContainer,
      ]}
      onClick={exitModal}
		>
			<View style={[loginOptionsStyles.contentContainer]}>
				<ImageBackground
					style={modalStyles.pinkBox}
					source={require("/Users/jwong/Desktop/jesse/BGB-ReactNative/assets/errorModalpink.png")}
				>
					<Image
						style={modalStyles.warningIcon}
						source={require("/Users/jwong/Desktop/jesse/BGB-ReactNative/assets/warningIcon.png")}
					></Image>
					<View style={modalStyles.textBox}>{errorMessages}</View>
				</ImageBackground>
			</View>
			<View style={[modalStyles.modalShade]}></View>
		</View>
	); 
}

export default TextModal;
