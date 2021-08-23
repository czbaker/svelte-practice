<script context="module">
    export const load = ({ error, status }) => {
        return {
            props: {
                error,
                status
            }
        }
    }
</script>

<script lang="ts">
    import NotFound from '$lib/errors/404.svelte';
    export let status;
</script>

{#if status === 404}
    <NotFound />
{/if}

