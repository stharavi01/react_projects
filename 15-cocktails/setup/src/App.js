import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";
function App() {
	return (
		<div>
			<h2>app component</h2>
			<h4>hello world</h4>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
				doloremque id consequatur minus enim similique obcaecati accusantium
				placeat nobis mollitia nam, quos repudiandae quo magnam maxime
				architecto reiciendis neque unde.
			</p>
		</div>
	);
}

export default App;
