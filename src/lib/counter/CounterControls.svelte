<script lang="ts">
    import counter from '../../stores/counter'

    const handleInc = (amount: number) => {
        counter.increase(amount);
    }

    const handleDec = (amount: number) => {
        counter.decrease(amount);
    }

    const handleReset = () => {
        counter.reset();
    }
</script>

<button class="ui red button" on:click={() => { handleDec(5)}}>Subtract 5</button>
<button class="ui red button" on:click={() => { handleDec(1)}}>Subtract 1</button>
<button class="ui black button" on:click={handleReset}>Reset</button>
<button class="ui green button" on:click={() => { handleInc(1)}}>Increase 1</button>
<button class="ui green button" on:click={() => { handleInc(5)}}>Increase 5</button>