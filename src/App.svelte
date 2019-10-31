<link href="https://fonts.googleapis.com/css?family=Nova+Mono|Oswald|BenchNine|Raleway&display=swap" rel="stylesheet">

<script>
	import { time, elapsed } from './stores.js';
	import TimerContent from './TimerContent.svelte'
	import Items from './Sidebar.svelte';

	const formatter = 
				new Intl.DateTimeFormat('en', {
					hour12: true,
					hour: 'numeric',
					minute: '2-digit',
					second: '2-digit'
				});
</script>

<style>
	main {
 	 	margin: 1rem auto;
		margin-top: 0;
		padding: 0;
		height: 96vh;
	}
	.sidebar {
		grid-area: sidebar;
	}
	.content {
		grid-area: content;
	}
	.header {
		grid-area: header;
		line-height: 0;
	}
	.footer {
		grid-area: footer;
	}
	.wrapper {
		display: grid;
    grid-gap: 4px;
		grid-template-columns: 1fr 1fr 0.8fr;
		grid-template-rows: 4em 1fr;
		grid-template-areas:
    "header header sidebar"
		"content content sidebar"
		"footer  footer sidebar ";
		height: 100%;
		background-color: #fff;
	}
	.box {
		background-color: #444;
		color: #fff;
		border-radius: 4px;
		padding: 10px;
	}
	.content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		text-align: center;
		height: 100%;
		padding: 0;
		min-height: max-content;
		background-color: #fff;
		border: none;
	}
	.sidebar {
		grid-area: sidebar;
		position: relative;
    display: grid;
		background-color: #424448;
		color: #f4f6fa;
		font-family: 'BenchNine';
		font-size: 14px;
		font-weight: 100;
		text-align: left;
		line-height: 1px;
		grid-template-rows: 4em 1fr;
	}
	.header,
	.footer {
		font-family: 'Oswald';
		color: #f4f6fa;
		background-color: #424448;
	}
	.header {
		text-align: center;
	}
	.footer {
		display: grid;
		grid-template-columns: 1fr 0.25fr 0.5fr 0.25fr 1fr;
		grid-template-rows: 1fr;
		text-align: center;
		height: 8vh;
	}
	#clock {
		grid-column: 2 / span 3;
		justify-content: center;
		font-size: 1em;
		font-family: 'Fira Code';
		font-weight: 500;
		border-radius: 4px;
		background-color: #f8faff;
		color: #a1005c;
		padding: 0.5em 1em 0.5em 1em;
		margin: auto;
	}
</style>

<main>
	<div class='wrapper'>
		<header class='box header'>
			<h1>Nursing Tracker</h1>
		</header>
		<sidebar class="box sidebar">
			<Items />
		</sidebar>
		<content class='box content'>
			<TimerContent />
		</content>
		<footer class='box footer timers'>
			<div id='clock'>
				{formatter.format($time)}
			</div>
		</footer>
	</div>
</main>