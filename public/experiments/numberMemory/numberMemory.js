	var displayLength = 3;
	var array = [];
	var container;
	var twoWrong = [];
	var twoWrongArr = [];
	function generate_display() {
		array.push(Math.floor(Math.random() * 10));
		console.log(displayLength);
		for(let i=0; i<displayLength-1; i++) {
			array.push(validate(array[i]));
		}
		container = array.slice();
		return array;
	}
	function validate(num) {
		let nextNum = Math.floor(Math.random() * 10);
		if(Math.abs(nextNum - num) <= 2) {
			return validate(num);
		} else if (array.includes(nextNum)) {
			return validate(num);
		} else {
			return nextNum;
		}
	}
	var fixation = {
		type: 'html-keyboard-response',
		stimulus: '<span font-size: 50px>+</span>',
		response_ends_trial: false,
		trial_duration: 1000
	}
	var answer_block = {
		timeline: [{
			type: 'survey-text',
			questions: [{prompt: 'Type the digits in the order that you saw them.', value: 'Digits', rows: 1, columns: 50}],
			data: jsPsych.timelineVariable('data'),
			on_finish: function(data){
				let obj = JSON.parse(data.responses);
				data.correct = JSON.stringify(obj.Q0) === JSON.stringify(container.join(""));
				
				switch(twoWrong.length) {
						case 0: 
						case 1: twoWrong.push(data.correct);
						break;
						case 2: twoWrong.shift();
								twoWrong.push(data.correct);
						break;
					}
				if(data.correct === true) {
					if(displayLength != 9) {
						displayLength = displayLength+1;	
					} else {
						displayLength = 9;
					}
				} else if(data.correct === false) {
					if((twoWrong[0] === false && twoWrong[1] === false) && displayLength > 3) {
						displayLength = displayLength-1;
					}
				} 
			}
		}],
	}
	var feedback = {
		type: 'html-keyboard-response',
		stimulus: function() {
			if(twoWrong.length === 1) {
				return twoWrong[0] === true ? 'Correct' : 'Incorrect';
			} else {
				return twoWrong[1] === true ? 'Correct' : 'Incorrect';
			}
		},
		response_ends_trial: false,
		trial_duration: 1000
	}
	var answer_block2 = {
		timeline: [{
			type: 'survey-text',
			questions: [{prompt: 'Type the digits in reverse oder that you saw them.', value: 'Digits', rows: 1, columns: 50}],
			data: jsPsych.timelineVariable('data'),
			on_finish: function(data){
				let obj = JSON.parse(data.responses);
				data.correct = JSON.stringify(obj.Q0) === JSON.stringify(container.reverse().join(""));
				switch(twoWrongArr.length) {
					case 0:
					case 1: twoWrongArr.push(data.correct);
					break;
					case 2: twoWrongArr.shift();
							twoWrongArr.push(data.correct);
					break;
				}
				if(data.correct === true) {
					if(displayLength != 9) {
						displayLength = displayLength+1;
					} else {
						displayLength = 9;
					}
				} else if(data.correct === false) {
					if((twoWrongArr[0] === false && twoWrong[1] === false) && displayLength > 2) {
						displayLength = displayLength-1;
					}
				}
			}
		}]
	}
	var feedback2 = {
		type: 'html-keyboard-response',
		stimulus: function() {
			if(twoWrongArr.length === 1) {
				return twoWrongArr[0] === true ? 'Correct' : 'Incorrect';
			} else {
				return twoWrongArr[1] === true ? 'Correct' : 'Incorrect';
			}
		},
		response_ends_trial: false,
		trial_duration: 1000
	}
	var trial = {
    type: 'call-function',
    func: function(){ return generate_display(); }
  	};
  	var resetDisplayLength = {
  		type: 'call-function',
  		func: function(){ return displayLength = 2; }
  	}
	var forwardDigitSpan = {
		timeline: [
			trial,
			{timeline: [{
				type: 'html-keyboard-response',
				stimulus: function(){ return array.shift(); },
				response_ends_trial: false,
				trial_duration: 1000,
			}],
			loop_function: function(){ 
				console.log(array.length);
				if(array.length > 0) {
					return true;
				} else {
					return false;
				}
			}},
			fixation,
			answer_block,
			feedback,
		],
		repetitions: 14
	}
	var backwardDigitSpan = {
		timeline: [
			trial,
			{timeline: [{
				type: 'html-keyboard-response',
				stimulus: function(){ return array.shift(); },
				response_ends_trial: false,
				trial_duration: 1000,
			}],
			loop_function: function(){ 
				console.log(array.length);
				if(array.length > 0) {
					return true;
				} else {
					return false;
				}
			}},
			fixation,
			answer_block2,
			feedback2
		],
		repetitions: 14
	}
	var startBackwardInstructions = {
		type: 'html-keyboard-response',
		stimulus: 'You will now start the backward digit span task. Record the sequence of numbers in reverse order',
	}
	jsPsych.init({
		display_element: 'preview',
		timeline: [forwardDigitSpan, startBackwardInstructions, resetDisplayLength,  backwardDigitSpan],
	});