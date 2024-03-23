import { StatusBar } from "expo-status-bar"
import React, { Component } from "react"
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native"
import { Camera } from "expo-camera"
import * as FaceDetector from "expo-face-detector"

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasCameraPermissions: null,
      faces: [],
    }
    this.onFacesDetected = this.onFacesDetected.bind(this)
  }

  async componentDidMount() {
    const { status } = await Camera.requestPermissionsAsync()
    this.setState({ hasCameraPermissions: status === "granted" })
  }

  onFacesDetected({ faces }) {
    this.setState({ faces: faces })
  }

  render() {
    var { hasCameraPermissions } = this.state
    if (hasCameraPermissions === null) {
      return <View />
    }
    if (hasCameraPermission === false) {
      return (
        <View style={styles.container}>
          <Text>Camera permission denied</Text>
        </View>
      )
    }
    return (
    <View style={styles.middleContainer}>
        <Camera
        style={{ flex: 1 }}
        type={Camera.Constants.Type.front}
        FaceDetectorSettings={{
            mode: FaceDetector.Constants.Mode.fast,
            detectLandmarks: FaceDetector.Constants.landmarks.all,
            runClassification: FaceDetector.Constants.Classifications.all,
        }}
        onFacesDetected={this.onFacesDetected}
        onFacesDetectedError={this.onFacesDetectedError}
        />
    </View>
    )
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightblue"
    },
    upperContainer: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        flexDirection: "row",
    },
    middleContainer: {
        flex: 0.5
    },
    lowerContainer:{
        flex: 0.2,
        backgroundColor: "lightgreen"
    }
})