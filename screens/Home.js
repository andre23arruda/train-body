import React from 'react'
import { StyleSheet, Dimensions, ScrollView } from 'react-native'
import { Block, theme } from 'galio-framework'

import articles from '../constants/articles'
import NoImageCard from '../components/NoImageCard'
const { width } = Dimensions.get('screen')

export default function Home() {
	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			contentContainerStyle={styles.home}
		>
			<NoImageCard hasBorder={ true }/>

			<NoImageCard hasBorder={ true }/>

			<NoImageCard hasBorder={ true }/>

			<NoImageCard hasBorder={ true }/>

			<NoImageCard hasBorder={ false }/>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
    home: {
        width: width,
		padding: theme.SIZES.BASE,
		paddingTop: 30
    },
})
