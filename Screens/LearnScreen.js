import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

const LearnScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.heading}>Introduction</Text>
        <Text style={styles.paragraph}>
          Waste management is a crucial aspect of maintaining a sustainable environment. It involves the collection, transportation, processing, recycling, and disposal of waste materials. Effective waste management helps in reducing the adverse effects of waste on health, environment, and aesthetics. In this essay, we will discuss the importance of waste management, various methods, and the role of individuals and governments in ensuring proper waste management.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Importance of Waste Management</Text>
        <Text style={styles.paragraph}>
          The significance of waste management cannot be overstated. It plays a pivotal role in maintaining the health of the environment and the population. Improper waste management can lead to severe environmental issues, such as air and water pollution, and can contribute to climate change. Additionally, it poses health risks by breeding vectors like mosquitoes and rats, which can cause diseases.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Methods of Waste Management</Text>
        <Text style={styles.paragraph}>
          There are several methods employed in waste management, each with its own benefits and drawbacks. The primary methods include:
        </Text>
        <Text style={styles.subHeading}>Landfilling</Text>
        <Text style={styles.paragraph}>
          This is the most common method of waste disposal, where waste is buried in landfills. Although it is a straightforward method, it has significant environmental impacts, such as the release of methane gas and potential groundwater contamination.
        </Text>
        <Text style={styles.subHeading}>Incineration</Text>
        <Text style={styles.paragraph}>
          This involves burning waste at high temperatures, reducing its volume and sometimes generating energy. However, incineration can produce toxic emissions and ash, requiring careful handling.
        </Text>
        <Text style={styles.subHeading}>Recycling</Text>
        <Text style={styles.paragraph}>
          Recycling involves converting waste materials into new products, reducing the need for raw materials and energy. It is an effective method to manage waste and conserve resources, but it requires proper segregation of waste at the source.
        </Text>
        <Text style={styles.subHeading}>Composting</Text>
        <Text style={styles.paragraph}>
          Organic waste can be composted to produce nutrient-rich soil amendments. This method is beneficial for managing organic waste and enriching soil health.
        </Text>
        <Text style={styles.subHeading}>Waste Reduction</Text>
        <Text style={styles.paragraph}>
          Reducing the amount of waste generated is the most effective way to manage waste. This can be achieved through practices like reusing items, buying in bulk, and opting for products with minimal packaging.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Role of Individuals and Governments</Text>
        <Text style={styles.paragraph}>
          Both individuals and governments play a vital role in waste management. Individuals can contribute by practicing waste segregation, reducing waste generation, and participating in recycling programs. Governments, on the other hand, can implement policies and regulations to ensure proper waste management. They can also invest in infrastructure, such as recycling facilities and waste treatment plants, and conduct awareness campaigns to educate the public about the importance of waste management.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Conclusion</Text>
        <Text style={styles.paragraph}>
          In conclusion, waste management is essential for protecting the environment and public health. It requires a collaborative effort from individuals, communities, and governments. By adopting sustainable waste management practices, we can mitigate the adverse effects of waste, conserve natural resources, and ensure a cleaner and healthier environment for future generations.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'black'
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 4,
    color:'black'
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    color:'black'
  },
});

export default LearnScreen;
