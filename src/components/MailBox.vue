<template>
  <div class="mailbox">
    <h2>{{account}}</h2>
    <h3 v-if="!isentire">- {{box}}:</h3>
    <table></table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const props = defineProps(['account', 'box'])

const isentire = computed(()=>!props.box)


</script>

<style scoped>

</style>
