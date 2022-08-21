
import { createRouter, createWebHashHistory } from 'vue-router'

import Index from '@/components/Index.vue'
import MailBox from '@/components/MailBox.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/:account/',
      name: 'mailbox-all',
      component: MailBox,
      props: true,
    },
    {
      path: '/:account/:box',
      name: 'mailbox',
      component: MailBox,
      props: true,
    }
  ]
})

export default router
