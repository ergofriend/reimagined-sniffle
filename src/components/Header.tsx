import Link from "next/link"

export const Header = () => {
	return (
		<header className="flex flex-row items-center justify-between p-4 bg-background">
			<Link href="/">
				<span className="text-2xl font-bold text-primary">Home</span>
			</Link>
			<nav>
				<ul className="flex flex-row gap-4 w-full">
					{/* <li>
						<a href="/">articles</a>
					</li> */}
					<li>
						<a
							href="https://github.com/ergofriend/reimagined-sniffle"
							target="_blank"
							rel="noreferrer"
							className="text-primary hover:underline"
						>
							source
						</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}
