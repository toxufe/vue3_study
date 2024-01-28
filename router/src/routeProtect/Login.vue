<script setup lang="ts">
import { reactive ,ref,onMounted} from "vue";
import {useRouter,useRoute} from "vue-router";
import { ElMessage} from "element-plus";
import type {FormItemRule,FormInstance} from "element-plus";
import axios from 'axios'
const router = useRouter();
const route = useRoute();

type Form = {
    user: string;
    password: string;
}

type Rules = {
    [K in keyof Form]:Array<FormItemRule>
}
const formInline = reactive<Form>({
    user: "admin2",
    password: "123456",
});

const form = ref<FormInstance>();
const onSubmit = () => {
    // router.push({path:'/home'});
    form.value?.validate((validate)=>{
        if(validate){
            router.push({path:'/home'});
            // localStorage.setItem('token','1');
            initRoute();
        }else{
            ElMessage.error('请输入完整!!!');
        }
    })
    
};

const rules = reactive<Rules>({
    user: [
        { required: true, message: "请输入帐号", trigger: "blur" },
    ],
    password: [
        { required: true, message: "请输入密码", trigger: "blur" },
    ],
});

const initRoute = async ()=>{
    const routes = await axios.get("http://localhost:9999/login",{params:formInline});
    routes.data.route.forEach((v:any)=>{
        router.addRoute({
            path:v.path,
            name:v.name,
            // 动态添加路由 不可以使用@ 必须使用相对路径
            component:()=>import(`./${v.component}`)
        })

        // router.getRoutes() 获取所有的路由列表
    });
}

</script>

<template>
    <div class="login">
        <el-card class="box-card">
            <el-form ref="form" :model="formInline" :rules="rules" class="demo-form-inline">
                <el-form-item label="帐号" prop="user">
                    <el-input v-model="formInline.user" placeholder="请输入帐号" />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="formInline.password" placeholder="请输入密码" type="password" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<style lang="scss" scoped>
.login {
    height: 1000000px;
    // overflow: scroll;
    // display: flex;
    // justify-content: center;
    // align-items: center;
}
</style>
