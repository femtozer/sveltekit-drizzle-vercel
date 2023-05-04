<script lang="ts">
	import Button from '$lib/components/base/Button.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<header />
{#each data.todos as todo}
	<div>
		<h1>{todo.title}</h1>
		<div>{todo.description}</div>
		<Button outline={true} on:click={() => alert('OK')}>OK</Button>
	</div>
{/each}
