import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import "./index.css";
import "../Components/Navbar/style.css";
import "./i18n.js";

// Lazy yüklenen bileşenler
const NotFound = lazy(() => import("../Pages/NotFound/NotFound"));
const Entry = lazy(() => import("../Pages/Entry/Entry"));
const Contact = lazy(() => import("../Pages/Contact/Contact"));
const About = lazy(() => import("../Pages/About/About"));
const Home = lazy(() => import("../Pages/Home/Home"));
const Skills = lazy(() => import("../Pages/Skills/Skills"));

createRoot(document.getElementById("root")).render(
	<div className="w-full h-full relative">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			className="absolute w-full h-full inset-0"
		>
			<filter id="n" x="0" y="0">
				<feTurbulence
					type="fractalNoise"
					baseFrequency="0.5"
					stitchTiles="stitch"
				/>
			</filter>
			<rect width="100%" height="100%" fill="#000" />
			<rect width="100%" height="100%" filter="url(#n)" opacity="0.15" />
		</svg>
		
		{/* Suspense ile bileşenleri sarıyoruz, fallback ile yüklenirken ne gösterileceğini belirliyoruz */}
		<Suspense fallback={<div>Yükleniyor...</div>}>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Entry />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/home" element={<Home />} />
					<Route path="/skills" element={<Skills />} />
				</Routes>
			</BrowserRouter>
		</Suspense>
	</div>
);
