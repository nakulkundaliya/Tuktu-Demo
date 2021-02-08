import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../Utils';
const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  headerView: {
    flex: 2.5,
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  titleText: {
    fontSize: 28,
    fontFamily: Fonts.regular,
    color: Colors.textColor,
  },
  paragraphText: {
    fontSize: 18,
    fontFamily: Fonts.regular,
    color: Colors.textColor,
    marginTop: 10,
    lineHeight: 24,
  },
  mapView: {
    flex: 5,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  customeMaker: {
    backgroundColor: Colors.selectedPin,
    height: 45,
    width: 45,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerImage: {
    height: 40,
    width: 40,
    borderRightWidth: 3,
    borderRadius: 20,
    borderColor: Colors.selectedPin,
  },
  radiusButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  footerView: {
    flex: 2.5,
    paddingHorizontal: 20,
    paddingVertical: 25,
    justifyContent: 'space-between',
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dotView: {
    flexDirection: 'row',
  },
  buttonText: {
    color: Colors.primaryColor,
    fontFamily: Fonts.medium,
  },
});

export default style;
