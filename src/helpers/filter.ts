export const trackTitleFilter = (title: string) => (track: any) => {
	return track.title?.toLowerCase().includes(title.toLowerCase())
}
