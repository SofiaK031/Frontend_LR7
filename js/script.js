document.addEventListener("DOMContentLoaded", () => {
	document.body.innerHTML += "<div id='content'></div>"
	//Контейнер для кулі та запитання (input)
	let mainContent = document.getElementById("content");
	mainContent.innerHTML += "<div id='question-box'></div>";
	mainContent.innerHTML += "<div id='magic-ball'></div>";
	//Контейнер для input
	let questionBox = document.getElementById("question-box");
	questionBox.innerHTML += "<input type='text' id='user-question'>";
	//Введення запитання
	let questionInput = document.getElementById("user-question");
	questionInput.value = "Чи буде завтра тепло?";
	//Контейнер для кулі
	let ballContainer = document.getElementById("magic-ball");
	ballContainer.innerHTML += "<a href='#'><img id='ball' alt='The magic ball'></a>";
	ballContainer.innerHTML += "<div id='answer'></div>";
	//Куля
	let ball = document.getElementById("ball");
	//Відповідь
	let answer = document.getElementById("answer");

	//Адаптація сторінки
	adaptability();
		
	//Події взаємодії з кулею
	ball.addEventListener("mouseleave", (event) => {
		ball.style.filter = "drop-shadow(-7px 5px 8px #37114a) drop-shadow(7px 5px 8px #37114a)";
	});
		
	ball.addEventListener("mouseover", (event) => {
		ball.style.filter = "drop-shadow(-7px 5px 8px #db3bff) drop-shadow(7px -5px 8px #ff007b)";
	});

	ball.addEventListener("click", (event) => {
		//Валідація
		let question = questionInput.value.replace(' ', '');
		if (question == "" || question.charAt(question.length - 1) != '?') {
			alert('Ви не ввели запитання!');
			answer.innerText = "";
			return;
		}
		// варіанти відповідей
		let answers = [
			"Безсумнівно",
			"Однозначно так",
			"Так!",
			"Звичайно, так",
			"Можете бути впевнені в цьому",
			"Здається, так...",
			"Скоріш за все",
			"Прогноз позитивний",
			"Знаки кажуть - 'так'",
			"Можливо",
			"Поки що незрозуміло, спробуйте знову",
			"Запитайте пізніше",
			"Краще не розповідати зараз",
			"Зараз не можу це передбачити",
			"Сконцентруйтесь і запитайте ще раз",
			"Не розраховуйте на це",
			"Моя відповідь — ні",
			"За моїми даними – ні",
			"Перспективи не дуже добрі...",
			"Дуже сумнівно",
			"Ви жартуєте?",
			"Так, але пізніше",
			"В жодному разі!",
			"Хто знає?...",
			"Не впевнений...",
			"Забудьте про це",
		];
		let randomValue = Math.floor(Math.random() * answers.length);
        answer.innerText = answers[randomValue];
	}, {once: true});

	//Подія для адаптивності
	addEventListener("resize", (event) => {
		adaptability();
	});
		
	//Функія для адаптивності
	function adaptability() {
		let mainContentWidth = mainContent.getBoundingClientRect().width;
		let mainContentHeight = mainContent.getBoundingClientRect().height;
		
		//Адаптація розміру шрифту
		if (mainContentWidth <= 1000) {
			questionInput.style.fontSize = "30px";
			answer.style.fontSize = "40px";
			mainContent.style.width = "50%";
			mainContent.style.height = "90%";
		}
		if (mainContentWidth <= 800) {
			questionInput.style.fontSize = "28px";
			answer.style.fontSize = "35px";
			mainContent.style.width = "50%";
			mainContent.style.height = "90%";
				}
		if (mainContentWidth <= 650) {
			questionInput.style.fontSize = "25px";
			answer.style.fontSize = "30px";
			mainContent.style.width = "50%";
			mainContent.style.height = "80%";
		}
		if (mainContentWidth <= 600) {
			questionInput.style.fontSize = "20px";
			answer.style.fontSize = "25px";
			mainContent.style.width = "50%";
			mainContent.style.height = "70%";
		}
		if (mainContentWidth <= 400) {
			questionInput.style.fontSize = "15px";
			answer.style.fontSize = "20px";
			mainContent.style.width = "50%";
			mainContent.style.height = "50%";
		}
		if (mainContentWidth <= 300) {
			questionInput.style.fontSize = "13px";
			answer.style.fontSize = "14px";
			mainContent.style.width = "50%";
			mainContent.style.height = "35%";
		}
		if (mainContentWidth <= 200) {
			questionInput.style.fontSize = "7px";
			answer.style.fontSize = "12px";
			mainContent.style.width = "50%";
			mainContent.style.height = "35%";
		}
		if (mainContentWidth <= 100) {
			questionInput.style.fontSize = "5px";
			answer.style.fontSize = "5px";
			mainContent.style.width = "50%";
			mainContent.style.height = "35%";
		}
		
		//Адаптація кулі
		mainContentWidth = mainContent.getBoundingClientRect().width;
		mainContentHeight = mainContent.getBoundingClientRect().height;
		let questionBoxHeight = questionBox.getBoundingClientRect().height;
		ballContainer.style.margin = 0;
		let newballContainerHeight = mainContentHeight - questionBoxHeight - 4;
		let newballContainerWidth = mainContentWidth;
		ballContainer.style.height = newballContainerHeight + "px";
		ballContainer.style.width = newballContainerWidth + "px";
		//Масштабування за коротшою стороною
		if (newballContainerWidth < newballContainerHeight) {
			ball.style.height = newballContainerWidth * 0.85 + "px";
			ball.style.width = newballContainerWidth * 0.85 + "px";
		}
		else {
			ball.style.height = newballContainerHeight * 0.85 + "px";
			ball.style.width = newballContainerHeight * 0.85 + "px";
		}
	}
});
