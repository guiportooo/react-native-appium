import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {testProps} from '../helpers/testProps';

type Props = {
  number: number;
  text: string;
};

const Task = ({number, text}: Props) => (
  <View style={styles.item}>
    <View style={styles.itemsLeft}>
      <View style={styles.square} />
      <Text style={styles.itemText} {...testProps(`text_${number}`)}>
        {text}
      </Text>
    </View>
    <View style={styles.circular} />
  </View>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 14,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;
