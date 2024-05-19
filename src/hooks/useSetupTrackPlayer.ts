import TrackPlayer, { Capability, RatingType, RepeatMode } from 'react-native-track-player';
import { useEffect, useRef } from 'react';

const setupPlayer = async () => {
	await TrackPlayer.setupPlayer({
		maxCacheSize: 1024 * 10,
	});

	await TrackPlayer.updateOptions({
		ratingType: RatingType.Heart,
		capabilities: [
			Capability.Play,
			Capability.Pause,
			Capability.SkipToNext,
			Capability.SkipToPrevious,
			Capability.Stop,
		],
	});

	await TrackPlayer.setVolume(0.3);
	await TrackPlayer.setRepeatMode(RepeatMode.Queue);
};

export const useSetupTrackPlayer = ({ onLoad }: { onLoad?: () => void }) => {
	const isInitialized = useRef(false);

	useEffect(() => {
		if (!isInitialized.current) {
			setupPlayer()
				.then(() => {
					isInitialized.current = true;
					onLoad?.();
				})
				.catch((error) => {
					isInitialized.current = false;
					console.error(error);
				});
		}
	}, [onLoad]);
};
