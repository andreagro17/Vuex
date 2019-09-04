<template>
<div>
<!--    <p>Counter is: {{ counter }}</p>
    <p>Number of Clicks: {{ clicks }}</p> -->
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks: {{ stringCounter }}</p>

</div>
</template>

<script>
//need to import the helper func from vuex which is called mapGetters, a way to not use computed prop
// helper method (mapGetter will create all the computed prop we need on its own)
import { mapGetters } from 'vuex'
    // export default {
    //    props: ['counter']
    // }
//now this would disap ------
// export default {
//        computed: {
//            counter() {
//            //    return this.$store.state.counter * 2
//            return this.$store.getters.doubleCounter
//            },
//            clicks() {
//                return this.$store.getters.stringCounter
//            }
//        }
//    }
// ----------------------------
export default{ 
  computed: mapGetters([
      'doubleCounter',
      'stringCounter'
  ])
}
</script>