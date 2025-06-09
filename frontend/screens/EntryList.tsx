import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { getEntries } from '../services/api';

export default function EntryList() {
    const [entries, setEntries] = useState<Entry[]>([]);

    type Entry = {
        id: string;
        title: string;
        content: string;
        date?: string;
        photoUrl?: string;
        location?: {
            latitude: number;
            longitude: number;
        };
    };

    useEffect(() => {
        getEntries().then(setEntries);
    }, []);

    return (
        <ScrollView>
            {entries.map((entry, idx) => (
                <View key={idx} style={styles.container}>
                    <Text style={styles.container}>{entry.title}</Text>
                    <Text style={styles.container}>{entry.content}</Text>
                </View>
            ))}
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#eaeaea',
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: '#20232a',
        borderRadius: 6,
        backgroundColor: '#61dafb',
        color: '#20232a',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
});