<script lang="ts">
	export let value: boolean;
</script>

<label for="toggle" class="flex items-center cursor-pointer">
	<!-- toggle -->
	<div class="relative rounded-full hover:shadow-md">
		<!-- input -->
		<input id="toggle" type="checkbox" class="sr-only peer" checked={value} on:change />
		<!-- line -->
		<div
			class="block bg-neutral-200 dark:bg-neutral-600 w-10 h-6 rounded-full peer-checked:bg-green-400 dark:peer-checked:bg-violet-800"
		/>
		<!-- dot -->
		<div
			class="absolute left-1 top-1 bg-neutral-600 dark:bg-neutral-200 w-4 h-4 rounded-full transition peer-checked:transform peer-checked:translate-x-full"
		/>
	</div>
	<!-- label -->
	<div class="ml-3 text-neutral-800 dark:text-neutral-200 font-medium">
		<slot />
	</div>
</label>
