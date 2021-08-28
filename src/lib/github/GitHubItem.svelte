<script lang="ts">
    export let name;
    export let url;
    export let desc;
    export let index;

    import github from '$lib/stores/github';

    const handleClick = (index: number) => {
        github.setIndex(index);
    }
</script>

<div class="ui raised segment" class:red={ $github.selectedIndex === index } on:click={() => { handleClick(index); }}>
        <a href="{url}" class="ui header" target="_blank">{name}</a>
    <p>{desc}</p>
</div>