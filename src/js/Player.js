import {
	c, playerImage, platforms, player, canvas, gravity, spikes, coins
}
from './canvas';
export let coin1 = false
let { coins_got } = require('./canvas')
export class Player {
	constructor() {
		this.position = {
			x: 100,
			y: 100,
		};
		this.velocity = {
			x: 0,
			y: 0
		};
		this.width = 64;
		this.height = 64;
		this.speed = 10;

	}
	draw() {
		c.drawImage(playerImage, this.position.x, this.position.y);

	}
	collidesWith(what) {
		if (what === 'platform') {
			platforms.forEach((platform) => {
				if (player.position.y + player.height <= platform.position.y &&
					player.position.y + player.height + player.velocity.y >= platform.position
					.y &&
					player.position.x + player.width >= platform.position.x &&
					player.position.x <= platform.position.x + platform.width) {
					console.log('Player collidesWith platform');
					return true;
				}
			})

		} else if (what === 'spike') {
			let dead = false
			spikes.forEach((spike) => {
				if (player.position.y + player.height - 30 >= spike.position.y &&
					player.position.y + player.height + player.velocity.y - 30 >= spike.position
					.y &&
					player.position.x + player.width >= spike.position.x &&
					player.position.x <= spike.position.x + spike.width) {
					console.log('Player collidesWith spike')
					dead = true
				}
			})
			if (dead) return true
		} else if (what === 'coin') {

			coins.forEach((coin) => {
				if (player.position.y + player.height - 30 >= coin.position.y &&
					player.position.y + player.height + player.velocity.y - 30 >= coin.position
					.y &&
					player.position.x + player.width >= coin.position.x &&
					player.position.x <= coin.position.x + coin.width) {
					coin1 = true
					coin.position.x +=50000
					coin.position.y += 50000
					//Does not work sadly.
					//c.clearRect(coin.position.x, coin.position.y, coin.image.width, coin.image.height)
				}
			})
			if (coin1) return true
			else if (coin1) coin1 = falses
		}
	}
	update() {
		this.draw()
		this.position.y += this.velocity.y;
		this.position.x += this.velocity.x;
		if (this.position.y + this.height + this.velocity.y <= canvas.height)
			this.velocity.y += gravity;

	}
}
