import { useCallback, useEffect, useState } from 'react';
import TrackPlayer, { RepeatMode } from 'react-native-track-player';

export const useTrackPlayerRepeatMode = () => {
	const [repeatMode, setRepeatMode] = useState<RepeatMode>();

	const changeRepeatMode = useCallback(async (newRepeatMode: RepeatMode) => {
		await TrackPlayer.setRepeatMode(newRepeatMode);

		setRepeatMode(newRepeatMode);
	}, []);

	useEffect(() => {
		TrackPlayer.getRepeatMode().then(setRepeatMode);
	}, []);

	return { repeatMode, changeRepeatMode };
};
