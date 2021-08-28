<script lang="ts">
    import GitHubForm from '$lib/github/GitHubForm.svelte';
    import GitHubList from '$lib/github/GitHubList.svelte';
</script>

<style>
    .gh-grid {
        margin-top: 2em;
    }
</style>

<svelte:head>
    <title>Svelte Examples - GitHub Search</title>
</svelte:head>
<div class="ui container">
    <h2 class="ui center aligned header">GitHub Search</h2>
    <GitHubForm />
    <div class="ui two column divided grid gh-grid">
        <div class="row">
            <GitHubList />
            <div class="column">asdf</div>
        </div>
    </div>
</div>