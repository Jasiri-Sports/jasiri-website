/* Jasiri — STADIUM BRUTALIST global header + footer.
   Pages include: <div data-site-header data-active="shop"></div> … <div data-site-footer></div>
   Requires assets/stadium-chrome.css. Load this after reveal.js. Paths relative to /site/. */
(function () {
  var NAV = [
    { key: 'home', label: 'Home', href: 'index.html' },
    { key: 'about', label: 'About', menu: [
      { label: 'What we do', sub: 'And why it matters', href: 'what-we-do.html' },
      { label: 'Who we serve', sub: 'The holistic sports family', href: 'who-we-serve.html' },
      { label: 'Our Staff', sub: 'The team behind the platform', href: 'staff.html' },
      { label: 'Our Impact', sub: 'Beyond the scoreboard', href: 'impact.html' },
      { label: 'Careers', sub: 'Build the future with us', href: 'careers.html' },
    ]},
    { key: 'products', label: 'Products', menu: [
      { label: 'Sports Directory', sub: 'Discover. Verify. Connect.', href: 'directory.html' },
      { label: 'Imara', sub: 'The command center for clubs', href: 'imara.html' },
    ]},
    { key: 'partners', label: 'Partners', href: 'partners.html' },
    { key: 'clubs', label: 'Clubs', menu: [
      { label: "Men's Basketball", sub: 'The Jasiri Generals', href: 'clubs.html#mens-basketball' },
      { label: "Women's Basketball", sub: 'Smart, resilient, explosive', href: 'clubs.html#womens-basketball' },
      { label: "Men's Rugby", sub: 'Discipline and dominance', href: 'clubs.html#mens-rugby' },
      { label: "Women's Rugby", sub: 'Courage and endurance', href: 'clubs.html#womens-rugby' },
    ]},
    { key: 'media', label: 'Media', menu: [
      { label: 'Blog · The Jasiri Journal', sub: 'Stories from the ecosystem', href: 'blog.html' },
      { label: 'Podcast', sub: '#LockedIn stories', href: 'podcast.html' },
    ]},
    { key: 'contact', label: 'Contact', href: 'contact.html' },
  ];

  var MARK = '<svg class="sb-mark" viewBox="101 104 264 262" aria-hidden="true"><g fill="#fff">' +
    '<path d="M262.148,207.915h25.512v-86.755c-15.868-7.165-33.48-11.16-52.012-11.16s-36.167,3.996-52.012,11.183v8.244c19.496,4.386,36.925,14.26,50.588,27.9,13.663,13.663,23.537,31.092,27.923,50.588Z"></path>' +
    '<path d="M160.123,213.242c17.199-8.772,36.833-12.767,56.742-10.93l7.876-24.249-82.461-26.798c-20.46,22.435-32.929,52.264-32.929,85.033,0,4.708.253,9.323.758,13.893l7.83,2.549c10.196-17.199,24.984-30.725,42.183-39.497Z"></path>' +
    '<path d="M197.53,243.669l-20.644-14.995-50.978,70.175c17.682,30.977,48.131,53.734,84.16,61.151l4.845-6.682c-13.181-15.018-21.494-33.251-24.525-52.31-3.008-19.083-.758-38.992,7.142-57.339Z"></path>' +
    '<path d="M283.205,299.331c-19.082-3.031-37.315-11.321-52.31-24.525l-20.644,14.995,51.001,70.198c36.029-7.417,66.455-30.174,84.16-61.151l-4.868-6.682c-18.348,7.899-38.257,10.173-57.339,7.164Z"></path>' +
    '<path d="M329.017,151.265l-7.807,2.526c1.86,19.909-2.159,39.543-10.908,56.742-8.772,17.222-22.297,31.988-39.474,42.183l7.876,24.272,82.484-26.821c.505-4.547.758-9.185.758-13.87,0-32.768-12.446-62.598-32.929-85.033Z"></path></g></svg>';

  function headerHTML(active) {
    var items = NAV.map(function (it) {
      var cls = 'sb-navitem' + (it.key === active ? ' active' : '');
      if (it.menu) {
        var links = it.menu.map(function (m) {
          return '<a href="' + m.href + '">' + m.label + (m.sub ? '<small>' + m.sub + '</small>' : '') + '</a>';
        }).join('');
        return '<div class="' + cls + '"><a tabindex="0">' + it.label + '</a><div class="sb-menu">' + links + '</div></div>';
      }
      return '<div class="' + cls + '"><a href="' + it.href + '">' + it.label + '</a></div>';
    }).join('');

    var drawer = NAV.map(function (it) {
      if (it.menu) return '<div class="grp"><b>' + it.label + '</b>' + it.menu.map(function (m) { return '<a href="' + m.href + '">' + m.label + '</a>'; }).join('') + '</div>';
      return '<a class="top" href="' + it.href + '">' + it.label + '</a>';
    }).join('');

    return '' +
      '<nav class="sb-nav"><div class="sb-nav-in">' +
        '<a class="sb-brand" href="index.html">' + MARK + '<b>JASIRI</b></a>' +
        '<div class="sb-links">' + items + '</div>' +
        '<a class="sb-nav-cta" href="contact.html#community">Join &rarr;</a>' +
        '<button class="sb-burger" aria-label="Open menu" onclick="document.getElementById(\'sb-drawer\').classList.add(\'open\')"><span></span><span></span><span></span></button>' +
      '</div></nav>' +
      '<div id="sb-drawer" class="sb-drawer">' +
        '<div class="sb-drawer-top"><b>JASIRI</b><button class="sb-drawer-close" aria-label="Close menu" onclick="document.getElementById(\'sb-drawer\').classList.remove(\'open\')">&times;</button></div>' +
        drawer +
        '<a class="drawer-cta" href="contact.html#community">Join the Community &rarr;</a>' +
      '</div>';
  }

  function social(path) { return '<a href="#" aria-label="Social"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + path + '"/></svg></a>'; }

  function footerHTML() {
    return '' +
    '<footer class="sb-foot"><div class="sb-foot-in">' +
      '<div class="sb-foot-top">' +
        '<div class="sb-foot-brand">' + MARK + '<b>JASIRI</b>' +
          '<p>The Operating System for Sports in Africa. Built in Nairobi &amp; Kigali, for the continent.</p>' +
          '<div class="sb-foot-social">' +
            social('M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-6a6 6 0 0 1 6-6zM6 9H2v11h4zM4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4z') +
            social('M18.9 2H22l-7 8 8.2 12h-6.4l-5-7-5.7 7H2l7.5-9L1.6 2H8l4.6 6.6L18.9 2z') +
            social('M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm4.5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2z') +
            social('M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19c1.71.46 8.59.46 8.59.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02v-6.5l5.75 3.25z') +
          '</div>' +
        '</div>' +
        '<div class="sb-fcol"><h4>Platform</h4><a href="directory.html">Sports Directory</a><a href="imara.html">Imara</a><a href="partners.html">Partners</a></div>' +
        '<div class="sb-fcol"><h4>Company</h4><a href="what-we-do.html">What we do</a><a href="who-we-serve.html">Who we serve</a><a href="staff.html">Staff</a><a href="impact.html">Impact</a><a href="careers.html">Careers</a></div>' +
        '<div class="sb-fcol sb-foot-news"><h4>Stay #LockedIn</h4><p style="color:var(--sb-dim);font-size:13px;margin-bottom:14px;line-height:1.5">New drops, events &amp; matches. No spam.</p><form onsubmit="event.preventDefault();this.reset();this.querySelector(\'button\').textContent=\'Karibu \\u2713\';"><input type="email" placeholder="you@email.com" required><button type="submit">Subscribe</button></form></div>' +
      '</div>' +
      '<div class="sb-foot-base"><span>From Grassroots to Greatness &middot; Nairobi &middot; Kigali &middot; Global &nbsp; <b>#LockedIn</b></span><span>&copy; 2026 Jasiri Sport. All rights reserved.</span></div>' +
    '</div></footer>';
  }

  function init() {
    var h = document.querySelector('[data-site-header]');
    if (h) h.outerHTML = headerHTML(h.getAttribute('data-active') || '');
    var f = document.querySelector('[data-site-footer]');
    if (f) f.outerHTML = footerHTML();
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { var d = document.getElementById('sb-drawer'); if (d) d.classList.remove('open'); }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
