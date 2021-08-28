<script lang="ts">
    import type { GHRepo } from '$lib/interfaces';
    import github from '$lib/stores/github';

    $: repo = $github.repos[$github.selectedIndex];
</script>

<div class="column">
    {#if repo}
        <h2 class="ui header">{repo.name}</h2>
        <p>{repo.desc}</p>
        <ul>            
            <li><a href={repo.url} target="_blank">{repo.url}</a></li>
            <li>Language: {repo.language}</li>
            <li>License: {repo.license}</li>
        </ul>
    {:else}
        ...
    {/if}
</div>