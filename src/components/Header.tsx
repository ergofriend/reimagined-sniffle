export const Header = () => {
	return (
		<header className="flex flex-row items-center justify-between p-4 bg-background">
			<a href="/">
				<span className="text-2xl font-bold text-primary">Home</span>
			</a>
			<nav>
				{/* <ul className="flex flex-row gap-4 w-full">
					<li>
						<a href="/">articles</a>
					</li>
					<li>
						<a href="/">source</a>
					</li>
				</ul> */}
			</nav>
		</header>
	)
}
