import { Button } from "@/components/ui/button"
import { getEpisode } from "@/src/service/episode"

type Props = {
	currentEpisodeNumber: number
}

export const EpisodePager = ({ currentEpisodeNumber }: Props) => {
	const prevEpisode = getEpisode(currentEpisodeNumber - 1)
	const nextEpisode = getEpisode(currentEpisodeNumber + 1)

	return (
		<div className="flex justify-between w-full">
			<Button disabled={!prevEpisode} className="select-none">
				<a
					id="prev-episode-link"
					href={!prevEpisode ? "#" : `/sample-viewer/${prevEpisode.number}`}
				>
					前のエピソード: {prevEpisode?.title || "なし"}
				</a>
			</Button>

			<Button disabled={!nextEpisode} className="place-items-end select-none">
				<a
					id="next-episode-link"
					href={!nextEpisode ? "#" : `/sample-viewer/${nextEpisode.number}`}
				>
					次のエピソード: {nextEpisode?.title || "なし"}
				</a>
			</Button>
		</div>
	)
}
