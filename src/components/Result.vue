<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    // export default {
    //    props: ['counter']
    // }
    export default {
        computed: {
            counter() {
            //    return this.$store.state.counter * 2
            return this.$store.getters.doubleCounter
            }
        }
    }
</script>