import React from 'react';
import { View, Text,ScrollView } from 'react-native';
import privacy from '../content/privacy'
import TopNavigation from '../components/TopNavigation';
import NavigationBottom from '../components/NavigationBottom';


export default function PolicyScreen() {
    const screenName='Privacy Policy'
  return (
    <View style={{backgroundColor:'#021024',flex:1}}>
        <TopNavigation screenName={screenName}/>
        <ScrollView style={{top:100,marginHorizontal:20,height:'100%'}}>
    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10,color:'white' }}>
      Privacy Policy
    </Text>

    {privacy.map((section) => (
      <View key={section.key}>
        <Text style={{ fontWeight: 'bold', marginBottom: 5,color:'white' }}>{section.title}</Text>

        {Array.isArray(section.content) ? (
          section.content.map((subSection) => (
            <View key={subSection.key} style={{ margin:20 }}>
              <Text style={{ fontWeight: 'bold', marginBottom: 5,color:'white' }}>{subSection.title}</Text>
              <Text style={{color:'white'}}>{subSection.content}</Text>
            </View>
          ))
        ) : (
          <Text style={{color:'white'}}>{section.content}</Text>
        )}
      </View>
    ))}
    </ScrollView>
    <NavigationBottom/>
  </View>
  );
}
