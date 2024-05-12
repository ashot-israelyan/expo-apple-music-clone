import { View } from 'react-native'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { StackScreenWithSearchBar } from '@/constants/layout'

const FavoritesScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{ ...StackScreenWithSearchBar, headerTitle: 'Favorites' }}
				/>
			</Stack>
		</View>
	)
}

export default FavoritesScreenLayout
