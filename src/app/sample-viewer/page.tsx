import { EpisodeDescription } from "@/src/components/EpisodeDescription"
import { getAllEpisodes } from "@/src/service/episode"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "目次 - 擬似小説ページ",
}

export default function Page() {
	const episodes = getAllEpisodes()
	return (
		<div className="flex flex-col gap-4">
			<EpisodeDescription />

			<h2 className="text-lg font-bold">エピソード一覧</h2>

			<div className="flex flex-col gap-2">
				{episodes.map((episode) => (
					<a key={episode.number} href={`/sample-viewer/${episode.number}`}>
						<div className="flex items-center space-x-4 rounded-md border p-4 hover:bg-card hover:border-primary">
							<div className="flex-1 space-y-1">
								<p className="text-sm font-medium leading-none">
									{episode.title}
								</p>
							</div>
						</div>
					</a>
				))}
			</div>
		</div>
	)
}
