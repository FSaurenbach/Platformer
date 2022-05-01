export const canvas = document.querySelector('canvas')
canvas.width = innerWidth
canvas.height = innerHeight

export const c = canvas.getContext('2d')
export const gravity = 5
import background from '../img/background.png'
import hills from '../img/hills.png'
import platform from '../img/platform.png'
import player_img from '../img/player.png'
import {
	GenericObject
}
from './GenericObject'
import {
	KeyDown
}
from './KeyDown'
import {
	KeyUp
}
from './KeyUp'
import {
	Platform
}
from './Platform'
import {
	Player, coin1
}
from './Player'

import spike_img from '../img/spike.png'
import coin_img from '../img/coin.png'
import Spike from './Spike'
let space_pressed = 0
function createImage(imageSrc) {
	const image = new Image()
	image.src = imageSrc
	return image
}
let platformImage = createImage(platform)
export let playerImage = createImage(player_img)

export let player = new Player()
export let platforms = [
	new Platform(-1, 660, platformImage),
	new Platform(platformImage.width - 3, 660, platformImage),
	new Platform(platformImage.width * 2 + 100, 660, platformImage)

]
let coins_got = 0
export {coins_got}
let first_time = true
let won = false
export let spikes = [
	new Spike(0, 490, createImage(spike_img)),
]
export let coins = [
	new GenericObject(-1, -1, createImage(coin_img))
]
let genericObjects = [
	new GenericObject(-1, -1, createImage(background)),
	new GenericObject(-1, -1, createImage(hills))
]

let scrollOffset = 0

function init() {
	player = new Player()

	c.fillText(('$KDLKFLKLDKFLFKLDFKLFK', coins_got), 0,0)
	platforms = [
		new Platform(0, 660 - 50, platformImage),
		new Platform(100, 660 - 50, platformImage),
		new Platform(200, 660 - 50, platformImage),
		new Platform(400, 510 - 50, platformImage),
		new Platform(500, 510 - 50, platformImage),
		new Platform(600, 510 - 50, platformImage),
		new Platform(700, 510 - 50, platformImage),
		new Platform(975, 510 - 50, platformImage),
		new Platform(1075, 510 - 50, platformImage),
		new Platform(1175, 510 - 50, platformImage),
		new Platform(1275, 510 - 50, platformImage),
		new Platform(1575, 660 - 50, platformImage),
		new Platform(1675, 660 - 50, platformImage),
		new Platform(1775, 660 - 50, platformImage),

	]
	spikes = [
		new Spike(500, 410, createImage(spike_img))
	]
	coins = [
		new GenericObject(600, 420, createImage(coin_img))
	]
	genericObjects = [


		new GenericObject(-1, -1, createImage(background)),
		new GenericObject(-1 + 4048, -1, createImage(background)),
		new GenericObject(4047 + 4048, -1, createImage(background)),
		new GenericObject(8095 + 4048, -1, createImage(background)),
		new GenericObject(12143 + 4048, -1, createImage(background))


	]

	scrollOffset = 0
}
export const keys = {
	right: {
		pressed: false
	},
	left: {
		pressed: false
	}
}

function animate() {

	requestAnimationFrame(animate)
	c.fillStyle = 'black'
	c.fillRect(0, 0, canvas.width, canvas.height)
	if (player.collidesWith('spike')) {
		init()
	}
	if (player.collidesWith('coin') && coin1) {
		coins_got +=1
	}
	genericObjects.forEach(genericObjects => {
		genericObjects.draw()
	})
	spikes.forEach(spike => {
		spike.draw()
	})
	coins.forEach(coin => coin.draw())
	platforms.forEach(platform => {
		platform.draw()
	})
	player.update()

	if (first_time) {
		init()
		first_time = false
	}
	if ((keys.right.pressed && player.position.x < 400)) {

		player.velocity.x = 5

	} else if (keys.left.pressed && player.position.x > 100 || (keys.left.pressed &&
			scrollOffset === 0 && player.position.x > 50)) {

		player.velocity.x = -5
	} else {
		player.velocity.x = 0
		if (keys.right.pressed) {
			scrollOffset += player.speed
			platforms.forEach(platform => {
				platform.position.x -= player.speed
			})
			genericObjects.forEach(genericObject => {
				genericObject.position.x -= player.speed * .66
			})
			spikes.forEach(spike => {
				spike.position.x -= player.speed
			})
			coins.forEach(coin => {
				coin.position.x -= player.speed
			})

		} else if (keys.left.pressed && scrollOffset > 4) {
			scrollOffset -= player.speed * .66
			platforms.forEach(platform => {
				platform.position.x += player.speed
			})
			genericObjects.forEach(genericObject => {
				genericObject.position.x += player.speed * .66
			})
			coins.forEach(coin => {
				coin.position.x += player.speed * .66
			})
			spikes.forEach(spike => {
				spike.position.x += player.speed
			})

		}
	}
	platforms.forEach((platform) => {
		if (player.position.y + player.height <= platform.position.y &&
			player.position.y + player.height + player.velocity.y >= platform.position
			.y &&
			player.position.x + player.width >= platform.position.x &&
			player.position.x <= platform.position.x + platform.width) {
			player.velocity.y = 0
			space_pressed = 0
		}
	})
	if (player.position.y > 600) {
		init()
	}


}
animate()

addEventListener("keydown", function(event) {
	KeyDown(event.key)
})
addEventListener("keyup", function(event) {
	KeyUp(event.key, space_pressed)
})
