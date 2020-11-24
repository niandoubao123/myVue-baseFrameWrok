<template>
  <div class="ys-map">

    <div class="map-wrapper">
      <div id="map"></div>
      <img class="position" src="../assets/images/a2.jpg" alt="position">
      <img class="nowposition" @click="locate" src="../assets/images/a1.jpg" alt="nowposition">
    </div>

    <div id="tips">
      <AddressItem :title="'当前位置'" :address="currentAddress" :extra="'(以图上标记位置为准)'"/>
      <AddressItem v-for="(item,index) in potentialLocation" v-bind:key="index" :title="item.title" :address="item.address" @click.native="selectAddress(item)"/>
      <div v-if="potentialLocation.length===0">{{point.lng}},{{point.lat}}</div>
    </div>

    <div class="ys-search-address">
      <img class="back" src="../assets/images/a1.jpg" alt="back" @click="onBackClick">
      <div class="ys-search-wrapper">
        <input type="text" v-model="searchValue" title="" id="suggestId" placeholder="定位不准？试试手动输入">
        <img src="../assets/images/a1.jpg" alt="search" @click="searchValue=''">
      </div>
      <a class="okBtn" href="javascript:;" @click="onOkClick">确定</a>
    </div>

    <div class="search-tips" id="result">
      tips
    </div>
  </div>
</template>

<script>
  import AddressItem from "./AddressItem";
  export default {
    name: "Map",
    components: {AddressItem},
    mounted(){
      this.$toast({text:"点击或拖动选址~",position:"top"});
      this.$nextTick(()=>{
        this.initMaps();
        this.locate();
        this.getSuggestion();
      })
    },
    methods:{
      initMaps(){
        this.map = new BMap.Map("map");
        let mPoint = new BMap.Point(116.404, 39.915);//Tiananmen Square
        this.map.centerAndZoom(mPoint,18);
        this.map.addEventListener("click", this.onMapClicked);
        this.map.addEventListener('dragend',()=>{
          let pixel = this.map.pointToOverlayPixel(this.map.getCenter());
          let point = this.map.overlayPixelToPoint({x:pixel.x,y:pixel.y});
          this.analyze(point);
        })
      },
      locate(){
        let map = this.map;
        let geolocation = new BMap.Geolocation();
        const vm = this;
        geolocation.getCurrentPosition(function(r){
          if(this.getStatus() === BMAP_STATUS_SUCCESS){
            let mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            vm.analyze(r.point);
          }else {
            console.log('failed ',this.getStatus());
          }
        });
        //loading--
      },
      getAroundPOI(keyword){
        let map = this.map;
        let mPoint = new BMap.Point(this.point.lng, this.point.lat);//h5 112.983323,28.141431
        let vm = this;
        let local =  new BMap.LocalSearch(map, {
          onSearchComplete(results){
            if (local.getStatus() === BMAP_STATUS_SUCCESS){
              let temp = [];
              results.forEach(item=>{
                temp = temp.concat(item.Ar);
              });
              vm.potentialLocation = temp;
            }else{
              console.warn("get poi error ,code -> ",local.getStatus());
            }
          }
        });
        local.searchNearby(keyword,mPoint,1000);
      },
      /**
       * Attention: 解析地址会有异常--有时候会解析正确，有时候只会解析到区
       * @param point lng and lat
       */
      analyze(point){//point:{lat:"",lng:""}
        const geoc = new BMap.Geocoder();
        geoc.getLocation(point, rs=>{
          this.point = rs.point;//===r.point
          this.currentAddress = rs.address;
          this.poiKeyword = rs.street||rs.address;
        });
      },
      /**
       * search tips
       */
      getSuggestion(){
        let ac = new BMap.Autocomplete({"input" : "suggestId","location" : this.map});
        ac.addEventListener("onconfirm", e=> {
          let _value = e.item.value;
          this.searchValue = _value.province + _value.city + _value.district + _value.street + _value.business;
          this.setPlace(this.searchValue);
        });
      },
      selectAddress(item){
        //todo: return item the same as onOkClicked function
      },
      setPlace(val){
        let map = this.map;
        map.clearOverlays();
        const vm = this;
        let local = new BMap.LocalSearch(map, {
          onSearchComplete(){
            let pp = local.getResults().getPoi(0).point;
            map.centerAndZoom(pp, 18);
            map.addOverlay(new BMap.Marker(pp));
            vm.analyze(pp);
          }
        });
        local.search(val);
      },
      onMapClicked(e){
        console.log(e);//todo: get point with dialog and return
      },
      onBackClick(){
        //todo: cancel
      },
      onOkClick(){
        //todo: get this address and return.
        console.log("已选中当前位置!");
        console.log(this.currentAddress,this.point)
      }
    },
    data(){
      return {
        map:null,
        searchValue:"",
        currentAddress:"",
        point:{},
        poiKeyword:"",
        potentialLocation:[],
      }
    },
    watch:{
      poiKeyword(n){
        this.getAroundPOI(["栋","店","小区","学校","餐饮",n]);
      }
    }
  }
</script>

<style lang="less" scoped>
  .ys-map{
    height: 100%;
    overflow: hidden;
    position: relative;
    .map-wrapper{
      height: 50%;
      position: relative;

      #map{
        height: 100%;
      }
      img{
        width: 32px;
        object-fit: contain;
      }
      .position{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-75%);//The bottom of the icon is centered,75  = 50(center) + 25(top)
        z-index: 100;
      }
      .nowposition{
        position: absolute;
        right: 20px;
        bottom:20px;
        z-index: 100;
      }

    }
    #tips{
      width: 100%;
      height: 50%;
      overflow-y: scroll;
      position: relative;
      padding: 1px 12px;
    }
    .ys-search-address{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 50px;

      background: #f2f2f2;
      padding: 8px 0;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .back{
        width: 20px;
        object-fit: contain;
      }
      .okBtn{
        background: #FFDF5C;
        padding: 5px 12px;
        border: 1px solid #ffcf6e;
        color: #333;
        border-radius: 8px;
      }
      .ys-search-wrapper{
        width: 68%;
        border-radius: 20px;
        background: rgba(0, 0, 0, .06);

        display: flex;
        align-items: center;
        input{
          padding: 8px 12px;
          background: transparent;

          width: 90%;
          height: 100%;
        }

        img{
          width: 12px;
          object-fit: contain;
        }
      }
    }
    .search-tips{
      position: absolute;
      left: 0;
      top: 50px;
      background: rgba(255,255,255,.8);
      border:1px solid #C0C0C0;
      height:auto;
      display:none;
    }
  }
</style>

