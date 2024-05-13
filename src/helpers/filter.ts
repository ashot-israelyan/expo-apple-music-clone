import { Track } from 'react-native-track-player'

export const trackTitleFilter = (title: string) => (track: Track) => {
	return track.title?.toLowerCase().includes(title.toLowerCase())
}
