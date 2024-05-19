import { Track } from 'react-native-track-player';
import { Artist, Playlist } from '@/helpers/types';

export const trackTitleFilter = (title: string) => (track: Track) => {
	return track.title?.toLowerCase().includes(title.toLowerCase());
};

export const artistNameFilter = (name: string) => (artist: Artist) =>
	artist.name.toLowerCase().includes(name.toLowerCase());

export const playlistNameFilter = (name: string) => (playlist: Playlist) =>
	playlist.name.toLowerCase().includes(name.toLowerCase());
