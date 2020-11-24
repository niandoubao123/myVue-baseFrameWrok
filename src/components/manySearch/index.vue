<template>
  <div class="cont">
    <!-- 起止时间搜索 -->
    <div class="plateTime" v-if="searchType==='1'">
      <p class="plateTime-name">{{titleName}}</p>
      <div class="chooseTime">
        <div class="ST" @click="showTimeDialogMonth('st')">
          <span >{{startTime&&startTime.slice(0)||'请选择'}} </span>
          <i v-if="!startTime" class="icon iconfont vvv">&#xe60a;</i>
          <i v-else class="icon iconfont vvv" @click.stop="cancelTime('st')">&#xe678;</i>
        </div>
        <div class="TO">
          至
        </div>
        <div class="ET" @click="showTimeDialogMonth('et')">
          <span >{{endTime&&endTime.slice(0)||'请选择'}} </span>
          <i v-if="!endTime" class="icon iconfont vvv">&#xe60a;</i>
          <i v-else @click.stop="cancelTime('et')" class="icon iconfont vvv">&#xe678;</i>
        </div>
      </div>
    </div>
    <!-- 车牌搜索  目前还没友下拉 -->
    <div class="topPlate " v-if="searchType==='2'" >
      <p class="topPlate-name">{{titleName}}</p>
      <div class="enterPlate" style="justify-content:flex-start;">
        <input @click="touch" type="text" v-model="plateNumber1" :placeholder="placeholder?placeholder:'请输入'">
      </div>
    </div>
    <!-- 车牌搜索  目前还没友下拉 -->
    <div class="topPlate" v-if="searchType==='4'">
      <p class="topPlate-name" v-if="titleName">{{titleName}}</p>
      <div class="enterPlate">
        <div :class="['prov',EnterPlateNumber.input.whitchKey===0?'isEntering':'']" @click.stop="enterProv">{{EnterPlateNumber.input.firstWord}}</div>
        <div :class="['alb',EnterPlateNumber.input.whitchKey===1?'isEntering':'']" @click.stop="enterAlbn">{{EnterPlateNumber.input.secondWord}}</div>
        <div :class="['plate',EnterPlateNumber.input.whitchKey===2?'isEntering':'']" @click.stop="enterLastn">{{EnterPlateNumber.input.lastWords}}</div>
        <button type="" @click="clickSearch" v-if="!noNeedBtn">{{btnWords?btnWords:'搜索'}}</button> 
      </div>
    </div>
    <!-- 文字搜索 -->
    <div class="topPlate" v-if="searchType==='3'">
      <p class="topPlate-name">{{titleName}}</p>
      <div class="enterPlate">
        <input type="text">
      </div>
    </div>
    <!-- 省简称 -->
    <div class="MASK" v-if="EnterPlateNumber.input.showProvince===true" :style="{width:noNeedMask==='y'?0:'',height:noNeedMask==='y'?0:'',marginTop:maskTop?maskTop/75+'rem':0+'rem'}">
      <div class="province" >
        <ul class="keyboard province" id="province">
          <li v-for="(item,index) in EnterPlateNumber.input.provinceList" :key="index" @click.stop="enterPro(item)">{{item.provinceName}}</li>
          <li class="delete" @click.stop="deletePro"><i class="icon">&#xe602;</i>删</li>
        </ul>
      </div>
    </div>
    
    <!-- 数字字母 -->
    <div class="MASK" v-if="EnterPlateNumber.input.showAlb===true" :style="{width:noNeedMask==='y'?0:'',height:noNeedMask==='y'?0:'',marginTop:maskTop?maskTop/75+'rem':0+'rem'}">
      <div class="province" >
        <ul class="keyboard number" id="number" >
          <li :class="['num',EnterPlateNumber.input.whitchKey===1?'disabled':'']" v-if="item.isNumber===true" v-for="(item) in EnterPlateNumber.input.plateAlbList" :key="item.AlbName" @click.stop="enterAlb(item)">{{item.AlbName}}</li>
          <li v-if="item.isNumber===false" v-for="(item) in EnterPlateNumber.input.plateAlbList" :key="item.AlbName" @click.stop="enterAlb(item)">{{item.AlbName}}</li>
          <li class="delete deletes" @click.stop="deleteAlb"><i class="icon">&#xe602;</i>删</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss" scoped>
  .isEntering{
    border:1.5px solid #17B1B7 !important;
  }
  // 键盘
  .keyboard{
    position:fixed;
    bottom:0;
    left:0;
    background-color:#ced2d9;
    width:100%;
    height:360px;
    margin:0;
    padding:0;
    font-size:36px;
    z-index:1;
  }
  .keyboard li {
      list-style:none;
      border-radius:10px;
  }
  .keyboard li {
      float:left;
      background-color:#fefefe;
      margin-left:15px;
      margin-top:15px;
  }
  .province li{
      width:calc((100% - 15px * 11) / 10);
      height:calc((100% - 15px * 5) / 4);
      display:flex;
      display:-webkit-flex;
      align-items:center;
      -webkit-align-items:center;
      justify-content: center;
      -webkit-justify-content: center;
  }
  .province li.delete{
      width:calc((100% - 15px * 11) / 10 * 2 + 15px);
  }
  .province li.deletes{
      width:calc((100% - 15px * 11) / 10 * 2 + 155px);
  }
  .disabled{
    color: rgba(0,0,0,0.15);
  }
  .cont{
    width: 100%;
  }
  .topPlate{
    margin-bottom: 40px;
    .topPlate-name{
      font-size: 30px;
      margin-bottom: 20px;
    }
    .enterPlate{
      height: 70px;
      input{
        border:none;
        border:2px solid rgba(0,0,0,0.15);
        border-radius: 10px;
        float: left;
        text-align: left;
        text-indent: 10px;
        font-size: 28px;
        width: 100%;
        height: 80px;
      }
    }
  }
  .plateTime{
    .plateTime-name{
      font-size: 30px;
      margin-bottom: 20px;
    }
    .chooseTime{
      height: 80px;
      div{
        float: left;
      }
      .TO{
        width: 40px;
        height: 80px;
        text-align: center;
        line-height: 80px;
        margin:0 5px;
      }
      .ST,.ET{
        width: 320px;
        height: 80px;
        border:2px solid rgba(0,0,0,0.15);
        border-radius: 10px;
        position: relative;
        text-align: left;
        line-height: 80px;
        font-size: 24px;
        text-indent: 10px;
        color: rgba(0,0,0,0.45);
      .vvv{
        position: absolute;
        right: 15px;
        top: 0;
        color: rgba(0,0,0,0.45);
      }
      }
    }
  }
  .topPlate{
    width:100%;
      // margin-bottom: 50px;
      .topPlate-name{
        font-size: 30px;
        margin-bottom: 20px;
      }
      .enterPlate{
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        div{
          width: 80px;
          height: 80px;
          line-height: 75px;
          border:1.5px solid rgba(0,0,0,0.15);
          border-radius: 10px;
          background: #fff;
          margin-right: 20px;
          font-size: 30px;
          text-align: center;
        }
        .plate{
          width: 300px;
          height: 80px;
          text-align: left;
          text-indent: 10px;
        }
        button{
          // width: 140px;
          height: 75px;
          padding:0 10px;
          background: transparent;
        }
      }
    }
    .MASK{
      width:100%;
      height:100vh;
      background: rgba(0,0,0,0.45);
    }
</style>