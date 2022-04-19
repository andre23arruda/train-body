import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import { argonTheme } from '../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../constants/colors';

export default function NoImageCard({ hasBorder }) {
  return (
    <View style={ hasBorder ? styles.cardContainer : {} }>
      <TouchableOpacity>
        <Text style={ styles.title }>Just warm up</Text>
        <Text style={ styles.description }>Just warm up ust warm up</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
    marginBottom: 20,
  },

  title: {
    fontFamily: 'ConfortaaBold',
    fontSize: 22,
    color: colors.gray3,
  },

  description: {
    fontFamily: 'ConfortaaLight',
    fontSize: 18,
    color: colors.gray2,
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 10,

  },

});
