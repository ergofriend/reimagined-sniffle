import type { Metadata } from "next"
import "./globals.css"
import { Header } from "../components/Header"

export const metadata: Metadata = {
	title: "WebXR API Demo for Web Contents",
	description:
		"This is a demo site that explores how to use the WebXR API to make existing web contents easily viewable in immersive VR mode.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className="dark bg-background">
			<body className={"antialiased"}>
				<Header />
				<main className="p-4">{children}</main>
			</body>
		</html>
	)
}
