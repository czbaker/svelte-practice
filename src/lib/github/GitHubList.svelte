<script lang="ts">
    import github from '$lib/stores/github';
</script>

<div class="column">
    {#each $github.repos as repo}
        <p>{repo.name}</p>
    {:else}
        ...
    {/each}
</div>