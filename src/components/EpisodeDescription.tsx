export const EpisodeDescription = () => {
	return (
		<div className="flex flex-col gap-2">
			<h1 className="text-2xl font-bold">擬似小説ページ</h1>
			<h2 className="text-lg font-bold">銀河鉄道の夜 - 宮沢賢治</h2>
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
	)
}
