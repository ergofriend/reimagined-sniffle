import type { Episode } from "@/src/models/episode"
import { EpisodeContent } from "./EpisodeContent"
import { EpisodePager } from "./EpisodePager"

type Props = {
	episode: Episode
}

export const EpisodeViewer = ({ episode }: Props) => {
	return (
		<div className="flex flex-col gap-4">
			<EpisodePager currentEpisodeNumber={episode.number} />
			<EpisodeContent content={episode.content} />
			<EpisodePager currentEpisodeNumber={episode.number} />
		</div>
	)
}
