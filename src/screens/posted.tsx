import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PostedJob = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#01c96c" />
      <View style={styles.postView}>
        <View style={styles.circle}>
          <View style={styles.insideView}>
            <Ionicons name="checkmark-circle" color="#01c96c" size={40} />
            <View style={styles.smallLine}></View>
            <View style={styles.bigLine}></View>
          </View>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}>Your Job is Posted!</Text>
          <Text style={styles.text}>
            Congratulations! Your job has been successfully posted and is now
            visible to potential candidates. Good luck in your recruitment
            process!
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Manage Jobs</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostedJob;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#01c96c',
  },
  postView: {
    width: wp(90),
    height: hp(55),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circle: {
    width: 128,
    height: 128,
    borderRadius: 64,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#ecfdf5',
  },
  button: {
    width: wp(50),
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#01C96C',
    fontSize: 16,
    fontWeight: '500',
    padding: 16,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
  },
  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 21,
  },
  titleView: {
    width: wp(70),
    alignItems: 'center',
    justifyContent: 'center',
  },
  insideView: {
    width: 70,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    bottom: 5,
  },
  smallLine: {
    width: 30,
    height: 5,
    backgroundColor: '#D0FBE6',
    marginVertical: 4,
    borderRadius: 8,
  },
  bigLine: {
    width: 50,
    height: 5,
    backgroundColor: '#D0FBE6',
    borderRadius: 8,
  },
});
