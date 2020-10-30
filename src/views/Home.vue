<template>
  <div id="home-container">
    <div ref="frameRef" class="center-frame">
      <div class="login-in">
        <h1>登录</h1>
        <a-form
          ref="loginFormRef"
          name="ogin_in"
          :model="loginForm"
          :label-col="{ span: 4, offset: 3 }"
          :wrapper-col="{ span: 12, offset: 1 }"
          :rules="loginRules"
          @finish="onSubmit"
        >
          <a-form-item has-feedback label="账号" name="account">
            <a-input
              v-model:value="loginForm.account"
              placeholder="你的手机号/邮箱"
            />
          </a-form-item>
          <a-form-item has-feedback label="密码" name="password">
            <a-input-password
              v-model:value="loginForm.password"
              autocomplete
              placeholder="密码"
            />
          </a-form-item>
          <a-form-item :wrapper-col="{ offset: 8 }">
            <a-button type="primary" htmlType="submit">
              submit
            </a-button>
            <a-button
              type="primary"
              htmlType="reset"
              style="margin-left: 20px;"
              @click="resetForm"
            >
              reset
            </a-button>
          </a-form-item>
        </a-form>
        <p class="change-register">
          没有账号？<span @click="toRegister">点我注册</span>
        </p>
      </div>
      <div class="register">
        <h1>注册</h1>
        <a-form
          ref="registerFormRef"
          name="register"
          :model="registerForm"
          :label-col="{ span: 4, offset: 3 }"
          :wrapper-col="{ span: 12, offset: 1 }"
          :rules="registerRules"
        >
          <a-form-item has-feedback label="手机号" name="mobileNumber">
            <a-input v-model:value="registerForm.mobileNumber" />
          </a-form-item>
          <a-form-item has-feedback label="密码" name="password">
            <a-input-password
              v-model:value="registerForm.password"
              placeholder="密码"
              autocomplete
            />
          </a-form-item>
          <a-form-item :wrapper-col="{ offset: 10 }" style="margin-top:20px">
            <a-button type="primary" @click="onRegister">
              submit
            </a-button>
          </a-form-item>
        </a-form>
        <p class="change-login-in">
          已有账号&nbsp;<span @click="toLoginIn">去登录</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import useLoginIn from '@/composables/home/useLoginIn';
import useRegister from '@/composables/home/useRegister';
export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const frameRef = ref<any>(null);
    const router = useRouter();
    const {
      loginFormRef,
      loginForm,
      loginRules,
      onSubmit,
      resetForm,
      toRegister
    } = useLoginIn(frameRef, router);
    const {
      registerFormRef,
      registerForm,
      registerRules,
      onRegister,
      toLoginIn
    } = useRegister(frameRef);

    return {
      frameRef,
      loginFormRef,
      loginForm,
      loginRules,
      onSubmit,
      resetForm,
      toRegister,
      registerFormRef,
      registerForm,
      registerRules,
      onRegister,
      toLoginIn
    };
  }
});
</script>

<style lang="scss" scoped>
#home-container {
  width: 100vw;
  height: 100vh;
  background-color: #2a2b38;
  position: relative;
}

.center-frame {
  width: 400px;
  height: 300px;
  position: absolute;
  left: calc(50% - 200px);
  top: calc(50% - 150px);
}

.login-in,
.register {
  width: 100%;
  height: 100%;
  background-color: rgb(255, 250, 245);
  border-radius: 25px;
  position: absolute;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transition: 0.3s linear;
  h1 {
    text-align: center;
  }
}

.login-in {
  transform: rotate(0deg);

  .change-register {
    font-size: 14px;
    text-align: center;
    span {
      color: skyblue;
      cursor: pointer;
    }
  }
}

.register {
  transform: rotateY(-180deg);
  .change-login-in {
    font-size: 14px;
    text-align: center;
    span {
      color: skyblue;
      cursor: pointer;
    }
  }
}

/* 将front旋转180度 */
.middle-flip .login-in {
  transform: rotateY(180deg);
}
/* 将back旋转180度 */
.middle-flip .register {
  transform: rotateY(0deg);
}
</style>
