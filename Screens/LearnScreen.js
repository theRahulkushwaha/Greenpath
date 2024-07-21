import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const LearnScreen = () => {
  const [myData, setMyData] = useState(null);

  useEffect(() => {
    getDatabase();
  }, []);

  const getDatabase = async () => {
    try {
      const data = await firestore().collection('users').doc('100').get();
      setMyData(data.data()); // Use data() method to get the document data
      console.log(data.data());
    } catch (error) {
      console.log(error); // Log the error object
    }
  };

  return (
    <View style={{backgroundColor:'blue'}}>
      <Text style={{ color: 'red' }}>Name: {myData ? myData.Name : 'Loading....'}</Text>
      <Text style={{ color: 'red' }}>Age: {myData ? myData.Age : 'Loading....'}</Text>
      <Text style={{ color: 'red' }}>LearnScreen</Text>
    </View>
  );
};

export default LearnScreen;
