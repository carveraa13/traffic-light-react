import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
// import { useState } from "react";

//create your first component
export function Home() {
	const [colorSelect, colfun] = useState("");
	const redSelected = colorSelect == "red" ? "selected" : "";
	const yellowSelected = colorSelect == "yellow" ? "selected" : "";
	const greenSelected = colorSelect == "green" ? "selected" : "";

	return (
		<div className="text-center m-5">
			<div id="trafficBody">
				<div
					className={"light red " + redSelected}
					onClick={() => colfun("red")}></div>
				<div
					className={"light yellow " + yellowSelected}
					onClick={() => colfun("yellow")}></div>
				<div
					className={"light green " + greenSelected}
					onClick={() => colfun("green")}></div>
			</div>
		</div>
	);
}
