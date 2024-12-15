import { Button } from "@/components/ui/button"
import { getEpisode } from "@/src/service/episode"
import {
	NEXT_EPISODE_LINK_ID,
	PREV_EPISODE_LINK_ID,
} from "@/src/util/document-id"

type Props = {
	basepath: string
	currentEpisodeNumber: number
}

export const EpisodePager = ({ basepath, currentEpisodeNumber }: Props) => {
	const prevEpisode = getEpisode(currentEpisodeNumber - 1)
	const nextEpisode = getEpisode(currentEpisodeNumber + 1)

	return (
		<div className="flex justify-between w-full">
			<Button disabled={!prevEpisode} className="select-none">
				<a
					id={PREV_EPISODE_LINK_ID}
					href={!prevEpisode ? "#" : `${basepath}/${prevEpisode.number}`}
				>
					Prev: {prevEpisode?.title || "none"}
				</a>
			</Button>

			<Button disabled={!nextEpisode} className="place-items-end select-none">
				<a
					id={NEXT_EPISODE_LINK_ID}
					href={!nextEpisode ? "#" : `${basepath}/${nextEpisode.number}`}
				>
					Next: {nextEpisode?.title || "none"}
				</a>
			</Button>
		</div>
	)
}
