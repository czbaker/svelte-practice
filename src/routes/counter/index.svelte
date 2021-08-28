<script lang="ts">
    import CounterDisplay from '$lib/counter/CounterDisplay.svelte';
    import CounterControls from '$lib/counter/CounterControls.svelte';
</script>

<style>
    .counter-box {
        margin-top: 2em;
    }
</style>

<svelte:head>
    <title>Svelte Examples - Counter</title>
</svelte:head>
<h2 class="ui center aligned header">Simple Counter!</h2>
<div class="ui centered two column grid counter-box">
    <div class="column">
        <div class="ui center aligned segment">
            <CounterDisplay />
            <CounterControls />
        </div>
    </div>
</div>