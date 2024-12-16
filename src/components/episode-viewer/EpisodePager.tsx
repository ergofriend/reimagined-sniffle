import { Button } from "@/components/ui/button"
import { getEpisode } from "@/src/service/episode"
import {
	NEXT_EPISODE_LINK_ID,
	PREV_EPISODE_LINK_ID,
} from "@/src/util/document-id"
import Link from "next/link"

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
				<Link
					id={PREV_EPISODE_LINK_ID}
					href={!prevEpisode ? "#" : `${basepath}/${prevEpisode.number}`}
				>
					Prev: {prevEpisode?.title || "none"}
				</Link>
			</Button>

			<Button disabled={!nextEpisode} className="place-items-end select-none">
				<Link
					id={NEXT_EPISODE_LINK_ID}
					href={!nextEpisode ? "#" : `${basepath}/${nextEpisode.number}`}
				>
					Next: {nextEpisode?.title || "none"}
				</Link>
			</Button>
		</div>
	)
}
