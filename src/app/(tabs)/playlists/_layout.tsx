import { View } from 'react-native'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'

const PlaylistScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen name="index" options={{ headerTitle: 'Playlists' }} />
			</Stack>
		</View>
	)
}

export default PlaylistScreenLayout
