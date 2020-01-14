<template>
    <div class="aboutme">
        <a class="avatar">
            <img src={{user.avatar}} alt="">
        </a>
        <p>作者：{{user.name}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            user:{
                name:"hboot",
                avatar:"",
                emial:"bobolity@163.com"
            }
        }
    }
}
</script>