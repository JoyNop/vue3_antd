/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-07-09 10:09:16
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-11 17:51:10
 * @Description: file content
 * @FilePath: /vue3_antd/src/views/auth/system/account/columns.ts
 */
import { delAdminAccount, putAdminAccount } from '@/api/system/account'
import { formatDate } from '@/utils/common'
import { useFormModal } from '@/hooks/useFormModal'
import { getFormSchema } from './form-schema'

export const columns: TableColumn[] = [
  // 账号列表
  {
    title: '编号',
    dataIndex: 'id'
  },
  {
    title: '用户名',
    dataIndex: 'username'
  },
  {
    title: '性别',
    dataIndex: 'gender',
    slots: {
      customRender: 'gender'
    },
    slotsType: 'format',
    slotsFunc: (gender) => (gender === 1 ? '男' : '女')
  },
  {
    title: '角色',
    dataIndex: 'roleName'
  },
  {
    title: '状态',
    dataIndex: 'state',
    slots: {
      customRender: 'state'
    },
    slotsType: 'component',
    slotsFunc: (state) => {
      switch (state) {
        case 0:
          return '待审'
        case 1:
          return '正常'
        case 2:
          return '禁用'
      }
    }
  },
  // {
  //   title: '所属角色',
  //   dataIndex: 'roles',
  //   slots: {
  //     customRender: 'roles'
  //   },
  //   slotsType: 'format',
  //   slotsFunc: (roles) => roles.map((it) => it.title).join(', ')
  // },
  // {
  //   title: '创建时间',
  //   dataIndex: 'createdAt',
  //   slots: {
  //     customRender: 'createdAt'
  //   },
  //   slotsType: 'format',
  //   slotsFunc: (val) => formatDate(val)
  // },
  // {
  //   title: '最后更新时间',
  //   dataIndex: 'updatedAt',
  //   slots: {
  //     customRender: 'updatedAt'
  //   },
  //   slotsType: 'format',
  //   slotsFunc: (val) => formatDate(val)
  // },
  {
    title: '操作',
    dataIndex: 'action',
    width: 200,
    slots: {
      customRender: 'action'
    },
    actions: [
      {
        type: 'popconfirm', // 控制类型，默认为a,可选： select | button | text
        text: '删除',
        // permission: {
        //   // 权限
        //   action: 'delete',
        //   effect: 'disabled'
        // },
        props: {
          type: 'danger'
        },
        func: async ({ record }, refreshTableData) =>
          await delAdminAccount(record.id).then(() => refreshTableData())
      },
      {
        type: 'button', // 控制类型，默认为a,可选： select | button | text
        text: '编辑',
        permission: {
          // 权限
          // action: 'update',
          // effect: 'disabled'
        },
        props: {
          type: 'warning'
        },
        func: ({ record }, refreshTableData) => {
          console.log(getFormSchema())

          return useFormModal({
            title: '编辑角色',
            fields: record,
            // hiddenFields: ['password'],
            formSchema: getFormSchema(),
            handleOk: async (modelRef, state) => {
              const { gender, id, password, phone, roleId, username } = modelRef

              console.log(modelRef, '4444')

              const params = {
                gender,
                id,
                password,
                phone,
                roleId,
                username
              }
              return await putAdminAccount(params).then(() => refreshTableData())
            }
          })
        }
      }
    ]
  }
]
