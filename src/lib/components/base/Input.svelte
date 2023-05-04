<script lang="ts">
	export let value: string;
	export let showInvalid: boolean;
</script>

<input
	type="text"
	{value}
	class="rounded-md p-3 bg-transparent text-neutral-800 dark:text-neutral-200 border-neutral-400 border-2 outline-2 outline-neutral-800 dark:outline-neutral-200"
	class:invalid:border-red-500={showInvalid}
	on:input
/>
