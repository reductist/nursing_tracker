<script>
  import { afterUpdate, onDestroy } from "svelte";
	import { onInterval } from './timer.js';
	
	//const formatter = new Intl.DateTimeFormat('en', {
	//	hour12: true,
	//	hour: 'numeric',
	//	minute: '2-digit',
	//	second: '2-digit'
	//});

	let timestamp;
	let interval;
	let isActive = false;
	let isL = false;
	let isR = false;
	export let side = '';
	side = (isL) ? 'L' : 'R';
	export let seconds = 0;
	
	function assignInterval(callback, ms) { 
		seconds = 0;
		if (!interval) {
			interval = setInterval(callback, ms);
		}
	}

	function removeInterval(interval) { 
			clearInterval(interval); 
			interval = null;
	}
	
	const triggerTimerL = function (event) {
		timestamp = (new Date).toLocaleString();
		isActive = true;
		isR = false;
		isL = true;
		assignInterval(() => seconds += 1, 1000);
	}
	
	const triggerTimerR = function (event) {
		timestamp = (new Date).toLocaleString();
		isActive = true;
		isL = false;
		isR = true;
		assignInterval(() => seconds += 1, 1000);
	}
	
	const stopTimer = function (sec) {
		removeInterval();		
		isActive = false;
		isL = false;
		isR = false;
		seconds = 0;
	}
	
</script>

<style>
	:root {
		--left-color: #ff669c;
		--right-color: #70ffbc;
	}
	.contentDiv {
		display: grid;
    grid-template-columns: 0.1fr 1fr 1fr 1fr 1fr 0.1fr;
    grid-template-rows: 0.1fr 0.45fr 0.45fr 1fr 0.1fr;
    grid-column: 1 / -1;
		grid-row: 1 / -1;
    width: -webkit-fill-available;
    min-height: 0;
    min-width: 0;
    background-color: #fdfdfd;
    color: #222;
    padding: 0.25em;
    box-shadow: inset 0 0 4px #aaa;
    border-radius: 4px;
    font-family: 'BenchNine';
    font-size: 1.5em;
    border: none;
	}
	.triggerBtn {
		width: 25vw;
		height: 25vw;
		max-width: 180px;
		max-height: 180px;
		border-radius: 10em;
		font-size: 16px;
		font-family: 'BenchNine';
		color: #000;
		background: radial-gradient(#f3acac 15%, #C07979 18%, #f3d4ce 20%);
		cursor: pointer;
		margin: 1em;
	}
	.left {
		color: var(--left-color);
	}
	.right {
		color: var(--right-color);
	}
	.stopBtn {
		font-family: 'Oswald';
		font-weight: 700;
		font-size: 0.85em;
		grid-row: 4;
		grid-column: 1 / 6;
		border-radius: 10px;
		border: 1px solid #667788;
		width: 5em;
    height: 2em;
    text-align: center;
    line-height: 1em;
		margin-left: auto;
		margin-right: auto;
		cursor: pointer;
		text-transform: uppercase;
  	cursor: pointer;
  	color: #222233;
  	outline: none;
	}
	.stopBtn:hover {
		font-weight: 900;
		border-width: 1.25px;
	}
	.btnLeft {
		background: var(--left-color);
	}
	.btnRight {
		background: var(--right-color);
	}
	#triggerBtnL {
    grid-column: 2 / span 2;
    grid-row: 1 / span 2;
    justify-self: self-end;
	}
	#triggerBtnR {
    grid-column: 4 / span 2;
    grid-row: 1 / span 2;
    justify-self: self-start;
	}
	#timerWrapper {
    background: #f6f8fa;
    border: 1px solid #c2c4c8;
    border-radius: 4px;
    box-shadow: inset 0 0 4px #aaa;
    display: grid;
		grid-template-rows: 1fr 1fr 1fr 0.5fr;
    grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
		min-width: 0; /* Firefox */
		grid-row: 4 / span 2;
    grid-column: 1 / span 6;
	}
	#timerDiv {
		grid-row: 3;
		grid-column: 1 / 6;
		color: #334455;
		font-size: 1em;
		font-family: 'Fira Code';
		font-weight: 400;
		border-radius: 4px;
		align-self: top;
		text-align: center;
	}
	#seconds {
		background: #424448;
		font-family: 'Fira Code';
		border: 1px solid #334455;
		border-radius: 4px;
		padding: 0.25em 1em 0.25em 1em;
	}
	.sideDiv {
		grid-row-start: 1;
		grid-column: 1 / 6;
		font-size: 1.5em;
		font-family: 'Oswald';
		font-weight: 700;
		border-radius: 4px;
		vertical-align: middle;
		text-align: center;
		text-transform: uppercase;
		filter: brightness(0%);
	}
	#ts {
		grid-row: 2;
		grid-column: 1 / 6;
		margin: 0;
		padding: 0;
		align-self: top;
		color: #334455;
		font-size: 0.75em;
		font-family: 'Nova Mono';
		font-weight: 400;
	}
	#tsSpan {
		background: #424448;
		border-radius: 4px;
		padding: 0.2em 0.5em 0.2em 0.5em;
		margin-left: 0.5em;
	}
</style>

<div class='contentDiv'>
  <button id='triggerBtnL' class='triggerBtn' on:click={() => {
  triggerTimerL()}}>L</button>
	<button id='triggerBtnR' class='triggerBtn' on:click={() => triggerTimerR()}>R</button>
	{#if isActive}
		<div id='timerWrapper'>
			{#if isL === true} <div class='sideDiv left'>Left-side</div>
			{:else if isR === true} <div class='sideDiv right'>Right-side</div>
			{/if}
			<p id='ts'><span id='tsSpan' class={isL === true ? 'left' : 'right'}>{timestamp}</span></p>
			<div id='timerDiv'>
				<span id='seconds' class="{isL === true ? 'left' : 'right'}">
					{seconds}
				</span> 
				{seconds === 1 ? 'second' : 'seconds'}</div>
			<button id='stopTimer' class="{isL === true ? 'btnLeft stopBtn' : 'btnRight stopBtn'}" on:click={() => stopTimer(seconds)}>Done</button>
		</div>
	{/if}
</div>