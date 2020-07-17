<template>
    <div>
        <el-checkbox v-model="checkAll" @change="handleCheckAll">全选</el-checkbox>
        <el-checkbox @change="handleCheckReverse">反选</el-checkbox>
        <el-checkbox-group v-model="checkCites">
            <el-checkbox v-for="(item,index) in cityName" :key="index" :label="item">{{ item.name }}</el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script>
export default {
    name: 'checkBox',
    data () {
        return {
            checkAll: false,
            indeterminate: true,
            cityName: [
                { name: '北京' },
                { name: '上海' },
                { name: '广州' },
                { name: '深圳' }
            ],
            checkCites: []
        }
    },
    mounted () {
        
    },
    methods: {
        handleCheckAll (val) {
            this.checkCites = val? this.cityName : []
        },
        handleCheckReverse () {
            this.checkCites = this.cityName.filter(item => this.checkCites.indexOf(item) == -1)
            console.log(this.cityName.filter(item => this.checkCites.indexOf(item) >= 0))
        }
    }
}
</script>

<style lang="scss">

</style>