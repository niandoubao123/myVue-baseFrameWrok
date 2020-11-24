<template>
<div>
    <div id="Map" ref="map" class="map"></div>
</div>
  
 
</template>
<script>
export default {
   data() {
    return {
      map: null,
      routeLayer: null,
      routeFeature: null,
      lineData: [],
    };
  },
}
</script>

<style lang="scss">
    .map{
        width:800px;
        height:800px;
    }
</style>
