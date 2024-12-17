export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="flex flex-col gap-4">
			<div className="prose">
				<h2>A-Frame's link with html2canvas</h2>
				<ul>
					<li>
						The html2canvas may be a good solution for some websites for text
						wrapping.
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
