import { ScrollView, View } from 'react-native';
import { defaultStyles } from '@/styles';
import { TracksList } from '@/components/TracksList';
import { screenPadding } from '@/constants/tokens';
import { useNavigationSearch } from '@/hooks/useNavigationSearch';
import { useMemo } from 'react';
import { trackTitleFilter } from '@/helpers/filter';
import { useTracks } from '@/store/library';
import { generateTracksListId } from '@/helpers/miscellaneous';

const SongsScreen = () => {
	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in songs',
		},
	});

	const tracks = useTracks();

	const filteredTracks = useMemo(() => {
		if (!search) return tracks;

		return tracks.filter(trackTitleFilter(search));
	}, [search, tracks]);

	return (
		<View style={defaultStyles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{
					paddingHorizontal: screenPadding.horizontal,
				}}
			>
				<TracksList
					id={generateTracksListId('songs', search)}
					tracks={filteredTracks}
					scrollEnabled={false}
				/>
			</ScrollView>
		</View>
	);
};

export default SongsScreen;
