class Main {
	private readonly canvas: HTMLCanvasElement;
	private readonly ctx: CanvasRenderingContext2D;

	// タイマーイベント開始
	constructor() {
		this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.ctx = this.canvas.getContext('2d');
		window.requestAnimationFrame(() => this.draw());
	}

	// 更新と描画
	draw() {
		// update
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.fillStyle = "rgb(233, 214, 178)";
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
		// roop
		window.requestAnimationFrame(() => this.draw());
	}
}

window.onload = function() {
	new Main();
}