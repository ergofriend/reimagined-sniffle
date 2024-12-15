import { EPISODE_CONTENT_ID } from "@/src/util/document-id"

type Props = {
	content: string
}

export const EpisodeContent = ({ content }: Props) => {
	return (
		<div
			id={EPISODE_CONTENT_ID}
			// biome-ignore lint/security/noDangerouslySetInnerHtml: ignore
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	)
}
