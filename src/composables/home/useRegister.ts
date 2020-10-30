/*
 * @Description:
 * @Author: 小熊熊
 * @Date: 2020-10-27 10:48:40
 * @LastEditors: 小熊熊
 * @LastEditTime: 2020-10-30 10:31:18
 */
import { ref, reactive, Ref } from 'vue';
import { register } from '@/api/user/user';
import { app } from '@/main';
interface RegisterModule {
  mobileNumber?: string;
  password: string;
}

export default function useRegister(frameRef: Ref<any>) {
  // 注册栏dome元素
  const registerFormRef = ref<any>(null);
  // 表单数据
  const registerForm = reactive<RegisterModule>({
    mobileNumber: '',
    password: ''
  });
  // 校验规则
  const registerRules = reactive({
    mobileNumber: [
      {
        required: true,
        message: '请输入手机号',
        trigger: 'blur'
      },
      {
        pattern: /^1[3-9]\d{9}$/,
        message: '请输入正确的手机号',
        trigger: 'blur'
      }
    ],
    password: [
      {
        required: true,
        message: '请输入密码',
        trigger: 'blur'
      },
      {
        pattern: /^(\w){6,20}$/,
        message: '请输入6-20个字母,数字,下划线',
        trigger: 'blur'
      }
    ]
  });

  // 跳转登录框
  const toLoginIn = function() {
    frameRef.value.classList.remove('middle-flip');
  };

  // 注册流程
  const onRegister = async function() {
    try {
      const values = await registerFormRef.value.validateFields();
      const { data } = await register(values);
      if (data.status === 200) {
        app.config.globalProperties.$message.success('注册成功!,将在3s后跳转');
        const timer = setTimeout(() => {
          toLoginIn();
          clearTimeout(timer);
        }, 3000);
      } else {
        app.config.globalProperties.$message.success(data.message);
      }
    } catch (error) {}
  };

  return {
    registerFormRef,
    registerForm,
    registerRules,
    onRegister,
    toLoginIn
  };
}
