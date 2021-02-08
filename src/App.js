/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import styles from './styles/AppStyles';
import {Button} from './Components/Button';
import {DotView} from './Components/DotView';

const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.015;
const LONGITUDE_DELTA = 0.0121;

const DOT_CIRCLE = [
  {
    id: 1,
    isSelected: false,
  },
  {
    id: 2,
    isSelected: false,
  },
  {
    id: 3,
    isSelected: true,
  },
  {
    id: 4,
    isSelected: false,
  },
  {
    id: 5,
    isSelected: false,
  },
];

const App = () => {
  const [selectedRadius, setSelectedRadius] = useState(2);
  const [mapZoomLevel, setMapZoomLevel] = useState(13);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.headerView}>
          <Text style={styles.titleText}>Service radius</Text>
          <Text style={styles.paragraphText}>
            Your home address and service radius determines the area from which
            you can receive help requests.
          </Text>
        </View>
        <View style={styles.mapView}>
          <MapView
            style={styles.map}
            maxZoomLevel={mapZoomLevel} // 2 = 13, 4 = 12, 6 = 11 2
            region={{
              latitude: LATITUDE,
              longitude: LONGITUDE,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}>
            <MapView.Circle
              center={{
                latitude: LATITUDE,
                longitude: LONGITUDE,
              }}
              radius={selectedRadius * 1000}
              strokeWidth={0}
              fillColor="rgba(73, 182, 173, 0.5)"
            />
            <Marker
              coordinate={{
                latitude: LATITUDE,
                longitude: LONGITUDE,
              }}>
              <View style={styles.customeMaker}>
                <Image
                  style={styles.markerImage}
                  source={require('./assets/pic.jpeg')}
                />
              </View>
            </Marker>
          </MapView>
        </View>
        <View style={styles.footerView}>
          <View style={styles.radiusButtonView}>
            <Button
              title="2 Km"
              onPress={() => {
                setSelectedRadius(2);
                setMapZoomLevel(13);
              }}
              isSelected={selectedRadius === 2}
            />
            <Button
              title="4 Km"
              onPress={() => {
                setSelectedRadius(4);
                setMapZoomLevel(12);
              }}
              isSelected={selectedRadius === 4}
            />
            <Button
              title="6 Km"
              onPress={() => {
                setSelectedRadius(6);
                setMapZoomLevel(11.4);
              }}
              isSelected={selectedRadius === 6}
            />
          </View>
          <View style={styles.bottomView}>
            <TouchableOpacity>
              <Text style={styles.buttonText}>PREVIOUS</Text>
            </TouchableOpacity>
            <View style={styles.dotView}>
              {DOT_CIRCLE.map((item) => {
                return <DotView key={item.id} isSelected={item.isSelected} />;
              })}

              <DotView />
            </View>

            <TouchableOpacity>
              <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
