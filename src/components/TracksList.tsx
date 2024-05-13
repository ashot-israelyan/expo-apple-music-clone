import { FlatList, FlatListProps, View } from 'react-native'
import { TracksListItem } from '@/components/TracksListItem'
import { FC } from 'react'
import { utilsStyles } from '@/styles'
import { Track } from 'react-native-track-player'

export type TracksListProps = Partial<FlatListProps<Track>> & {
	tracks: Track[]
}

const ItemDivider = () => (
	<View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 16 }} />
)

export const TracksList: FC<TracksListProps> = ({ tracks, ...flatlistProps }) => {
	return (
		<FlatList
			data={tracks}
			contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
			ListFooterComponent={ItemDivider}
			ItemSeparatorComponent={ItemDivider}
			renderItem={({ item: track }) => <TracksListItem track={track} />}
			{...flatlistProps}
		/>
	)
}
