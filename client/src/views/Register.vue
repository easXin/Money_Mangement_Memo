<template>
    <div class="register">
        <section class="form_container">
            <div class="manage_tip">
                <span class="title">
                    Backend management system
                </span>
            </div>
        </section>
    </div>
</template>
<script>
    export default {
        name: "index",
        components:{}
    };
</script>

<style>
.register{
    position: relative;
    width:100px;
    height:100px;
    background:url('../assets/bg.jpg') no-repeat center center;
    background-size:100% 100%;
}
.form_container{
    width:370px;
    height: 210px;
    position:absolute;
    top:10%;
    left:34%;
    padding:25px;
    border-radius:5px;
    text-align:center;


}


.form_container .manage_tip .title{
    font-family :"Microsoft YaHei";
    font-weight: bold;
    font-size:26px;
    color:#fff;
}
</style>