import platform from '../img/platform.png'
const canvas = document.querySelector('canvas')
canvas.width = innerWidth
canvas.height = innerHeight

const c = canvas.getContext('2d')
const gravity = 5
class Player{
    constructor(){
        this.position = {
            x:100, 
            y:100
        }
        this.velocity = {
            x:0,
            y:0
        }
        this.width = 30
        this.height = 30
        
    }
    draw(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)

    }
    update(){
        this.draw()

        this.position.y += this.velocity.y
		this.position.x += this.velocity.x
        if (this.position.y + this.height + this.velocity.y<=canvas.height)
            this.velocity.y += gravity
        else this.velocity.y = 0
    }
}

class Platform{
	constructor(x, y, image){
		this.position = {
			x, 
			y
		}
		this.image = image
		this.width = this.image.width
		this.height = this.image.height
		
	}
	draw(){
		c.drawImage(this.image, this.position.x, this.position.y)
		
	}
}

const image = new Image()
image.src = platform
const player = new Player()
const platforms = [
	new Platform(200, 100, image),
	new Platform(500, 200, image)
]
const keys = {
	right:{
		pressed: false
	},
	left:{
		pressed: false
	}
}
let scrollOffset = 0
function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0, canvas.width, canvas.height)
    
	platforms.forEach(platform => {
		platform.draw()
	})
	player.update()
	if(keys.right.pressed && player.position.x<400){
		scrollOffset += 5
		player.velocity.x = 5
	}
	else if(keys.left.pressed && player.position.x>100){
		scrollOffset -= 5
		player.velocity.x = -5
	}

	else{
		player.velocity.x = 0
		if(keys.right.pressed){
			platforms.forEach(platform => {
				platform.position.x-=5
			})
			
		}
		else if(keys.left.pressed){
			platforms.forEach(platform => {
				platform.position.x+=5
			})
			
		}
	}
	platforms.forEach((platform)=> {
		if(player.position.y + player.height<=platform.position.y &&
			 player.position.y+player.height+player.velocity.y>= platform.position.y&&
			 player.position.x+player.width>=platform.position.x &&
			  player.position.x<= platform.position.x + platform.width){
		player.velocity.y = 0
	}})
	if (scrollOffset>2000){
		console.log("You Won!")
	}
	
}
animate()
addEventListener("keydown", function(event) {KeyDown(event.key)})
addEventListener("keyup", function(event) {KeyUp(event.key)})
function KeyUp(key){
	switch(key){
		case "a":
			console.log("a")
			keys.left.pressed = false
			break
		case "d":
			console.log("d")
			keys.right.pressed = false
			break
		case "w":
			console.log("w")
			player.velocity.y -=20
			break
		case "escape":
				alert("escape")
				break
	}


}
function KeyDown(key){
	switch(key){
		case "a":
			console.log("a")
			keys.left.pressed = true
			break
		case "d":
			console.log("d")
			keys.right.pressed = true
			break
		case "w":
			console.log("w")
			player.velocity.y -=20
			break
		case "escape":
				alert("escape")
				break
	}


}