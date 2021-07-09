/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-07-08 15:25:14
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-09 11:06:49
 * @Description: file content
 * @FilePath: /vue3-antd-admin/src/views/auth/system/role/columns.tsx
 */
import { delAdminRole, patchAdminRole } from '@/api/system/role'
import { formatDate } from '@/utils/common'

import { useFormModal } from '@/hooks/useFormModal'
import { getFormSchema } from './form-schema'

export const columns: TableColumn[] = [
  // 角色列表
  {
    title: '编码',
    dataIndex: 'code'
  },
  {
    title: '名称',
    dataIndex: 'name',
    slots: {
      customRender: 'x-name'
    },
    slotsType: 'component',
    slotsFunc: (record) => <a-button>asdfsfs</a-button>
  },

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
        permission: {
          // 权限
          // action: 'delete',
          // effect: 'disabled'
        },
        props: {
          type: 'danger'
        },
        func: async ({ record }, refreshTableData) =>
          await delAdminRole(record.id).then(() => refreshTableData())
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
        func: ({ record }, refreshTableData) =>
          useFormModal({
            title: '编辑角色',
            fields: record,
            formSchema: getFormSchema(),
            handleOk: async (modelRef, state) => {
              const { description, title, accessIdsList } = modelRef

              const params = {
                description,
                title,
                accessIdsList: accessIdsList.toString()
              }
              return await patchAdminRole(record.id, params).then(() => refreshTableData())
            }
          })
      }
    ]
  }
]
