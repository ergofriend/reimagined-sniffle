import { Button } from "@/components/ui/button"
import { EpisodeDescription } from "@/src/components/EpisodeDescription"
import { EpisodeViewer } from "@/src/components/episode-viewer/EpisodeViewer"
import { getAllEpisodes, getEpisode } from "@/src/service/episode"
import type { Metadata } from "next"

export async function generateStaticParams() {
	return getAllEpisodes().map((post) => ({
		number: `${post.number}`,
	}))
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ number: string }>
}): Promise<Metadata> {
	const number = (await params).number
	const episode = getEpisode(Number(number))
	return {
		title: `${episode?.title || "Not found"} - 擬似小説ページ`,
	}
}

export default async function Page({
	params,
}: {
	params: Promise<{ number: string }>
}) {
	const number = (await params).number
	const episode = getEpisode(Number(number))

	if (!episode) {
		return <div>Not found</div>
	}

	return (
		<div className="flex flex-col gap-4">
			<EpisodeDescription />
			<a href="/sample-viewer/">
				<Button variant={"outline"} className="w-full">
					一覧に戻る
				</Button>
			</a>
			<EpisodeViewer episode={episode} />
		</div>
	)
}
