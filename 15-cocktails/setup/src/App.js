import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";
import Cocktail from "./components/Cocktail";
function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/cocktail/:id">
					<Cocktail />
				</Route>
				<Route path="*">
					<Error />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
