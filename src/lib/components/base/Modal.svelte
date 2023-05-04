<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let modalBackground: HTMLElement;
	const dispatch = createEventDispatcher();

	let closeModal = (event: Event) => {
		if (event.target === modalBackground) {
			dispatch('close');
		}
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	bind:this={modalBackground}
	class="fixed w-full h-full p-6 top-0 left-0 bg-neutral-800/50 dark:bg-neutral-200/50 flex justify-center items-center"
	on:click={closeModal}
>
	<div class="rounded-md w-full max-w-2xl box-border p-6 bg-neutral-200 dark:bg-neutral-800">
		<slot />
	</div>
</div>
