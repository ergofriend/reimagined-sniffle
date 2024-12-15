import type { Episode } from "@/src/models/episode"
import { EpisodeContent } from "./EpisodeContent"
import { EpisodePager } from "./EpisodePager"

type Props = {
	basepath: string
	episode: Episode
}

export const EpisodeViewer = ({ basepath, episode }: Props) => {
	return (
		<div className="flex flex-col gap-4">
			<EpisodePager basepath={basepath} currentEpisodeNumber={episode.number} />
			<EpisodeContent content={episode.content} />
		</div>
	)
}
