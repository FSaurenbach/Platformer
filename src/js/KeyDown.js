import {
	keys, player
}
from './canvas'
export function KeyDown(key, sp) {

	switch (key) {
		case "a":
			keys.left.pressed = true;
			break;
		case "d":
			keys.right.pressed = true;
			break;
		case " ":
			if (sp > 2) {

				player.velocity.y -= 50
				sp += 1
				break;
			}

	}


}
