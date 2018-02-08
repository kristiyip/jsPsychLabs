var trial = {
	type: 'html-keyboard-response',
	stimulus: 'hello!!'
}

var second_trial = {
	type: 'html-keyboard-response',
	stimulus: 'goodbye.'
}

jsPsych.init({
	timeline: [trial, second_trial],
	display_element: 'preview'
});