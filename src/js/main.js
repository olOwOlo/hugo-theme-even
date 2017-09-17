import {Even} from './even.js'

import '../css/style.scss'

$(document).ready(function () {
  Even.backToTop()
  Even.mobileNavbar()
  Even.beforeToc()
  Even.toc()
  Even.fancybox()
})

hljs.initHighlighting()
Even.highlight()
