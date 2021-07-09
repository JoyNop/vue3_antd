/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-07-09 10:09:16
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-09 10:24:01
 * @Description: file content
 * @FilePath: /vue3-antd-admin/src/layout/footer/index.tsx
 */
import { defineComponent } from 'vue'

import { Layout } from 'ant-design-vue'
import { CopyrightOutlined } from '@ant-design/icons-vue'
import styles from './index.module.scss'

const { Footer: ALayoutFooter } = Layout

export default defineComponent({
  name: 'PageFooter',
  components: { ALayoutFooter },
  setup() {
    return () => (
      <>
        <a-layout-footer class={styles.page_footer}>
          <div class={styles.page_footer_link}>
            <a href="https://github.com/vuejs/vue-next" target="_blank">
              vue 3.0
            </a>
          </div>
          <div class={styles.copyright}>
            Copyright <CopyrightOutlined /> 2021{' '}
            <a href="https://www.joynop.com" target="_blank">
              joynop
            </a>
          </div>
        </a-layout-footer>
      </>
    )
  }
})
