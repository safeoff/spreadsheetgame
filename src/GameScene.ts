import { Images } from "./Images";

export class GameScene {
	// 各画像と内部バッファ
	private images: Images;
	private buff = document.createElement("canvas");

	constructor() {
		// 画像読み込み
		this.images = new Images();

		// 内部バッファの幅と高さ
		this.buff.width = this.images.width;
		this.buff.height= this.images.height;
	}

	// ゲームの状態を更新する
	update(): void {
	}

	// 内部バッファに画像を描画する
	draw(): HTMLCanvasElement {
		const ctx = this.buff.getContext('2d');
		ctx.clearRect(0, 0, this.images.width, this.images.height);

		// debug: ラフを描画
		ctx.drawImage(this.images.rough, 0, 0, this.images.width, this.images.height);

		// debug: 左手をアニメーションさせてみる
		const leftPos = this.images.updateLeft();
		ctx.drawImage(this.images.left, leftPos[0], leftPos[1], leftPos[2], leftPos[3],
			leftPos[4], leftPos[5], leftPos[6], leftPos[7]);

		return this.buff;
	}
}