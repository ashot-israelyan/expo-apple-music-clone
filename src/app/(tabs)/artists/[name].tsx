import { Redirect, useLocalSearchParams } from 'expo-router';
import { useArtists } from '@/store/library';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { defaultStyles } from '@/styles';
import { screenPadding } from '@/constants/tokens';
import { ArtistTracksList } from '@/components/ArtistTracksList';

const ArtistDetailScreen = () => {
	const { name: artistName } = useLocalSearchParams<{ name: string }>();

	const artists = useArtists();

	const artist = artists.find((artist) => artist.name === artistName);

	if (!artist) {
		console.warn(`Artist ${artistName} not found!`);

		return <Redirect href={'/(tabs)/artists'} />;
	}

	return (
		<View style={defaultStyles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal }}
			>
				<ArtistTracksList artist={artist} />
			</ScrollView>
		</View>
	);
};

export default ArtistDetailScreen;
