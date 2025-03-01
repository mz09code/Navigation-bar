import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Navigation using nextjs and tailwindcss</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/pro.ico" />
			</Head>
			<Navbar />
			
		</div>
	);
}
