<template>
  
</template>

<script>
export default {
    name: 'JSArr',
    data () {
        return {
            msg: {
                'name': 'jackey',
                'age': 19,
                'sex': 'men',
                'a': ''
            },
            pageIndex: 1
        }
    },
    mounted () {
        this.searchName()
    },
    methods: {
        searchName () {
            this.$myaxios({
                url: '/indexShopGoods?pageIndex=1'
            }).then(res => {
                console.log(res)
            })
        }
    }
}
</script>

<style lang='scss'>

</style>