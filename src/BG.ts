import * as BGimg from "../img/rough.png";

export class BG {
	// canvas幅
	width = window.innerWidth;
	// canvas高さ
	height = this.width * 1.5;
	// 背景画像
	private BGimg = document.createElement("img");
	// 内部バッファ
	private buff = document.createElement("canvas");

	constructor() {
		// 画像読み込み
		this.BGimg.src = BGimg;
		// 内部バッファ
		this.buff.width = this.width;
		this.buff.height= this.height;
	}

	getBGimg(): HTMLCanvasElement {
		return this.buff;
	}

	drawBG(): void {
		const ctx = this.buff.getContext('2d');
		ctx.drawImage(this.BGimg, 0, 0, this.width, this.height);
	}
}