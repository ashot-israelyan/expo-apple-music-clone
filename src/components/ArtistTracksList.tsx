import { FC, useMemo } from 'react';
import { Artist } from '@/helpers/types';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigationSearch } from '@/hooks/useNavigationSearch';
import { trackTitleFilter } from '@/helpers/filter';
import { TracksList } from '@/components/TracksList';
import { defaultStyles } from '@/styles';
import { fontSize } from '@/constants/tokens';
import { generateTracksListId } from '@/helpers/miscellaneous';
import FastImage from 'react-native-fast-image';
import { unknownArtistImageUri } from '@/constants/images';
import { QueueControls } from '@/components/QueueControls';

export const ArtistTracksList: FC<{ artist: Artist }> = ({ artist }) => {
	const search = useNavigationSearch({
		searchBarOptions: {
			hideWhenScrolling: true,
			placeholder: 'Find in songs',
		},
	});

	const filteredArtistTracks = useMemo(() => {
		return artist.tracks.filter(trackTitleFilter(search));
	}, [artist.tracks, search]);

	return (
		<TracksList
			id={generateTracksListId(artist.name, search)}
			scrollEnabled={false}
			hideQueueControls={true}
			ListHeaderComponentStyle={styles.artistHeaderContainer}
			ListHeaderComponent={
				<View>
					<View style={styles.artworkImageContainer}>
						<FastImage
							source={{
								uri: unknownArtistImageUri,
								priority: FastImage.priority.high,
							}}
							style={styles.artistImage}
						/>
					</View>

					<Text numberOfLines={1} style={styles.artistNameText}>
						{artist.name}
					</Text>

					{search.length === 0 && (
						<QueueControls tracks={filteredArtistTracks} style={{ paddingTop: 24 }} />
					)}
				</View>
			}
			tracks={filteredArtistTracks}
		/>
	);
};

const styles = StyleSheet.create({
	artistHeaderContainer: {
		flex: 1,
		marginBottom: 32,
	},
	artworkImageContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		height: 200,
	},
	artistImage: {
		width: '60%',
		height: '100%',
		resizeMode: 'cover',
		borderRadius: 128,
	},
	artistNameText: {
		...defaultStyles.text,
		marginTop: 22,
		textAlign: 'center',
		fontSize: fontSize.lg,
		fontWeight: '800',
	},
});
