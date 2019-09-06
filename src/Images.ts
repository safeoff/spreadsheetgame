import * as rough from "../img/rough.png";
import * as left from "../img/left.png";

export class Images {
	// 背景画像
	rough = document.createElement("img");
	left = document.createElement("img");

	// canvasの幅と高さと拡大率
	width = window.innerWidth;
	height = this.width * 1.5;
	scale = this.width / 480;

	leftTime = 59;

	constructor() {
		// 画像読み込み
		this.rough.src = rough;
		this.left.src = left;
	}

	getLeftPos(): number[] {
		// ソースのx,y,w,h,canvasのx,y,w,h
		let a = new Array();
		a.push(Math.floor(this.leftTime / 30) * 53);
		a.push(0);
		a.push(53);
		a.push(53);
		a.push(111 * this.scale);
		a.push(453 * this.scale);
		a.push(53 * this.scale);
		a.push(53 * this.scale);
		return a;
	}

	updateLeftTime(): void {
		this.leftTime += (this.leftTime > 0) ? -1 : 59;
	}
}