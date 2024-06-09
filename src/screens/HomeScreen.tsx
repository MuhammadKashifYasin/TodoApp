import React, { useEffect, useRef, useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Animated,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Feather from "react-native-vector-icons/Feather";
import { Button, Header } from "../components/buttonAndHeader";
import PreView from "../components/Preview";
import { Dropdown, DropdownPicker } from "../components/dropdown";
import dummyData from "../components/dummyData.json";

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedStep, setSelectedStep] = useState(0);
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedJobType, setSelectedJobType] = useState<Item | null>(null);
  const [selectedEducation, setSelectedEducation] = useState<Item | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<Item | null>(
    null
  );
  const [requirement, setRequirement] = useState("");

  const [jobData, setJobData] = useState(null);
  const maxLength = 1500;
  const progress1 = useRef(new Animated.Value(0)).current;
  const progress2 = useRef(new Animated.Value(0)).current;
  const progress3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (dummyData) {
      setJobTitle(dummyData.jobTitle);
      setDescription(dummyData.description);
      setSelectedSkills(dummyData?.skills);
      setRequirement(dummyData.requirement);
      setSelectedJobType(dummyData.jobType);
      setSelectedEducation(dummyData.education);
      setSelectedExperience(dummyData.experience);
    }
  }, []);

  const start1 = () => {
    Animated.timing(progress1, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const start2 = () => {
    Animated.timing(progress2, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const start3 = () => {
    Animated.timing(progress3, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const handlePress = () => {
    if (selectedStep === 0) {
      start1();
      const nextStep = 2;
      const jobData = {
        jobTitle,
        description,
        selectedSkills,
        selectedJobType,
        selectedEducation,
        selectedExperience,
        requirement,
      };

      setJobData(jobData);
      setSelectedStep(nextStep);
    } else if (selectedStep === 1) {
      start1();
      const nextStep = selectedStep + 1;
      setSelectedStep(nextStep);
    } else if (selectedStep === 2) {
      start2();
      navigation.navigate("post");
    } else if (selectedStep === 3) {
      start3();
      const nextStep = selectedStep + 1;
      setSelectedStep(nextStep);
    } else {
      const nextStep = selectedStep + 1;
      setSelectedStep(nextStep);
    }
  };

  const renderCircle = (step) => {
    const isCompleted = step < selectedStep;
    const isActive = step === selectedStep;
    return (
      <View
        style={[
          styles.circle,
          isCompleted && styles.circleCompleted,
          isActive && styles.circleActive,
        ]}
      >
        {isCompleted && <Feather name="check" size={12} color="#fff" />}
      </View>
    );
  };

  const renderLine = (step) => {
    const isCompleted = step < selectedStep;
    return <View style={[styles.line, isCompleted && styles.lineCompleted]} />;
  };
  const stepLabels = ["Job Detail", "Post Detail", "Preview", "Payment"];

  const JobType = [
    {
      title: "Full Time",
      value: "full_time",
    },
    {
      title: "Part Time",
      value: "part_time",
    },
    {
      title: "Contract",
      value: "contract",
    },
    {
      title: "Internship",
      value: "internship",
    },
    {
      title: "Remote",
      value: "remote",
    },
  ];

  const Education = [
    {
      title: "High School",
      value: "high_school",
    },
    {
      title: "Bachelor Degree",
      value: "bachelor_degree",
    },
    {
      title: "Master Degree",
      value: "master_degree",
    },
    {
      title: "PhD",
      value: "phd",
    },
  ];

  const Experience = [
    {
      title: "Entry Level",
      value: "entry_level",
    },
    {
      title: "Mid Level",
      value: "mid_level",
    },
    {
      title: "Senior Level",
      value: "senior_level",
    },
  ];

  const Skills = [
    {
      title: "HTML",
      value: "html",
    },
    {
      title: "CSS",
      value: "css",
    },
    {
      title: "JavaScript",
      value: "javascript",
    },
    {
      title: "React",
      value: "react",
    },
    {
      title: "Angular",
      value: "angular",
    },
    {
      title: "TypeScript",
      value: "typescript",
    },
    {
      title: "Python",
      value: "python",
    },
    {
      title: "PHP",
      value: "php",
    },
    {
      title: "Ruby",
      value: "ruby",
    },
    {
      title: "Java",
      value: "java",
    },
    {
      title: "React Native",
      value: "react_native",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Header title={"Post a Job"} />

      <View style={styles.stepView}>
        <View style={styles.stepsContainer}>
          {stepLabels.map((label, index) => (
            <React.Fragment key={index}>
              {renderCircle(index)}
              {index < stepLabels.length - 1 && renderLine(index)}
            </React.Fragment>
          ))}
        </View>
        <View style={styles.stepText}>
          {stepLabels.map((label, index) => (
            <Text
              key={index}
              style={[styles.text, index === selectedStep && styles.textActive]}
            >
              {label}
            </Text>
          ))}
        </View>
      </View>
      <ScrollView style={{ marginBottom: 80 }}>
        {selectedStep === 2 ? (
          <PreView data={jobData} />
        ) : (
          <>
            <View style={styles.mainView}>
              <Text style={styles.jobTitleText}>Job Title</Text>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Job Title"
                  onChangeText={(text) => setJobTitle(text)}
                  value={jobTitle}
                />
              </View>
            </View>
            <View style={styles.descriptionView}>
              <Text style={styles.jobTitleText}>Description</Text>
              <View style={styles.inputViewDescription}>
                <TextInput
                  style={styles.input}
                  placeholder="Your Job Description"
                  multiline={true}
                  maxLength={maxLength}
                  onChangeText={(text) => setDescription(text)}
                  value={description}
                />
                <Text
                  style={styles.textLimit}
                >{`${description.length}/${maxLength}`}</Text>
              </View>
            </View>
            <DropdownPicker
              title="Skills"
              data={Skills}
              selectedValues={selectedSkills}
              onSelect={setSelectedSkills}
              placeHolderTitle="Type Skill"
            />
            <Dropdown
              title="Job Type"
              data={JobType}
              selectedValue={selectedJobType}
              onSelect={setSelectedJobType}
              placeHolderTitle="Select job type"
            />
            <Dropdown
              title="Education"
              data={Education}
              selectedValue={selectedEducation}
              onSelect={setSelectedEducation}
              placeHolderTitle="Select Education"
            />
            <Dropdown
              title="Experience"
              data={Experience}
              selectedValue={selectedExperience}
              onSelect={setSelectedExperience}
              placeHolderTitle="Select Experience"
            />
          </>
        )}
      </ScrollView>
      <Button
        title={selectedStep === 2 ? "Payment" : "Get Started"}
        handleOnpress={handlePress}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainView: {
    width: wp(90),
    alignSelf: "center",
    marginTop: 6,
  },
  inputView: {
    width: wp(90),
    backgroundColor: "#F2F2F3",
    borderRadius: 8,
  },
  jobTitleText: {
    fontSize: 14,
    color: "#040607",
    fontWeight: "500",
    marginVertical: 5,
  },
  input: {
    paddingHorizontal: 15,
  },
  descriptionView: {
    width: wp(90),
    alignSelf: "center",
    marginTop: 10,
  },
  inputViewDescription: {
    width: wp(90),
    height: hp(40),
    backgroundColor: "#F2F2F3",
    borderRadius: 8,
  },
  textLimit: {
    position: "absolute",
    bottom: 10,
    right: 10,
    fontSize: 12,
    color: "gray",
  },
  stepView: {
    width: wp(100),
    backgroundColor: "#F2F2F3",
  },
  stepsContainer: {
    flexDirection: "row",
    width: wp(85),
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    alignSelf: "center",
  },
  circle: {
    width: 17,
    height: 17,
    borderRadius: 17 / 2,
    borderWidth: 1,
    borderColor: "#AFB0B6",
    justifyContent: "center",
    alignItems: "center",
  },
  circleCompleted: {
    backgroundColor: "#7A7C85",
  },
  circleActive: {
    width: 24,
    height: 17,
    borderRadius: 12,
    backgroundColor: "#01C96C",
  },
  line: {
    width: 78,
    height: 2,
    backgroundColor: "#AFB0B6",
  },
  lineCompleted: {
    backgroundColor: "#AFB0B6",
    height: 6,
  },
  stepText: {
    width: wp(84),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    bottom: 10,
  },
  text: {
    color: "#95969D",
    fontSize: 10,
  },
  textActive: {
    color: "green",
  },
});
