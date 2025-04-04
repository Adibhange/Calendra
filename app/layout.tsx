import type { Metadata } from "next";
import { Montserrat, Exo_2 } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
	display: "swap",
});

const exo2 = Exo_2({
	subsets: ["latin"],
	variable: "--font-exo2",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Calendra - Effortless Scheduling, Simplified",
	description:
		"Calendra is your smart, easy-to-use scheduling platform. Share availability, book meetings, and manage time seamlessly — all in one place.",
	icons: {
		icon: "/Short-Logo.png",
	},
	authors: [{ name: "Aditya Bhange" }],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${montserrat.variable} ${exo2.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
