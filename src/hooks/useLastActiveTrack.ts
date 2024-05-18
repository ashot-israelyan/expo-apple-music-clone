import { Track, useActiveTrack } from 'react-native-track-player';
import { useEffect, useState } from 'react';

export const useLastActiveTrack = () => {
	const activeTrack = useActiveTrack();
	const [lastActiveTrack, setLastActiveTrack] = useState<Track>();

	useEffect(() => {
		if (activeTrack) {
			setLastActiveTrack(activeTrack);
		}
	}, [activeTrack]);

	return lastActiveTrack;
};
