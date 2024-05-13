import { TouchableOpacity, View, ViewStyle } from 'react-native'
import { FC } from 'react'
import TrackPlayer, { useIsPlaying } from 'react-native-track-player'
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons'
import { colors } from '@/constants/tokens'

type PlayerButtonProps = {
	style?: ViewStyle
	iconSize?: number
}

export const PlayPauseButton: FC<PlayerButtonProps> = ({ style, iconSize }) => {
	const { playing } = useIsPlaying()

	return (
		<View style={[{ height: iconSize }, style]}>
			<TouchableOpacity
				activeOpacity={0.85}
				onPress={playing ? TrackPlayer.pause : TrackPlayer.play}
			>
				<FontAwesome name={playing ? 'pause' : 'play'} size={iconSize} color={colors.text} />
			</TouchableOpacity>
		</View>
	)
}

export const SkipToNextButton: FC<PlayerButtonProps> = ({ iconSize }) => {
	return (
		<TouchableOpacity activeOpacity={0.7} onPress={() => TrackPlayer.skipToNext()}>
			<FontAwesome6 name="forward" size={iconSize} color={colors.text} />
		</TouchableOpacity>
	)
}

export const SkipToPreviousButton: FC<PlayerButtonProps> = ({ iconSize }) => {
	return (
		<TouchableOpacity activeOpacity={0.7} onPress={() => TrackPlayer.skipToPrevious()}>
			<FontAwesome6 name="backward" size={iconSize} color={colors.text} />
		</TouchableOpacity>
	)
}
