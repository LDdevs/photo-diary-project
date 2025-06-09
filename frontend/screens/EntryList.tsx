import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { getEntries } from '../services/api';

export default function EntryList() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    getEntries().then(setEntries);
  }, []);

  return (
    <ScrollView>
      {entries.map((entry, idx) => (
        <View key={idx} className="p-4 border-b border-gray-300">
          <Text className="text-xl">{entry.title}</Text>
          <Text>{entry.content}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
