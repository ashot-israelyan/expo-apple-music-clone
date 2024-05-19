import { useLocalSearchParams, useRouter } from 'expo-router';
import { useHeaderHeight } from '@react-navigation/elements';
import { useQueue } from '@/store/queue';
import TrackPlayer, { Track } from 'react-native-track-player';
import { usePlaylists, useTracks } from '@/store/library';
import { Playlist } from '@/helpers/types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { defaultStyles } from '@/styles';
import { screenPadding } from '@/constants/tokens';
import { PlaylistsList } from '@/components/PlaylistsList';

const AddToPlaylistModal = () => {
	const router = useRouter();
	const headerHeight = useHeaderHeight();

	const { activeQueueId } = useQueue();

	const { trackUrl } = useLocalSearchParams<{ trackUrl: Track['url'] }>();

	const tracks = useTracks();

	const { playlists, addToPlaylist } = usePlaylists();

	const track = tracks.find((currentTrack) => trackUrl === currentTrack.url);

	if (!track) {
		return null;
	}

	const availablePlaylists = playlists.filter(
		(playlist) => !playlist.tracks.some((playlistTrack) => playlistTrack.url === track.url),
	);

	const handlePlaylistPress = async (playlist: Playlist) => {
		addToPlaylist(track, playlist.name);

		router.dismiss();

		if (activeQueueId?.startsWith(playlist.name)) {
			await TrackPlayer.add(track);
		}
	};

	return (
		<SafeAreaView style={[styles.modalContainer, { paddingTop: headerHeight }]}>
			<PlaylistsList playlists={availablePlaylists} onPlaylistPress={handlePlaylistPress} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	modalContainer: {
		...defaultStyles.container,
		paddingHorizontal: screenPadding.horizontal,
	},
});

export default AddToPlaylistModal;
