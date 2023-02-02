<script lang="ts">
    export let university: any
</script>

<div class="p-5 rounded-2xl shadow-md h-full flex flex-col justify-between">
    <div>
        <h1 class="font-semibold text-xl">{university.name}</h1>
        <ul class="text-gray-500 mt-1.5">
            <li class="flex items-center">
                Country: {university.country}
                <img class="w-5 ml-2 shadow-sm" src="https://www.countryflagicons.com/SHINY/64/{university.alpha_two_code}.png" alt={university.country}>
            </li>
            <li>State Province: {"Unknown"}</li>
        </ul>
    </div>
    <ul>
        <li class="mt-5">Websites:</li>
        <li class="flex flex-wrap text-sm mt-2">
            {#each university.web_pages as website }
                <a class="bg-gray-200 rounded-3xl inline-block px-4 py-1.5" target="_blank" rel="noreferrer" href={website}>{website}</a>
            {/each}
        </li>
    </ul>
</div>