class Form {
	constructor() {}
	display() {
		var title = createElement("h2");
		title.html("Multiplayer Car Racing Game");
		title.position(320, 100);
		var input = createInput("name");
		var button = createButton("PLAY");
		var greeting = createElement("h3");
		input.position(460, 280);
		button.position(520, 350);
		button.mousePressed(function () {
			input.hide();
			button.hide();
			var name = input.value();
			playerCount = playerCount + 1;
			player.update(name);
			player.updateCount(playerCount);
			greeting.html("HELLO" + name);
			greeting.position(130, 160);
		});
	}
}
