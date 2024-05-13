import { FlatList, FlatListProps, View } from 'react-native'
import library from '@/assets/data/library.json'
import { TracksListItem } from '@/components/TracksListItem'
import { FC } from 'react'
import { utilsStyles } from '@/styles'

export type TracksListProps = Partial<FlatListProps<unknown>>

const ItemDivider = () => (
	<View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 16 }} />
)

export const TracksList: FC<TracksListProps> = ({ ...flatlistProps }) => {
	return (
		<FlatList
			data={library}
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
