<script lang="ts">
    import { page } from '$app/stores';
</script>

<div class="ui top fixed inverted large menu">
    <div class="header item">Svelte Test App</div>
    <a class="item" href="/" class:active={$page.path === '/'}>Home</a>
    <a href="/counter" class="item" class:active={$page.path === '/counter'}>Counter</a>
    <a href="/github" class="item" class:active={$page.path === '/github'}>Github Search</a>
</div>