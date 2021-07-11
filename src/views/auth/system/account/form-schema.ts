/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-07-09 10:09:16
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-11 17:06:52
 * @Description: file content
 * @FilePath: /vue3_antd/src/views/auth/system/account/form-schema.ts
 */
import { getAllAdminRole } from '@/api/system/role'

// 与vue2的里面的data一样，函数返回新对象防止多处共用同一对象,造成数据混乱
export const getFormSchema = (): FormSchema => ({
  formItem: [
    {
      type: 'input',
      label: '用户名',
      field: 'username',
      value: '',
      props: {
        placeholder: '请输入用户名'
      },
      rules: [
        {
          required: true,
          message: '用户名不能为空'
        }
      ]
    },
    {
      type: 'input',
      label: '密码',
      field: 'password',
      hidden: false, // 是否隐藏
      value: '',
      props: {
        type: 'password',
        placeholder: '请输入密码'
      },
      rules: [
        {
          required: true,
          message: '密码不能为空'
        }
      ]
    },
    {
      type: 'input',
      label: '手机号',
      field: 'phone',
      hidden: false, // 是否隐藏
      value: '',
      props: {
        type: 'number',
        placeholder: '请输入手机号'
      },
      rules: [
        {
          required: true,
          message: '密码不能为空'
        },
        { len: 11 }
      ]
    },
    {
      type: 'radio',
      label: '性别',
      field: 'gender',
      hidden: false, // 是否隐藏
      value: 1,
      options: [
        { value: 1, label: '男' },
        { value: 0, label: '女' }
      ],
      rules: [
        {
          required: true
        }
      ]
    },
    {
      type: 'radio',
      label: '角色',
      field: 'roleId',
      value: [],
      options: [],
      loading: true,
      rules: [
        {
          required: true,
          message: '请选择角色'
          // type: 'array'
        }
      ],
      asyncOptions: async () => {
        // 异步数据回调
        // 获取角色列表
        const data = await getAllAdminRole()

        return data.map((item) => ({
          label: item.name,
          value: item.id
        }))
      }
    }
  ]
})
