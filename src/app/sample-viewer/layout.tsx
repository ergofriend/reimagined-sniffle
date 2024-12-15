export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="flex flex-col gap-4">
			<div className="prose">
				<h2>Sample Novel Episode Viewer</h2>
				<p>
					This page recreates the paging function of a web novel site, based on
					data from&nbsp;
					<a href="https://www.aozora.gr.jp/cards/000081/card43737.html">
						Night On The Milky Way Train
					</a>
					&nbsp;available at&nbsp;
					<a href="https://www.aozora.gr.jp/">Aozora Bunko</a>.
				</p>
				<p>
					<a
						href="https://www.aozora.gr.jp/"
						className="text-primary hover:underline"
					>
						青空文庫
					</a>
					&nbsp;にある&nbsp;
					<a
						href="https://www.aozora.gr.jp/cards/000081/card43737.html"
						className="text-primary hover:underline"
					>
						図書カード：銀河鉄道の夜
					</a>
					&nbsp;のデータを元に、Web小説サイトのページング機能を再現したページです。
				</p>
			</div>

			{children}
		</div>
	)
}
