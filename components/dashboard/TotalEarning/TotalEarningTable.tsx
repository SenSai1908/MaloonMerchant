import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { Colors } from '../../../constants/Colors';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


export default function TotalEarningTable() {
  const dashboardlist = [
    {
      id: 1,
      name: 'Add Offline Earning',
      icon: require('./../../../assets/images/earning.png'),
      path: '/dashboardmenu/Currentbookings',
    },
  ];

  const router = useRouter();

  const earningsData = [
    { id: '1', name: 'Sai', date: '2024-07-10', amount: '$100' },
    { id: '2', name: 'Virat', date: '2024-07-11', amount: '$150' },
    { id: '3', name: 'Parth', date: '2024-07-12', amount: '$200' },
    { id: '4', name: 'Parth', date: '2024-07-12', amount: '$200' },
    { id: '5', name: 'Parth', date: '2024-07-12', amount: '$200' },
    { id: '6', name: 'Parth', date: '2024-07-12', amount: '$200' },
    { id: '7', name: 'Parth', date: '2024-07-12', amount: '$200' },
    { id: '8', name: 'Parth', date: '2024-07-12', amount: '$200' },
    { id: '9', name: 'Parth', date: '2024-07-12', amount: '$200' },
    { id: '10', name: 'Parth', date: '2024-07-12', amount: '$200' },
    { id: '11', name: 'Parth', date: '2024-07-12', amount: '$200' },
    { id: '12', name: 'Parth', date: '2024-07-12', amount: '$200' },
  ];

  const totalAmount = earningsData.reduce((sum, item) => {
    return sum + parseFloat(item.amount.replace('$', ''));
  }, 0);

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.id}</Text>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>{item.amount}</Text>
    </View>
  );

  const onButtonClick = (item) => {
    router.push(item.path);
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
      
        <FlatList
          data={dashboardlist}
          numColumns={1}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => onButtonClick(item)}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                flex: 1,
                padding: 10,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#fff',
                margin: 10,
              }}
            >
              <Image
                source={item.icon}
                style={{
                  width: 95,
                  height: 95,
                }}
              />
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'outfit-medium',
                  fontSize: 24,
                  flex: 1,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total Amount:</Text>
          <Text style={styles.totalValue}>${totalAmount}</Text>
        </View>
        
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>CustID</Text>
          <Text style={styles.headerCell}>Name</Text>
          <Text style={styles.headerCell}>Date</Text>
          <Text style={styles.headerCell}>Amount</Text>
        </View>
        <FlatList
          data={earningsData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    padding: 10,
    backgroundColor: '#000',
    marginTop:10,
  },
  headerRow: {
    flexDirection: 'row',
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerCell: {
    flex: 1,
    color: '#fff',
    fontFamily: 'outfit-bold',
    backgroundColor: Colors.burntorrange,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cell: {
    flex: 1,
    color: '#fff',
    fontFamily: 'outfit',
  },
  totalRow: {
    flexDirection: 'row',
    marginTop: 16,
  },
  totalLabel: {
    flex: 1,
    color: '#fff',
    fontFamily: 'outfit-bold',
    fontSize:30
  },
  totalValue: {
    flex: 1,
    color: '#fff',
    fontFamily: 'outfit-bold',
    textAlign: 'right',
    fontSize:30
  },
});
