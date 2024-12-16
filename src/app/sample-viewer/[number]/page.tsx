import { Button } from "@/components/ui/button"
import { EpisodeViewer } from "@/src/components/episode-viewer/EpisodeViewer"
import { getAllEpisodes, getEpisode } from "@/src/service/episode"
import Link from "next/link"

export async function generateStaticParams() {
	return getAllEpisodes().map((post) => ({
		number: `${post.number}`,
	}))
}

const BASEPATH = "/sample-viewer"

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
			<Link href={BASEPATH}>
				<Button variant={"outline"} className="w-full">
					Back to list
				</Button>
			</Link>
			<EpisodeViewer basepath={BASEPATH} episode={episode} />
		</div>
	)
}
