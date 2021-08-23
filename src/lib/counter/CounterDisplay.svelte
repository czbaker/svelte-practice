<script lang="ts">
    import counter from '../../stores/counter';
</script>

<style>
    .red {
        color: red;
    }
</style>

<h3>Current Value: <span class:red={$counter < 0}>{$counter}</span></h3>