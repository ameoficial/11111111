if(!window.sdkInitialized) {
    window.sdkInitialized = true;
    (function (i, s, o, g, r, a, m) {
        i['SocialMinerObject'] = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        };
        i[r].l = 1 * new Date();
        a = s.createElement(o);
        m = s.getElementsByTagName(o)[0];
        a.async = !!1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
    })(window, document, 'script', 'https://plugins.soclminer.com.br/mastertag/allminer.js', 'SM');

    SM('create', 'a9a877e0-5799-4ef0-817d-2a981c5a13a5', 'TRAY');
    SM('send', 'pageview', 'TRAY');
}