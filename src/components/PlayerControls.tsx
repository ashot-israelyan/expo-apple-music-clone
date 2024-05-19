import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { FC } from 'react';
import TrackPlayer, { useIsPlaying } from 'react-native-track-player';
import { FontAwesome6 } from '@expo/vector-icons';
import { colors } from '@/constants/tokens';

type PlayerControlsProps = {
	style?: ViewStyle;
};

type PlayerButtonProps = {
	style?: ViewStyle;
	iconSize?: number;
};

export const PlayerControls: FC<PlayerControlsProps> = ({ style }) => {
	return (
		<View style={[styles.container, style]}>
			<View style={styles.row}>
				<SkipToPreviousButton />

				<PlayPauseButton />

				<SkipToNextButton />
			</View>
		</View>
	);
};

export const PlayPauseButton: FC<PlayerButtonProps> = ({ style, iconSize }) => {
	const { playing } = useIsPlaying();

	return (
		<View style={[{ height: iconSize }, style]}>
			<TouchableOpacity
				activeOpacity={0.85}
				onPress={playing ? TrackPlayer.pause : TrackPlayer.play}
			>
				<FontAwesome6 name={playing ? 'pause' : 'play'} size={iconSize} color={colors.text} />
			</TouchableOpacity>
		</View>
	);
};

export const SkipToNextButton: FC<PlayerButtonProps> = ({ iconSize }) => {
	return (
		<TouchableOpacity activeOpacity={0.7} onPress={() => TrackPlayer.skipToNext()}>
			<FontAwesome6 name="forward" size={iconSize} color={colors.text} />
		</TouchableOpacity>
	);
};

export const SkipToPreviousButton: FC<PlayerButtonProps> = ({ iconSize }) => {
	return (
		<TouchableOpacity activeOpacity={0.7} onPress={() => TrackPlayer.skipToPrevious()}>
			<FontAwesome6 name="backward" size={iconSize} color={colors.text} />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
});
