/*
 * @Description: 登录操作流程
 * @Author: 小熊熊
 * @Date: 2020-10-26 19:28:38
 * @LastEditors: 小熊熊
 * @LastEditTime: 2020-10-30 10:46:49
 */
import { Validator } from 'ant-design-vue/types/form/form';
import { reactive, Ref, ref } from 'vue';
import { Router } from 'vue-router';
import { login } from '@/api/user/user';
import { app } from '@/main';

interface LoginFormData {
  account: string;
  password: string;
}
export default function useLoginIn(frameRef: Ref<any>, routerInstance: Router) {
  // 登录栏dome元素
  const loginFormRef = ref<any>(null);
  // 表单数据
  const loginForm = reactive<LoginFormData>({
    account: '',
    password: ''
  });

  const validateAccount: Validator = async (rule, value) => {
    if (value === '') {
      return Promise.reject('请输入账号');
    }
    if (
      !/^1[3-9]\d{9}$/.test(value) &&
      !/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(value)
    ) {
      return Promise.reject('请输入正确的手机或邮箱号');
    }
    return Promise.resolve();
  };
  // 校验规则
  const loginRules = reactive({
    account: [{ required: true, validator: validateAccount, trigger: 'blur' }],
    password: [
      {
        required: true,
        message: '请输入密码',
        trigger: 'blur'
      }
    ]
  });

  // 提交流程
  const onSubmit = async function() {
    try {
      const values = await loginFormRef.value.validateFields();
      const loginRes = await login(values);
      if (loginRes.data.status === 200) {
        app.config.globalProperties.$message.success('登陆成功');
        routerInstance.push({ name: 'Main' });
      }
    } catch (error) {
      // 校验失败
    }
  };

  const resetForm = function() {
    loginFormRef.value.resetFields();
  };

  const toRegister = function() {
    frameRef.value.classList.add('middle-flip');
  };

  return {
    loginFormRef,
    loginForm,
    loginRules,
    onSubmit,
    resetForm,
    toRegister
  };
}
