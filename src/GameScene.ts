import { Images } from "./Images";

export class GameScene {
	// 各画像と内部バッファ
	private Images: Images;
	private buff = document.createElement("canvas");

	// canvasの幅と高さ
	width = window.innerWidth;
	height = this.width * 1.5;

	// debug param
	private debug = 0;

	constructor() {
		// 画像読み込み
		this.Images = new Images();

		// 内部バッファの幅と高さ
		this.buff.width = this.width;
		this.buff.height= this.height;
	}

	// ゲームの状態を更新する
	update(): void {
		// debug: 0-100でループ
		this.debug += (this.debug < 100) ? 1 : -100;
	}

	// 内部バッファに画像を描画する
	draw(): HTMLCanvasElement {
		const ctx = this.buff.getContext('2d');
		ctx.clearRect(0, 0, this.width, this.height);

		// debug: ラフを描画。更新テストのためにアニメーションさせてみる。
		ctx.drawImage(this.Images.rough, this.debug, 0, this.width, this.height);

		return this.buff;
	}
}