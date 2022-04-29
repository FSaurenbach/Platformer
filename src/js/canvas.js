import background from '../img/background.png'
import hills from '../img/hills.png'
import platform from '../img/platform.png'
import player_img from '../img/player.png'
const canvas = document.querySelector('canvas')
canvas.width = innerWidth
canvas.height = innerHeight
let space_pressed = 0
const c = canvas.getContext('2d')
const gravity = 5
function createImage(imageSrc){
	const image = new Image()
	image.src = imageSrc	
	return image
}

let platformImage = createImage(platform)
let playerImage = createImage(player_img)
class Player{
    constructor(){
        this.position = {
            x:100, 
            y:100, 
        }
        this.velocity = {
            x:0,
            y:0
        }
        this.width =62
        this.height = 62
		this.speed = 10
        
    }
    draw(){
        c.drawImage(playerImage, this.position.x, this.position.y)

    }
    update(){
        this.draw()

        this.position.y += this.velocity.y
		this.position.x += this.velocity.x
        if (this.position.y + this.height + this.velocity.y<=canvas.height)
            this.velocity.y += gravity
		
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
class GenericObject{
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


let player = new Player()
let platforms = [
	new Platform(-1, 660, platformImage),
	new Platform(platformImage.width-3, 660, platformImage),
	new Platform(platformImage.width*2 +100, 660, platformImage)

]
let genericObjects = [
	new GenericObject(-1, -1, createImage(background)),
	new GenericObject(-1, -1, createImage(hills))
]
let scrollOffset = 0
function init(){
	console.log('init')
	 
	 player = new Player()
	 platforms = [
		new Platform(-1, 660, platformImage),
		new Platform(platformImage.width-3, 660, platformImage),
		new Platform(platformImage.width*2 +100, 660, platformImage)
	]
	genericObjects = [
		new GenericObject(-1, -1, createImage(background)),
		new GenericObject(-1, -1, createImage(hills))
	]
	scrollOffset = 0
}
const keys = {
	right:{
		pressed: false
	},
	left:{
		pressed: false
	}
}

function animate(){
	
    requestAnimationFrame(animate)
	c.fillStyle = 'black'
    c.fillRect(0,0, canvas.width, canvas.height)
	
    genericObjects.forEach(genericObjects =>{
		genericObjects.draw()
	})
	platforms.forEach(platform => {
		platform.draw()
	})
	player.update()
	if (first_time){init()
	first_time = false}
	if((keys.right.pressed && player.position.x<400)){
		
		player.velocity.x = 5
	
	}
	else if(keys.left.pressed && player.position.x>100  || (keys.left.pressed && scrollOffset === 0 && player.position.x >0)){
		
		player.velocity.x = -5
	}

	else{
		player.velocity.x = 0
		if(keys.right.pressed){
			scrollOffset += player.speed
			platforms.forEach(platform => {
				platform.position.x-=player.speed
			})
			genericObjects.forEach(genericObject =>{
				genericObject.position.x-=player.speed*.66
			})
			
		}
		else if(keys.left.pressed && scrollOffset>0){
			scrollOffset -= 5
			platforms.forEach(platform => {
				platform.position.x+=player.speed
			})
			genericObjects.forEach(genericObject =>{
				genericObject.position.x+=player.speed*.66	
			})
			
		}
	}
	platforms.forEach((platform)=> {
		if(player.position.y + player.height<=platform.position.y &&
			 player.position.y+player.height+player.velocity.y>= platform.position.y&&
			 player.position.x+player.width>=platform.position.x &&
			  player.position.x<= platform.position.x + platform.width){
		player.velocity.y = 0
		space_pressed = 0
	}})
	if (scrollOffset>2000){
		console.log("You Won!")
	}
	if (player.position.y>canvas.height){
		init()
	}
	
	
}
animate()
let first_time = true
if (first_time){init()
	first_time = false}
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
		
		case " ":
			console.log("Space")
			player.velocity.y =0
			
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
		case " ":
			if (space_pressed<1){
				console.log("Space")
				player.velocity.y -=50
				space_pressed +=1
				break
			}
		
	}


}
