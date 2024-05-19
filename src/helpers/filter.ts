import { Track } from 'react-native-track-player';
import { Artist } from '@/helpers/types';

export const trackTitleFilter = (title: string) => (track: Track) => {
	return track.title?.toLowerCase().includes(title.toLowerCase());
};

export const artistNameFilter = (name: string) => (artist: Artist) =>
	artist.name.toLowerCase().includes(name.toLowerCase());
