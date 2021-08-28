<script lang="ts">
    import github from '$lib/stores/github';

    import GitHubItem from './GitHubItem.svelte';
</script>

<div class="column">
    {#each $github.repos as repo, index}
        <GitHubItem {...repo} index={index} />
    {:else}
        ...
    {/each}
</div>