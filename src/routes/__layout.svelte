<script lang="ts">
    import Menu from '$lib/Menu.svelte'
</script>

<style>
    .site-container {
        margin-top: 5em;
    }
</style>

<Menu />
<div class="site-container">
    <slot />
</div>