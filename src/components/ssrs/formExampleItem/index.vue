<template>
  <div class="orderP-wrap">
    <p ref="orderP">
      <span
        :class="['titleName', isNeed === 'off' ? 'hiddenName' : 'on']"
        :style="{ 
          width: minWidth ? minWidth + 'rpx' : 130 + 'rpx' ,
          color:titleBlack==='y'?'#000':'rgba(0, 0, 0, 0.45)'
        }"
        >{{ titleName }}</span
      >
      <span
        @click="toCall"
        v-if="!callPhone&&titleData || titleData === 0"
        :class="[
          'titleData',
          needOver === 'y' ? 'titleData1' : '',
          needGray === 'y' ? 'needGray' : '',
        ]"
        >{{ titleData }}</span
      >
      <span
        @click.stop="toCall"
        v-if="callPhone&&titleData || titleData === 0"
        :class="[
          'titleData',
          needOver === 'y' ? 'titleData1' : '',
          needGray === 'y' ? 'needGray' : '',
        ]"
        >{{ titleData }}</span
      >
      <slot></slot>
    </p>
  </div>
</template>
<style scoped lang="scss" scoped>
.orderP-wrap {
  margin-bottom: 10rpx;
  width: 100%;
  p {
    width: 100%;
    height: auto;
    font-size: 30rpx;
    margin-bottom: 18rpx;
    display: flex;
    span {
      line-height: 40rpx;
    }
    &:last-child {
      margin-bottom: 0;
    }
    .titleName {
      word-break:keep-all;
      margin-right: 20rpx;
      color: rgba(0, 0, 0, 0.4);
    }
    //例如日志界面的特殊需求  有一个msg的项不需要标题
    .hiddenName {
      display: none;
    }
    .titleData {
      flex: 1;
      word-break: break-all;
      color: rgba(0,0,0,0.6);
    }
    .titleData1 {
      //这个是溢出....
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: break-all;
    }
    //置灰
    .needGray {
      color: rgba(0, 0, 0, 0.45);
    }
  }
}

</style>