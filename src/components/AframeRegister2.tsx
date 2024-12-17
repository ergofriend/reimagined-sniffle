"use client"

import "./AframeRegister.css"
import { useEffect, useState } from "react"
import {
	EPISODE_CONTENT_ID,
	NEXT_EPISODE_LINK_ID,
	PREV_EPISODE_LINK_ID,
} from "../util/document-id"

export const AframeRegister2 = () => {
	const [isClient, setIsClient] = useState(false)

	const [imgSrc, setImgSrc] = useState("")
	useEffect(() => {
		;(async () => {
			// await 1sec
			await new Promise((resolve) => setTimeout(resolve, 1000))

			const target = document.getElementById(EPISODE_CONTENT_ID)
			// get target element size
			// biome-ignore lint/style/noNonNullAssertion: noop
			const rect = target!.getBoundingClientRect()

			// @ts-ignore
			const data: HTMLCanvasElement = await window.html2canvas(target, {
				backgroundColor: "black",
				color: "white",
				width: rect.width,
			})
			// to aframe image plane texture
			const dataURL = data.toDataURL("image/jpeg")
			console.log("dataURL:", dataURL)

			setImgSrc(dataURL)
			setIsClient(true)
		})()
	}, [])

	const prevLink =
		(isClient &&
			document.getElementById(PREV_EPISODE_LINK_ID)?.getAttribute("href")) ||
		null
	const nextLink =
		(isClient &&
			document.getElementById(NEXT_EPISODE_LINK_ID)?.getAttribute("href")) ||
		null

	return (
		<div id="aframe-embedded">
			<script src="https://cdn.jsdelivr.net/npm/aframe@1.6.0/dist/aframe-master.min.js" />
			<script src="https://cdn.jsdelivr.net/npm/aframe-htmlmesh@2.3.0/build/aframe-html.min.js" />
			<script src="https://rawcdn.githack.com/aframevr/aframe/refs/heads/master/examples/showcase/link-traversal/js/components/aframe-tooltip-component.js" />
			<script src="https://rawcdn.githack.com/aframevr/aframe/refs/heads/master/examples/showcase/link-traversal/js/components/link-controls.js" />
			<script src="https://unpkg.com/aframe-environment-component@1.4.x/dist/aframe-environment-component.min.js" />
			<script src="https://cdn.jsdelivr.net/npm/aframe-html-shader@0.2.0/dist/aframe-html-shader.min.js" />
			<script src="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js" />
			{isClient && (
				// @ts-ignore
				<a-scene
					xr-mode-ui="enabled: true"
					embedded
					raycaster="far: 100; objects: [link];"
					cursor="rayOrigin: mouse"
				>
					{/* @ts-ignore */}
					<a-sky color="#000000" />
					{/* @ts-ignore */}
					{/* <a-sky color="#6EBAA7" /> */}
					{/* @ts-ignore */}
					{/* <a-entity
						html={`html:#${EPISODE_CONTENT_ID};cursor:#cursor;`}
						position="0 1.5 -0.7"
					/> */}
					{/* @ts-ignore */}
					<a-plane
						position="0 1.5 -1"
						width="1"
						height="3"
						src="#episode-content-img"
						roughness="1"
					/>
					{/* @ts-ignore */}
					{/* <a-plane
						width="5"
						height="5"
						rotation="-40 0 0"
						material={`shader:html; target: #${EPISODE_CONTENT_ID}`}
					/> */}
					{/* @ts-ignore */}
					<a-assets id="aframe-assets">
						<img
							id="thumbJapan"
							aria-label="img"
							crossOrigin="anonymous"
							src="https://cdn.aframe.io/link-traversal/thumbs/japan.png"
						/>
						<img
							id="thumbEgypt"
							aria-label="img"
							crossOrigin="anonymous"
							src="https://cdn.aframe.io/link-traversal/thumbs/egypt.png"
						/>
						<img id="episode-content-img" aria-label="img" src={imgSrc} />
						{/* @ts-ignore */}
					</a-assets>
					{prevLink && prevLink !== "#" && (
						//  @ts-ignore
						<a-link
							href={prevLink}
							position="-0.7 1.5 -1.0"
							image="#thumbJapan"
							scale="0.1 0.1 1"
						/>
					)}
					{nextLink && nextLink !== "#" && (
						//  @ts-ignore
						<a-link
							href={nextLink}
							position="0.7 1.5 -1.0"
							image="#thumbEgypt"
							scale="0.1 0.1 1"
						/>
					)}
					{/* @ts-ignore */}
				</a-scene>
			)}
		</div>
	)
}
