import { getAllEpisodes } from "@/src/service/episode"

const BASEPATH = "/method/aframe-link"

export default function Page() {
	const episodes = getAllEpisodes()
	return (
		<div className="flex flex-col gap-4">
			<h2 className="text-lg font-bold">Table of Contents</h2>
			<div className="flex flex-col gap-2">
				{episodes.map((episode) => (
					<a key={episode.number} href={`${BASEPATH}/${episode.number}`}>
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