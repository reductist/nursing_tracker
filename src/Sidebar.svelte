<script>
	
	const dummyData = [
		{ id: 1, side: 'L', timestamp: (new Date).toLocaleString(), duration: 10 },
		{ id: 1, side: 'R', timestamp: (new Date).toLocaleString(), duration: 20 },
		{ id: 2, side: 'R', timestamp: (new Date).toLocaleString(), duration: 30 },
		{ id: 2, side: 'L', timestamp: (new Date).toLocaleString(), duration: 15 },
		{ id: 3, side: 'R', timestamp: (new Date).toLocaleString(), duration: 40 },
		{ id: 3, side: 'L', timestamp: (new Date).toLocaleString(), duration: 15 },
		{ id: 4, side: 'R', timestamp: (new Date).toLocaleString(), duration: 25 },
		{ id: 4, side: 'L', timestamp: (new Date).toLocaleString(), duration: 32 },
	];
</script>

<style>
	:root {
		--left-color: #ff669c;
		--right-color: #70ffbc;
	}
	.left-color {
		color: var(--left-color);
		font-weight: 100;
	}
	.right-color {
		color: var(--right-color);
		font-weight: 100;
	}
	#sidebarWrapper {
		display: flex;
		height: 100%;
		align-self: stretch;
		background: #f8faff;
		color: #333344;
		grid-row: 2;
		border-radius: 4px;
  	min-width: max-content;
  	overflow: hidden;
	}
	.sidebar > div > ul {
		display: inline-table;
		font-family: 'Raleway';
		font-size: 14px;
		margin: 0 auto;
		width: 90%;
		height: 100%;
    list-style-type: none;
    text-align: center;
    padding-left: 0;
		line-height: 1.2em;
	}
		#sidebarTitle {
		text-align: center;
		align-self: center;
		font-family: 'Oswald';
		margin: auto;
	}
	.ts {
		font-family: 'Nova Mono';
		margin-right: 1px;
		margin-left: 1px;
		font-size: 1em;
		font-weight: 400;
		background: #333;
		color: #fff;
		line-height: 2.5em;
		margin-top: 1.2em;
		border-radius: 4px;
		box-shadow: inset 0 0 2px #888;
	}
	.card {
		font-size: 1em;
		margin-top: -2px;
		border-top: none;
		margin-right: 2px;
		margin-left: 2px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 0.8fr 1fr;
    /*background-color: #afafbf;*/
		background: #fff;
    color: #222;
    padding: 0.25em;
		border: 1px solid #666;
		border-radius: 0 0 4px 4px;
	}
	
	.headerCard {
		font-weight: 900;
		color: #111214;
		border: 1px solid #ccc;
		background: #f3f6fc;
		padding: 6px;
		border-collapse: collapse;
		margin: 2px;
		border-radius: 4px;
	}
	.sessionHeaderCard {
		grid-column: 1;
		grid-row: 1;
	}
	.sideHeaderCard {
		grid-column: 2;
		grid-row: 1;
	}
	.durationHeaderCard {
		grid-column: 3;
		grid-row: 1;
	}
	
	.contentCard {
		background: #515661;
		font-size: 12px;
		line-height: 1;
		font-weight: 100;
		border-collapse: collapse;
		margin: 2px;
		margin-top: 0;
		padding-left: 10px;
		padding-right: 10px;
		padding-top: 10px;
		padding-bottom: 10px;
		align-self: center;
		border-radius: 4px;
	}
	.idCard {
		color: #fff;
		font-weight: 100;
		grid-column: 1;
		grid-row: 2;
	}
	.sideCard {
		font-weight: 100;
		grid-column: 2;
		grid-row: 2;
	}
	.durationCard {
		color: #fff;
		font-weight: 100;
		grid-column: 3;
		grid-row: 2;
	}
</style>

<h1 id='sidebarTitle'>Log</h1>
<div id='sidebarWrapper'>	
	<ul>
		{#each dummyData as dummyDatum (dummyDatum.id)}
		<li class='ts'>
			{dummyDatum.timestamp}
		</li>
		<li class='card'>
			<span class='sessionHeaderCard headerCard'>session</span>
			<span class='sideHeaderCard headerCard'>side</span>
			<span class='durationHeaderCard headerCard'>duration</span>
			<span class='idCard contentCard'>{dummyDatum.id}</span>
			{#if dummyDatum.side === 'L' }
				<span class='sideCard contentCard left-color'>Left</span>
			{:else if dummyDatum.side === 'R'} 
				<span class='sideCard contentCard right-color'>Right</span>
			{/if}
				<span class='durationCard contentCard'>{dummyDatum.duration} min</span>
		</li>
		{/each}
	</ul>
</div>