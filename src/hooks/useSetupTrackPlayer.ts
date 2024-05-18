import TrackPlayer, { RepeatMode } from 'react-native-track-player';
import { useEffect, useRef } from 'react';

const setupPlayer = async () => {
	await TrackPlayer.setupPlayer({
		maxCacheSize: 1024 * 10,
	});

	await TrackPlayer.setVolume(0.03);
	await TrackPlayer.setRepeatMode(RepeatMode.Queue);
};

export const useSetupTrackPlayer = ({ onLoad }: { onLoad?: () => void }) => {
	const isInitialized = useRef(false);

	useEffect(() => {
		setupPlayer()
			.then(() => {
				isInitialized.current = true;
				onLoad?.();
			})
			.catch((error) => {
				isInitialized.current = false;
				console.error(error);
			});
	}, [onLoad]);
};
