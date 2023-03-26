var inputs = document.querySelectorAll("#otp_container input");
		var button = document.querySelector("#otp_container button");

		for (var i = 0; i < inputs.length; i++) {
			inputs[i].addEventListener("input", function() {
				if (this.value.length >= this.maxLength) {
					if (this.nextElementSibling != null) {
						this.nextElementSibling.focus();
					} else {
						button.focus();
					}
				}
				this.value = this.value.slice(-1);
			});

			inputs[i].addEventListener("keydown", function(event) {
				if (event.key === "Backspace") {
					if (this.value.length === 0 && this.previousElementSibling != null) {
						this.previousElementSibling.focus();
					} else {
						this.value = "";
					}
				}
			});
		}
