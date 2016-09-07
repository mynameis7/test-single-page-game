(() => {
	angular.module("app", []);
});

(() => {
	function GameController() {
		var ctrl = this;
		ctrl.deps = {
			1: false,
			2: false,
			3: false,
			4: false,
			5: false
		}

		ctrl.getSituation = function() {
			
		}
	}
	angular.module("app").controller("GameController", GameController);
});