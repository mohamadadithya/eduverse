<script lang="ts">
	import Card from '../components/Card.svelte';
	import { universities, getUniversities } from '../stores/universitiesStore';
	import { isLoading } from '../stores/loadingStore';

	let nameKeyword: string,
		countryKeyword: string = 'indonesia';

	export let data;
	
	const { countries } = data;
</script>

<section class="py-24">
	<h1 class="mb-2.5 font-medium">Search Your University Easily</h1>
	<div class="flex items-center mb-5 w-full ring-2 ring-gray-300 py-2 pl-4 pr-2 rounded-3xl">
		<input
			type="text"
			class="w-full outline-none"
			on:input={() => getUniversities(nameKeyword, countryKeyword)}
			bind:value={nameKeyword}
			placeholder="Enter your university's name"
		/>
		<select
			class="ml-3 bg-gray-200 w-32 appearance-none px-4 py-1.5 rounded-3xl outline-none"
			bind:value={countryKeyword}
			name="country"
			id="country"
			on:change={() => getUniversities(nameKeyword, countryKeyword)}
		>
			{#each countries as country}
				<option selected={country == countryKeyword} value={country.name.toLowerCase()}
					>{country.name}</option>
			{/each}
		</select>
	</div>
	{#if $isLoading}
		<i class="fas fa-fw fa-spin fa-spinner-third text-3xl mb-4"></i>
	{/if}
	<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {#if $universities.length > 0 }    
            {#each $universities as university}
                <Card {university} />
            {/each}
        {:else}
            {#if !$isLoading }
                <p>Universities not available</p>
            {/if}
        {/if}
	</div>
</section>
