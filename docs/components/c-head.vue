<template>
    <div id="head">
        <h3>{{title}}</h3>
        <p>the header of site</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            title:"my blog"
        }
    }
}
</script>
<style lang="stylus">
    h3{
        color:#666;
    }
</style>