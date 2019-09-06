import * as rough from "../img/rough.png";

export class Images {
	// 背景画像
	rough = document.createElement("img");

	constructor() {
		// 画像読み込み
		this.rough.src = rough;
	}
}