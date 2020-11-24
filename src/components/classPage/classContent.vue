<template>
	<div>
        <div class="content">
            <div class="left" ref="left">
                <ul>
                    <li v-for="(item,index) in $store.state.classes.left" :key="index"  :class="{current:index==currentIndex}" @click="selectItem(index,$event)">
                        <span class="left-item">{{item}}</span>
                        
                    </li>
                </ul>
            </div>
            <div class="right" ref="right">
                <ul>
                    <!-- 循环嵌套 -->
                    <li v-for="(item,index) in $store.state.classes.right" :key="index" class="right-item right-item-hook">
                        <div class="aui-class-img">
                            <img :src=item.adver alt="" style="margin-top:10px;height:65px;">
                        </div>
                        <h2 class="aui-scroll-content-title" style="font-size:15px;font-weight:bold;line-height:50px;">{{item.name}}</h2>
                        <section class="aui-grid-content">
                            <div class="aui-grid-row aui-grid-row-clear">
                                <a class="aui-grid-row-item" @click="classDes(index,index1)" v-for="(pic,index1) in item.content" :key="index1">
                                    <i class="aui-icon-large aui-icon-sign"><img :src=pic.src alt="" style="width:100%;height:100%;"></i>
                                    <p class="aui-grid-row-label">{{pic.title}}</p>
                                </a>
                            </div>
                        </section>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
// import BScroll from 'better-scroll'
import BScroll from "@better-scroll/core";
       export default {
        data:function(){
            return {
                scrollY:0,
                listHeight:[]  //存储右边每一项li高度
            }
        },
        methods: {
                _initScroll(){
                    // 联动实例化插件对象
                    this.lefts = new BScroll(this.$refs.left,{
                        click:true, //拥有触发事件，
                        probeType:3 //探针的效果，时时获取滚动高度
                    });
                    this.rights = new BScroll(this.$refs.right,{
                        click:true,
                        probeType:3 //探针的效果，时时获取滚动高度
                    });

                    // right这个对象监听滚动事件，
                    this.rights.on("scroll",(pos)=>{
                        this.scrollY = Math.abs(Math.round(pos.y));
                    })
                },
                _getHeight(){
                    let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                    let height = 0;//默认高度
                    this.listHeight.push(height); //添加高度数组中
                    // 循环对象
                    for(let i = 0;i < rightItems.length;i++){
                        let item = rightItems[i];
                        height += parseInt(item.clientHeight); // 对象高度
                        this.listHeight.push(height);
                    }
                    console.log(this.listHeight);
                },
                // 左侧点击效果
                // index 下标
                // event 点击对象事件
                selectItem(index,event){
                    // 在better-scroll指派事件的event和普通浏览器的点击事件event有个属性区别_constructed
                    // 浏览器原生点击事件没有_constructed所以当时浏览器监听到该属性时候return掉
                    if(!event._constructed){
                        return;
                    }else{
                        // 联动效果
                        let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                        let el = rightItems[index];
                        // scrollToElement()//滚动到指定的目标元素
                        this.rights.scrollToElement(el);

                        // 左边联动
                        let leftItems = this.$refs.left.getElementsByTagName("li");
                        let elLi = leftItems[index];
                        this.lefts.scrollToElement(elLi);


                    }
                },
                classDes(index,index1){
                    this.$store.commit('classes/classDes',{
                        index,index1
                    })
                    this.$router.push({
                        path:'/des',
                        query:{
                            name:this.$store.state.people.obj.name,
                            title:this.$store.state.classes.right[index].content[index1].title,
                            src:this.$store.state.classes.right[index].content[index1].src,
                            price1:this.$store.state.classes.right[index].content[index1].price1,
                            thingscount:1,
                            checked:false,
                            id:this.$store.state.classes.right[index].content[index1].id,
                            status:this.$store.state.classes.right[index].content[index1].status,
                        }
                    })
                }
            },
            // 生命周期函数
            mounted() {  //页面渲染到浏览器时候
                // 生命周期函数执行代码速度比页面渲染浏览器执行速度快。html代码没有渲染成功？
                // 保证页面代码浏览器正常执行后，在执行当前生命周期函数代码段
                // $nextTick() 让所有DOM执行完后，回调执行方法
                this.$nextTick(()=>{
                    this._initScroll();//调用初始化联动效果
                    this._getHeight(); //获取右边每一项高度
                })

            },
            
            // 计算属性
            computed: {
                currentIndex(){
                    for(let i = 0; i < this.listHeight.length;i++){
                        let height = this.listHeight[i];
                        let height2 = this.listHeight[i+1];
                        // height2不存在时候，或落在height和height2之间时候，直接放回索引值
                        if(!height2 || (this.scrollY >=height && this.scrollY < height2) ){
                        
                            // 左边联动
                           
                            return i;
                        }
                    }
                    // 如果this.listHeight没有值，返回0
                    return 0;
                }
            },
    }
</script>

<style lang="scss" scoped>
        *{
            padding:0px;
            margin:0px;
        }
        ul{
            list-style: none;
        }
        .content{
            display: flex;
            position: absolute;
            /* 定位里面不写定义左右样式，不写高度，自动获取高度 */
            top:45px;
            bottom:0px;
            background-color: #fff;
            width: 100%;
            overflow: hidden;
        }
        .left{
            flex:0 0 80px;
            width: 79px;
            border-right:1px solid rgba(255,255,240,.8);
            background-color: #fff;
        }
        .left li{
            width:100%;
            height: 100%;
            font-size: 15px;
        }
        .left li.current{
            background-color: #fff;
            color:#ff6767;
            border-left:2px solid #ff6767;
            border-bottom-color:transparent;
            font-weight: bold;
        }
        .left-item{
            display: block;
            width: 100%;
            height: 100%;
            line-height: 50px;
            height: 50px;
            text-align: center;
        }
        .right{
            flex:1;
            background-color: #fff;
        }
</style>