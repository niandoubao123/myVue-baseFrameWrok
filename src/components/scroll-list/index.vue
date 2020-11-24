<template>
  <view class="page-ticket">
    <mescroll-uni :fixed="fixed"  ref="mescrollRef" :top="top?top:'0'" :bottom="bottom?bottom:'0'" @init="mescrollInit" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption">
      <slot></slot>
	  </mescroll-uni>
  </view>
</template>
<style  lang="scss">
  .page-ticket{
    z-index: 0;
  }
</style>
