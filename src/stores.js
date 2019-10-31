import { readable, writable, derived } from 'svelte/store';
import { onDestroy } from 'svelte';

// used for clock in App.svelte
export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	onDestroy(() => {
		clearInterval(interval);
  })
})

// used for session count in TimerContent.svelte
export const count = writable(0);
