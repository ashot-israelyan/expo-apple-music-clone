import { FlatList, FlatListProps, Text, View } from 'react-native';
import { TracksListItem } from '@/components/TracksListItem';
import { FC } from 'react';
import { utilsStyles } from '@/styles';
import TrackPlayer, { Track } from 'react-native-track-player';
import FastImage from 'react-native-fast-image';
import { unknownTrackImageUri } from '@/constants/images';

export type TracksListProps = Partial<FlatListProps<Track>> & {
	tracks: Track[];
};

const ItemDivider = () => (
	<View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 16 }} />
);

export const TracksList: FC<TracksListProps> = ({ tracks, ...flatlistProps }) => {
	const handleTrackSelect = async (track: Track) => {
		await TrackPlayer.load(track);
		await TrackPlayer.play();
	};

	return (
		<FlatList
			data={tracks}
			contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
			ListFooterComponent={ItemDivider}
			ItemSeparatorComponent={ItemDivider}
			ListEmptyComponent={
				<View>
					<Text style={utilsStyles.emptyContentText}>No songs found</Text>
					<FastImage
						source={{ uri: unknownTrackImageUri, priority: FastImage.priority.normal }}
						style={utilsStyles.emptyContentImage}
					/>
				</View>
			}
			renderItem={({ item: track }) => (
				<TracksListItem track={track} onTrackSelect={handleTrackSelect} />
			)}
			{...flatlistProps}
		/>
	);
};
