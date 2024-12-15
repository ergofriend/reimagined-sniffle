export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="flex flex-col gap-4">
			<div className="prose">
				<h2>A-Frame's link</h2>
				<ul>
					<li>
						Three.js's HTMLMesh cannot wrap text, so it is difficult to handle
						existing websites.
						<details>
							<ul>
								<li>
									<a href="https://github.com/AdaRoseCannon/aframe-htmlmesh/pull/11">
										Implement text wrapping by vincentfretin · Pull Request #11
										· AdaRoseCannon&#x2F;aframe-htmlmesh
									</a>
								</li>
								<li>
									<a href="https://github.com/mrdoob/three.js/pull/24781">
										HTMLMesh: added textNode wrapping by jrjdavidson · Pull
										Request #24781 · mrdoob&#x2F;three.js
									</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						{/* Among all platforms, the Oculus Browser on Quest is the only working
						browser. */}
						ONLY the Oculus Browser on Quest can keep VR mode in navigation.
						<details title="References">
							<p>References</p>
							<ul>
								<li>
									<a href="https://aframe.io/docs/1.6.0/components/link.html#main">
										link – A-Frame
									</a>
								</li>
								<li>
									<a href="https://developer.picoxr.com/document/web/development-platform/#:~:text=The%20upcoming%20supported%20WebXR%20standards%20are%3A">
										PICO Browser | PICO Developer
									</a>
								</li>
							</ul>
						</details>
					</li>
				</ul>
			</div>

			{children}
		</div>
	)
}
