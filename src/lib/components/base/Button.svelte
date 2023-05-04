<script lang="ts">
	export let outline: boolean;
	$: buttonClass = outline
		? 'bg-transparent border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-neutral-200 dark:border-neutral-200 dark:text-neutral-200 dark:hover:bg-neutral-200 dark:hover:text-neutral-800'
		: 'bg-neutral-800 text-neutral-200 border-neutral-800 hover:bg-neutral-700 hover:border-neutral-700 dark:bg-neutral-200 dark:text-neutral-800 dark:border-neutral-200 dark:hover:bg-neutral-300 dark:hover:border-neutral-300';
</script>

<button
	class="px-3 py-1 rounded-md cursor-pointer border-[1px] hover:shadow-md transition duration-300 {buttonClass}"
	on:click
>
	<div class="flex justify-center">
		<slot />
	</div>
</button>
