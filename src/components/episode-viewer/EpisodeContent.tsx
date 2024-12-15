type Props = {
	content: string
}

export const EpisodeContent = ({ content }: Props) => {
	// biome-ignore lint/security/noDangerouslySetInnerHtml: ignore
	return <div dangerouslySetInnerHTML={{ __html: content }} />
}
