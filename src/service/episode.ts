import type { Episode } from "../models/episode"
import { episodeList } from "../util/episode-data"

export const getAllEpisodes = (): Episode[] => episodeList

export const getEpisode = (number: number): Episode | null =>
	episodeList.find((episode) => episode.number === number) ?? null
