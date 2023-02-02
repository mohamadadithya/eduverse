<script lang="ts">
    interface Props {
        classes?: string
    }

    let classes: Props
</script>

<div class="container mx-auto px-4 {classes}">
    <slot />
</div>