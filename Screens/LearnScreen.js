import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

const LearnScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <View style={styles.Textcontainer}>
          <Text style={styles.Text}>good to know</Text>
          <TouchableOpacity>
            <Text style={styles.Text}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.subBox}>
          <TouchableOpacity style={styles.subSection}>
            <Text style={styles.H1}>What plastics can be recycled?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.subSection}>
            <Text style={styles.H1}>Ways to reduce waste</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.TopicWhole}>
        <View style={styles.Textcontainer1}>
          <Text style={styles.Text}>Toipc for you</Text>
          <TouchableOpacity>
            <Text style={styles.Text}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.Topiccontainer}>
          <TouchableOpacity style={styles.Topics}>
            <Text style={styles.H1}>Waste to artwork</Text>
            <Text style={styles.H2}>
              Artists use recycled and reused objects to make attractive pieces
              of contemporary art.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Topics}>
            <Text style={styles.H1}>Become a volunteer</Text>
            <Text style={styles.H2}>
              Artists use recycled and reuse object to make effective pieces of
              contemporary arts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Topics}>
            <Text style={styles.H1}>Waste to artwork</Text>
            <Text style={styles.H2}>
              Artists use recycled and reused objects to make attractive pieces
              of contemporary art.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Topics}>
            <Text style={styles.H1}>Become a volunteer</Text>
            <Text style={styles.H2}>
              Artists use recycled and reuse object to make effective pieces of
              contemporary arts
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  section: {
    height: 220,
    width: '100%',
    // borderWidth: 2,
    // borderColor: 'black',
    marginBottom: '10%',
  },

  Textcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  Text: {
    color: 'black',
  },

  subBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '90%',
    width: '100%',
    paddingTop: '3%',
  },

  subSection: {
    height: '100%',
    width: '45%',
    // borderWidth: 2,
    // bordercolor: 'black',
    borderRadius: 30,
    backgroundColor: 'gray',
    padding:'4%',
  },

  TopicWhole: {
    height: 1000,
    width: '100%',
    // borderWidth:2,
    // borderColor:'black'
  },

  Textcontainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  Topiccontainer: {
    height: '100%',
    width: '100%',
    marginTop: '6%',
  },

  Topics: {
    height: '20%',
    width: '100%',
    // borderWidth:2,
    // bordercolor:'black',
    marginBottom: '5%',
    backgroundColor: 'gray',
    borderRadius: 20,
  },
  H1: {
    color: 'black',
    fontSize: 20,
    padding: '4%',
  },
  H2: {
    color: 'black',
    fontSize: 15,
    padding: '4%',
  },
  H3: {},
});

export default LearnScreen;
