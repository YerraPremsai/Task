
        const questions = {
            easy: [
                "What are the benefits of good time management?",
                "Describe your favorite hobby.",
                "What is the importance of family?",
                "Explain why exercise is important.",
                "Discuss the value of education."
            ],
            moderate: [
                "Discuss the impact of technology on modern education.",
                "Explain the causes and effects of climate change.",
                "How can renewable energy help in the fight against global warming?",
                "Discuss the role of leadership in an organization.",
                "What is the importance of self-discipline in achieving success?"
            ],
            hard: [
                "Analyze the impact of artificial intelligence on the job market.",
                "Discuss the ethical implications of genetic engineering.",
                "What are the challenges of global climate policies?",
                "Explain the role of government in regulating technology companies.",
                "Analyze the effects of globalization on developing countries."
            ]
        };

        let timeRemaining;
        let maxWords = 150;
        let timerInterval;

        // Proceed Button Logic to enter in to write the essay
        document.getElementById("proceedButton").addEventListener("click", function () {
            const selectedMode = document.querySelector('input[name="mode"]:checked');

            if (!selectedMode) {
                alert("Please select a mode before proceeding.");
                return;
            }

            const mode = selectedMode.value;
            const randomQuestion = questions[mode][Math.floor(Math.random() * 5)];
            document.getElementById('essayQuestion').innerText = randomQuestion;

            if (mode === 'easy') {
                maxWords = 150;
                timeRemaining = 5 * 60; // it is for 5 minutes
            } else if (mode === 'moderate') {
                maxWords = 200;
                timeRemaining = 10 * 60; // it is for 10 minutes
            } else if (mode === 'hard') {
                maxWords = 250;
                timeRemaining = 15 * 60; // it is for 15 minutes
            }
            document.getElementById("modeSelection").classList.add("hidden");
            document.getElementById("essaySection").classList.remove("hidden");
            document.getElementById('maxWords').innerText = maxWords;
            startTimer();
        });

        // To count the words in Essay and should not exceed exceed 
        document.getElementById("essay").addEventListener("input", function () {
            const text = this.value.trim().replace(/[^a-zA-Z ]/g, "").split(/\s+/);
            const wordCount = text.filter(word => word.length > 0).length;
            document.getElementById("wordCount").innerText = wordCount;

            if (wordCount > maxWords) {
                document.getElementById("essay").classList.add("red-text");
            } else {
                document.getElementById("essay").classList.remove("red-text");
            }
        });

    
        function startTimer() {
            clearInterval(timerInterval); 
            const timeElement = document.getElementById("time");
            timerInterval = setInterval(() => {
                const minutes = Math.floor(timeRemaining / 60);
                const seconds = timeRemaining % 60;
                timeElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
                timeRemaining--;
                if (timeRemaining === 120) {
                    alert("Warning! Only 2 minutes remaining.");
                }

               
                if (timeRemaining < 0) {
                    clearInterval(timerInterval);
                    document.getElementById("essay").readOnly = true;
                    document.getElementById("submitEssay").disabled = true;
                    submitEssay();
                }
            }, 1000);
        }

        document.getElementById("submitEssay").addEventListener("click", function () {
            submitEssay();
        });

        function submitEssay() {
            clearInterval(timerInterval);
            document.getElementById("essay").readOnly = true;
            document.getElementById("submitEssay").disabled = true;

            alert("Essay submitted successfully!");
        }
    