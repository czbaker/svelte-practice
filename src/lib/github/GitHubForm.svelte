<script lang="ts">
    import github from '$lib/stores/github';
    import gherror from '$lib/stores/gherror';

    let username;
</script>

<style>
    .github-form {
        margin-top: 2em;
    }
</style>

<form 
    class="ui form github-form" 
    class:error={!!$gherror}
    on:submit|preventDefault={() => { github.fetchRepos(username) }}
>
    <div class="field">
        <input type="text" placeholder="Enter GitHub Username..." bind:value={username}>
    </div>
    {#if $gherror}
        <div class="ui error message">
            <div class="header">{$gherror.name}</div>
            {$gherror.desc}
        </div>
    {/if}
    <button class="ui blue button" type="submit">Fetch Repositories</button>
    <button class="ui button" type="reset">Reset Form</button>
</form>