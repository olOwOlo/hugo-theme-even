'use strict'

var Even = {}

Even.backToTop = function () {
  var $backToTop = $('#back-to-top')

  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $backToTop.fadeIn(1000)
    } else {
      $backToTop.fadeOut(1000)
    }
  })

  $backToTop.click(function () {
    $('body,html').animate({ scrollTop: 0 })
  })
}

Even.mobileNavbar = function () {
  var $mobileNav = $('#mobile-navbar')
  var $mobileNavIcon = $('.mobile-navbar-icon')
  var slideout = new Slideout({
    'panel': document.getElementById('mobile-panel'),
    'menu': document.getElementById('mobile-menu'),
    'padding': 180,
    'tolerance': 70
  })
  slideout.disableTouch()

  $mobileNavIcon.click(function () {
    slideout.toggle()
  })

  slideout.on('beforeopen', function () {
    $mobileNav.addClass('fixed-open')
    $mobileNavIcon.addClass('icon-click').removeClass('icon-out')
  })

  slideout.on('beforeclose', function () {
    $mobileNav.removeClass('fixed-open')
    $mobileNavIcon.addClass('icon-out').removeClass('icon-click')
  })

  $('#mobile-panel').on('touchend', function () {
    slideout.isOpen() && $mobileNavIcon.click()
  })
}

Even.toc = function () {
  var SPACING = 20
  var $toc = $('.post-toc')
  var $footer = $('.post-footer')

  if ($toc.length) {
    var minScrollTop = $toc.offset().top - SPACING
    var maxScrollTop = $footer.offset().top - $toc.height() - SPACING

    var tocState = {
      start: {
        'position': 'absolute',
        'top': minScrollTop
      },
      process: {
        'position': 'fixed',
        'top': SPACING
      },
      end: {
        'position': 'absolute',
        'top': maxScrollTop
      }
    }

    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop()

      if (scrollTop < minScrollTop) {
        $toc.css(tocState.start)
      } else if (scrollTop > maxScrollTop) {
        $toc.css(tocState.end)
      } else {
        $toc.css(tocState.process)
      }
    })
  }

  var HEADERFIX = 30
  var $toclink = $('.toc-link')
  var $headerlink = $('.headerlink')

  var headerlinkTop = $.map($headerlink, function (link) {
    return $(link).offset().top
  })

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop()

    for (var i = 0; i < $toclink.length; i++) {
      var isLastOne = i + 1 === $toclink.length
      var currentTop = headerlinkTop[i] - HEADERFIX
      var nextTop = isLastOne ? Infinity : headerlinkTop[i + 1] - HEADERFIX

      if (currentTop < scrollTop && scrollTop <= nextTop) {
        $($toclink[i]).addClass('active')
      } else {
        $($toclink[i]).removeClass('active')
      }
    }
  })
}

Even.fancybox = function () {
  if ($.fancybox) {
    $('.post').each(function () {
      $(this).find('img').each(function () {
        $(this).wrap(`<a class="fancybox" href="${this.src}" data-fancybox="gallery" data-caption="${this.title}"></a>`)
      })
    })

    $('.fancybox').fancybox({
      selector: '.fancybox',
      protect: true
    })
  }
}

Even.highlight = function () {
  const blocks = document.querySelectorAll('pre code')
  for (const block of blocks) {
    const classList = block.classList
    const rootElement = block.parentElement
    const lineCodes = block.innerHTML.split(/\n/).slice(0, -1)
    const lineLength = lineCodes.length

    let codeLineHtml = ''
    for (let i = 0; i < lineLength; i++) {
      codeLineHtml += `<div class="line">${i + 1}</div>`
    }

    let codeHtml = ''
    for (const lineCode of lineCodes) {
      codeHtml += `<div class="line">${lineCode}</div>`
    }

    classList.add('highlight')
    const figure = document.createElement('figure')
    figure.classList = classList
    figure.innerHTML = `<table><tbody><tr><td class="gutter"><pre>${codeLineHtml}</pre></td><td class="code"><pre>${codeHtml}</pre></td></tr></tbody></table>`

    rootElement.parentElement.replaceChild(figure, rootElement)
  }
}

Even.beforeToc = function () {
  const links = document.querySelectorAll('#TableOfContents a')
  for (const link of links) link.classList.add('toc-link')

  for (const num of [1, 2, 3, 4, 5, 6]) {
    const headers = document.querySelectorAll('.post-content>h' + num)
    for (const header of headers) {
      header.innerHTML = `<a href="#${header.id}" class="headerlink" title="${header.innerHTML}"></a>${header.innerHTML}`
    }
  }
}

export {Even}
