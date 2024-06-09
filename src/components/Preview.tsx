import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';

type DataProps = {
  jobTitle: string;
  description: string;
  selectedSkills: string;
  selectedJobType: string;
  selectedEducation: string;
  selectedExperience: string;
  requirement: string;
};
type PreviewProps = {
  data: DataProps;
};
const PreView = (props: PreviewProps) => {
  console.log('data,,,,,', props.data);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This is a preview of what your job post will look like to job seekers.
      </Text>
      <View style={styles.containerPreview}>
        <View style={styles.Detail}>
          <View style={styles.imageView}>
            <Image
              style={{width: 72, height: 72}}
              source={require('../assets/images/logo.png')}
            />
          </View>
          <View style={styles.detailView}>
            <View style={styles.titleView}>
              <Text style={styles.titleText}>{props.data.jobTitle}</Text>
              <AntDesign name="staro" size={24} color="#DCDDDF" />
            </View>
            <Text style={styles.bioText}>
              KickStarter<Text style={styles.bioText}>, in Manchester</Text>
            </Text>
            <View style={styles.timeView}>
              <View style={styles.boxView}>
                {props?.data?.selectedSkills?.map((skill, index) => (
                  <View key={index} style={styles.box}>
                    <Text style={styles.boxText}>{skill}</Text>
                  </View>
                ))}
              </View>
              <Text style={styles.timeText}>posted 6 hours ago</Text>
            </View>
          </View>
        </View>
        <View style={styles.jobDescriptionView}>
          <Text style={styles.descriptionTitle}>Job Description</Text>
          <Text style={styles.description}>{props.data.description}</Text>
        </View>
        <View style={styles.jobDescriptionView}>
          <Text style={styles.descriptionTitle}>Requirement</Text>
          <Text style={styles.description}>{props.data.requirement}</Text>
        </View>
      </View>
    </View>
  );
};
export default PreView;

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    alignSelf: 'center',
    marginTop: 10,
  },
  text: {
    color: '#7A7C85',
    fontSize: 13,
    fontWeight: '400',
    marginVertical: hp(1),
  },
  containerPreview: {
    width: wp(90),
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#AFB0B6',
  },
  Detail: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingVertical: 12,
    borderColor: '#EFEFEF',
  },
  imageView: {
    width: wp(25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailView: {
    width: wp(60),
  },
  titleView: {
    width: wp(60),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    color: '#222741',
    fontSize: 14,
    fontWeight: '500',
  },
  bioText: {
    color: '#ACAEBE',
    fontSize: 12,
    fontWeight: '400',
  },
  jobTitleView: {
    width: wp(80),
    flexDirection: 'row',
  },

  jobDescriptionView: {
    width: wp(80),
    alignSelf: 'center',
  },
  descriptionTitle: {
    color: '#222741',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 14,
  },
  description: {
    color: '#75788D',
    fontSize: 14,
    paddingVertical: 10,
  },
  timeView: {
    width: wp(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxView: {
    width: wp(37),
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  box: {
    borderRadius: 4,
    backgroundColor: '#E5f5ed',
    marginVertical: 5,
    marginRight: 3,
  },
  timeText: {
    color: '#75788D',
    fontSize: 10,
    fontWeight: '400',
  },
  boxText: {
    color: '#62636A',
    fontSize: 10,
    fontWeight: '500',
    padding: 6,
  },
});
