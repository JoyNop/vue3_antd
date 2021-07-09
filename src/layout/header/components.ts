/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-07-09 10:09:16
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-09 10:24:28
 * @Description: file content
 * @FilePath: /vue3-antd-admin/src/layout/header/components.ts
 */
import { Layout, Avatar, Menu, Dropdown, Breadcrumb, Tooltip } from 'ant-design-vue'

import {
  SettingOutlined,
  SearchOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  PoweroffOutlined,
  LockOutlined
} from '@ant-design/icons-vue'

export default {
  [Layout.Header.name]: Layout.Header,
  [Avatar.name]: Avatar,
  [Menu.name]: Menu,
  [Tooltip.name]: Tooltip,
  [Menu.Divider.name]: Menu.Divider,
  SettingOutlined,
  Dropdown,
  LockOutlined,
  SearchOutlined,
  [Breadcrumb.name]: Breadcrumb,
  [Breadcrumb.Item.name]: Breadcrumb.Item,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  PoweroffOutlined
}
