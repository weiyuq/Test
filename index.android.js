/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
      AppRegistry,
      StyleSheet,
      Text,
      View,
    TouchableOpacity
} from 'react-native';
//

var WebViewAndroid = require('react-native-webview-android');

var Spinner = require('react-native-spinkit');

var SITE_URL = "https://ecoer.com/doc/specifications/files/specification-EODA18H.pdf";
export default class Test extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.android.js
//         </Text>
//         <Text style={styles.instructions}>
//           Double tap R on your keyboard to reload,{'\n'}
//           Shake or press menu button for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// var WebViewAndroidExample = React.createClass({
//     getInitialState(){
//         return {
//             url: SITE_URL,
//             // OR
//             // you can use a source object like React Native Webview.
//             // source {uri: string, method: string, headers: object, body: string}, {html: string, baseUrl: string}
//             // Loads static html or a uri (with optional headers) in the WebView. <Just like React Native's version>
//             // source: {
//             //   uri: SITE_URL,
//             //   headers: {
//             //     ...
//             //   },
//             // },
//             status: 'No Page Loaded',
//             backButtonEnabled: false,
//             forwardButtonEnabled: false,
//             loading: true,
//         };
//     }
//     goBack() {
//         this.refs.webViewAndroidSample.goBack(); // you can use this callbacks to control webview
//     }
//     goForward() {
//         this.refs.webViewAndroidSample.goForward();
//     }
//     reload(){
//         this.refs.webViewAndroidSample.reload();
//     }
//     onNavigationStateChange(event) {
//         console.log(event);
//
//         this.setState({
//             backButtonEnabled: event.canGoBack,
//             forwardButtonEnabled: event.canGoForward,
//             url: event.url,
//             status: event.title,
//             loading: event.loading
//         });
//     }

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            types: ['CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt'],
            size: 100,
            color: "#FFFFFF",
            isVisible: true
        };
    }

    //111111111111111111111111111111
    //2222222222222222222222222222
    //3333333333333333333333333333333333
    next() {
        if (this.state.index++ >= this.state.types.length)
            this.setState({index: 0})
        else
            this.setState({index: this.state.index++})
    }

    increaseSize() {
        this.setState({size: this.state.size + 10});
    }

    changeColor() {
        this.setState({color: '#'+Math.floor(Math.random()*16777215).toString(16)});
    }

    changeVisibility() {
        this.setState({isVisible: !this.state.isVisible});
    }

    render() {
        var type = this.state.types[this.state.index];

        return (
            <View style={styles.container}>
                <Spinner style={styles.spinner} isVisible={this.state.isVisible} size={this.state.size} type={type} color={this.state.color}/>

                <Text style={styles.text}>Type: {type}</Text>

                <TouchableOpacity style={styles.btn} onPress={this.next.bind(this)}>
                    <Text style={styles.text}>Next</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={this.increaseSize.bind(this)}>
                    <Text style={styles.text}>Increase size</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={this.changeColor.bind(this)}>
                    <Text style={styles.text}>Change color</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={this.changeVisibility.bind(this)}>
                    <Text style={styles.text}>Change visibility</Text>
                </TouchableOpacity>
            </View>
        );
    }

};

// const styles = StyleSheet.create({
//     containerWebView: {
//         flex: 1,
//     }
// });


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d35400',
    },

    spinner: {
        marginBottom: 50
    },

    btn: {
        marginTop: 20
    },

    text: {
        color: "white"
    }
});


AppRegistry.registerComponent('Test', () => Test);
