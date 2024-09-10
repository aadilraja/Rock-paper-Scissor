document.addEventListener("DOMContentLoaded", () => {


	const emojiButtons = document.querySelectorAll(".emoji");
	const userSelectionBox = document.querySelector(".user");
	const ComputerSelectionBox = document.querySelector(".Computer");
	const resultMessage=document.querySelector(".resultMessage");
	const resultDialog=document.querySelector("dialog");
	let i = 0;

	const EmojiValues = [
		[1, "🪨"],
		[2, "🧻"],
		[3, "✂️"]
	];

	const myMap = new Map(EmojiValues);

	emojiButtons.forEach(emojiButton => {
		emojiButton.addEventListener("click", (e) => {
			const selectedEmoji = e.target;
			userSelectionBox.innerText = selectedEmoji.innerText;


			const intervalId = setInterval(() => {
				computerTurn(intervalId);
			}, 100);
		});
	});

	function computerTurn(intervalId) {
		let n = Math.floor(Math.random() * 3) + 1;
		ComputerSelectionBox.innerText = myMap.get(n);

		if (i >= 9) {
			clearInterval(intervalId);
			const result = determineWinner(userSelectionBox.innerText, 		ComputerSelectionBox.innerText);
			setTimeout(()=>
			{
				showWinner(result)
			},400);


		}

		i += 1;
	}

	function determineWinner(user, computer) {
			if (user === computer) {
					
					return "tie";
			}

			switch (user) {
					case "🪨":
							return computer === "✂️";
					case "🧻":
							return computer === "🪨" ;
					case "✂️":
							return computer === "🧻";
					default:
							return "Invalid choice";
			}
	}

	function showWinner(result)
	{
		console.log(result);
		if(result==="tie") 
			{
				resultMessage.innerText="It's a tie";
				resultDialog.style.backgroundColor="#FCEFB0";
				

			}
		else if(result===true)
			{
				resultDialog.style.backgroundColor="#CEDF9F"
				resultMessage.innerText="You Won!";


			}
		else
			{
				resultDialog.style.backgroundColor="#FA7070"
				 resultMessage.innerText = "You lost!";		



			}
		resultDialog.showModal();
	}

	document.querySelector(".restartButton").addEventListener("click",()=>
	{
		i=0;
		
		resultDialog.close();
		
	});
																													 
																													 
																				

	
});