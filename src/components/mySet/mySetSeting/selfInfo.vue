<template>
    <div>
        <headerSet></headerSet>
        <div v-if="$store.state.people.code == 0" style="margin-top:50px;">
            <h1 style="text-align:center;font-size:15px;">请先登录</h1>
        </div>
        <div v-if="$store.state.people.code == 1">
        <div class="setInfo">
        <h1>上传头像</h1>
        <van-uploader
        v-model="fileList"
        multiple
        :max-count="1"
        :after-read="readFile"
        result-type="dataUrl"
        />          
        </div>
        </div>
    </div>
</template>

<script>
import headerSet from '../../headerPage/headerPublic'
    export default {
        data() {
            return {
            src:"",
            chosenContactId: null,
            editingContact: {},
            showList: false,
            showEdit: false,
            isEdit: false,
            list: [{
                name: '张三',
                tel: '13000000000',
                id: 0
            }],
            fileList: []
            };
        },
        components:{
            headerSet,
        },

        computed: {
            cardType() {
            return this.chosenContactId !== null ? 'edit' : 'add';
            },

            currentContact() {
            const id = this.chosenContactId;
            return id !== null ? this.list.filter(item => item.id === id)[0] : {};
            }
        },

        methods: {
            readFile(file) {
                console.log(file.content)
                this.src = file.content;
                this.$store.commit('people/setPic',{
                    src:file.content,
                    name:this.$store.state.people.obj.name
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
.setInfo{
    margin-top:50px;
}
</style>