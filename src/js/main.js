import {Even} from './even.js'

import '../css/style.scss'

hljs.initHighlighting()
Even.highlight()

$(document).ready(function () {
  Even.backToTop()
  Even.mobileNavbar()
  Even.beforeToc()
  Even.toc()
  Even.fancybox()
})
