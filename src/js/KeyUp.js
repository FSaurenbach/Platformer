import {
	keys, player
}
from './canvas';

export function KeyUp(key) {
	switch (key) {
		case "a":
			keys.left.pressed = false;
			break;
		case "d":
			keys.right.pressed = false;
			break;

		case " ":
			player.velocity.y = 0;
			break;

	}


}
