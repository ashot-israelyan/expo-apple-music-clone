import { FlatList, FlatListProps, View } from 'react-native'
import { TracksListItem } from '@/components/TracksListItem'
import { FC } from 'react'
import { utilsStyles } from '@/styles'

export type TracksListProps = Partial<FlatListProps<unknown>> & {
	tracks: any[]
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
			renderItem={({ item: track }) => (
				<TracksListItem
					track={{
						...track,
						image: track.artwork,
					}}
				/>
			)}
			{...flatlistProps}
		/>
	)
}
