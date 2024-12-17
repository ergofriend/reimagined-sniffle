import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
	return (
		<div className="flex flex-col gap-4">
			<div className="prose">
				<h2>WebXR API Demo for Web Contents</h2>
				<p>
					{/* WebXR API を用いて、既存のWebコンテンツを没頭型VRモードで手軽に閲覧できるようにする方法を検討したデモサイトです。 */}
					This is a demo site that explores how to use the WebXR API to make
					existing web contents easily viewable in immersive VR mode.
				</p>
			</div>
			<h2 className="text-xl font-bold">Testing Page</h2>
			<Link href="/sample-viewer">
				<Card>
					<CardHeader>
						<CardTitle>Sample Novel Episode Viewer</CardTitle>
						<CardDescription>
							Without WebXR, There are pure Web2.0 features.
						</CardDescription>
					</CardHeader>
				</Card>
			</Link>
			<h2 className="text-xl font-bold">Methods</h2>
			<Link href="/method/aframe-link">
				<Card>
					<CardHeader>
						<CardTitle>A-Frame's link with HTMLMesh</CardTitle>
						<CardDescription>
							With HTMLMesh(Three.js) and link(in-VR navigation), <br /> Click
							the Button on the bottom right to try it out.
						</CardDescription>
					</CardHeader>
				</Card>
			</Link>
			<Link href="/method/aframe-link-html2canvas">
				<Card>
					<CardHeader>
						<CardTitle>A-Frame's link with html2canvas</CardTitle>
						<CardDescription>
							With html2canvas and link(in-VR navigation), <br /> Click the
							Button on the bottom right to try it out.
						</CardDescription>
					</CardHeader>
				</Card>
			</Link>
		</div>
	)
}
