<script lang="ts">
    import { page } from '$app/stores';
</script>

<style>
    .error-container {
        margin-top: 4em !important;
        margin-bottom: 1.25em;
    }
</style>

<h1 class="ui center aligned header error-container">Page Not Found!</h1>
<div class="ui centered two column grid">
    <div class="column">
        <div class="ui center aligned segment">
            <p>
                It looks as if you tried to access a page that doesn't exist.
            </p>
            <p>
                Go back to the <a href='/'>main page</a> and try again, please!
            </p>
            <p>
                Attempted path: <strong>{$page.path}</strong>
            </p>
        </div>
    </div>
</div>

