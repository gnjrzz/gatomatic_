	// Check if the "first_landing_page" cookie is already set
	if (!document.cookie.includes('first_landing_page')) {
    // If not set, get the current page URL
    var landingPage = window.location.href;
    // Set the cookie with the landing page URL and a 30-day expiration
    document.cookie = 'first_landing_page=' + encodeURIComponent(landingPage) + ';path=/;max-age=2592000'; 
    // max-age=2592000 sets the cookie to expire in 30 days (2592000 seconds)
}
const lazyloadRunObserver = () => {
  const lazyloadBackgrounds = document.querySelectorAll( `.e-con.e-parent:not(.e-lazyloaded)` );
  const lazyloadBackgroundObserver = new IntersectionObserver( ( entries ) => {
    entries.forEach( ( entry ) => {
      if ( entry.isIntersecting ) {
        let lazyloadBackground = entry.target;
        if( lazyloadBackground ) {
          lazyloadBackground.classList.add( 'e-lazyloaded' );
        }
        lazyloadBackgroundObserver.unobserve( entry.target );
      }
    });
  }, { rootMargin: '200px 0px 200px 0px' } );
  lazyloadBackgrounds.forEach( ( lazyloadBackground ) => {
    lazyloadBackgroundObserver.observe( lazyloadBackground );
  } );
};
const events = [
  'DOMContentLoaded',
  'elementor/lazyload/observe',
];
events.forEach( ( event ) => {
  document.addEventListener( event, lazyloadRunObserver );
} );

const highlight = document.querySelector('.highlight-bg');
const loginTab = document.querySelector('.login');
const buyTab = document.querySelector('.buy');
const buttonGroup = document.querySelector('.button-group');

loginTab.addEventListener('mouseenter', () => {
  highlight.style.left = '0%';
  loginTab.style.color = 'white';
  buyTab.style.color = '#d6336c';
});

buyTab.addEventListener('mouseenter', () => {
  highlight.style.left = '50%';
  loginTab.style.color = '#d6336c';
  buyTab.style.color = 'white';
});

buttonGroup.addEventListener('mouseleave', () => {
  highlight.style.left = '0%';
  loginTab.style.color = 'white';
  buyTab.style.color = '#d6336c';
});

var eio_lazy_vars = {"exactdn_domain":"","skip_autoscale":0,"threshold":0,"use_dpr":1};

(function (h) {
    function getUTMParams(query) {
        var keys = ["source", "medium", "campaign", "term", "content"];
        var regex = new RegExp("(utm_(" + keys.join("|") + ")|(d|g)clid)=.*?([^&#]*|$)", "gi");
        var matches = query.match(regex);
        var result = {};

        if (matches) {
            for (var i = 0; i < matches.length; i++) {
                var parts = matches[i].split("=");
                if (parts) result[parts[0]] = parts[1];
            }
        }

        return result;
    }

    function getReferrerData(referrer) {
        if (!referrer) return;

        var engines = {
            "daum.net": { p: "q", n: "daum" },
            "eniro.se": { p: "search_word", n: "eniro " },
            "naver.com": { p: "query", n: "naver " },
            "yahoo.com": { p: "p", n: "yahoo" },
            "msn.com": { p: "q", n: "msn" },
            "bing.com": { p: "q", n: "live" },
            "aol.com": { p: "q", n: "aol" },
            "lycos.com": { p: "q", n: "lycos" },
            "ask.com": { p: "q", n: "ask" },
            "altavista.com": { p: "q", n: "altavista" },
            "search.netscape.com": { p: "query", n: "netscape" },
            "cnn.com": { p: "query", n: "cnn" },
            "about.com": { p: "terms", n: "about" },
            "mamma.com": { p: "query", n: "mama" },
            "alltheweb.com": { p: "q", n: "alltheweb" },
            "voila.fr": { p: "rdata", n: "voila" },
            "search.virgilio.it": { p: "qs", n: "virgilio" },
            "baidu.com": { p: "wd", n: "baidu" },
            "alice.com": { p: "qs", n: "alice" },
            "yandex.com": { p: "text", n: "yandex" },
            "najdi.org.mk": { p: "q", n: "najdi" },
            "seznam.cz": { p: "q", n: "seznam" },
            "search.com": { p: "q", n: "search" },
            "wp.pl": { p: "szukaj ", n: "wirtulana polska" },
            "online.onetcenter.org": { p: "qt", n: "o*net" },
            "szukacz.pl": { p: "q", n: "szukacz" },
            "yam.com": { p: "k", n: "yam" },
            "pchome.com": { p: "q", n: "pchome" },
            "kvasir.no": { p: "q", n: "kvasir" },
            "sesam.no": { p: "q", n: "sesam" },
            "ozu.es": { p: "q", n: "ozu " },
            "terra.com": { p: "query", n: "terra" },
            "mynet.com": { p: "q", n: "mynet" },
            "ekolay.net": { p: "q", n: "ekolay" },
            "rambler.ru": { p: "words", n: "rambler" },
            google: { p: "q", n: "google" }
        };

        var link = h.createElement("a");
        link.href = referrer;

        var host = extractDomain(referrer);
        var result = {};

        if (host.indexOf("google") > -1) host = "google";

        if (engines[host]) {
            var params = new RegExp(engines[host].p + "=.*?([^&#]*|$)", "gi");
            var matched = link.search.match(params);
            result.source = engines[host].n;
            result.medium = "organic";
            result.term = matched ? matched[0].split("=")[1] : "(not provided)";
        } else if (host !== currentDomain) {
            result.source = link.hostname;
            result.medium = "referral";
        }

        return result;
    }

    function setCookie(name, value, expires, path, domain) {
        var cookieStr = name + "=" + value + ";";
        if (expires) cookieStr += "Expires=" + expires.toGMTString() + ";";
        if (path) cookieStr += "Path=" + path + ";";
        if (domain) cookieStr += "Domain=" + domain + ";";
        h.cookie = cookieStr;
    }

    function getCookie(name) {
        var cookieMatch = "; " + h.cookie;
        var parts = cookieMatch.split("; " + name + "=");
        if (parts.length > 1) return parts.pop().split(";")[0];
    }

    function extractDomain(url) {
        if (url) {
            var link = h.createElement("a");
            link.href = url;
            try {
                return link.hostname.match(/[^.]*\.[^.]{2,3}(?:\.[^.]{2,3})?$/)[0];
            } catch (e) {}
        }
    }

    var referrer = h.referrer;
    var utmData = {
        utmcsr: "(direct)",
        utmcmd: "(none)",
        utmccn: "(not set)"
    };

    var currentDomain = extractDomain(h.location.hostname);
    var refDomain = extractDomain(referrer);
    var hasSessionCookie = getCookie("__utmzzses");

    var cookieExpire = new Date(Date.now() + 180 * 24 * 60 * 60 * 1000); // ~6 months
    var searchQuery = h.location.search.replace("?", "");
    var hashQuery = h.location.hash.replace("#", "");

    var utmParams = getUTMParams(searchQuery + "#" + hashQuery);
    var refData = getReferrerData(referrer);
    var oldCookie = getCookie("__utmz") || getCookie("__utmzz");

    var newCookieParts = [];
    var mappings = {
        utm_source: "utmcsr",
        utm_medium: "utmcmd",
        utm_campaign: "utmccn",
        utm_content: "utmcct",
        utm_term: "utmctr",
        gclid: "utmgclid",
        dclid: "utmdclid"
    };

    if (hasSessionCookie && refDomain === currentDomain) {
        refData = utmParams = null;
    }

    if (utmParams && (utmParams.utm_source || utmParams.gclid || utmParams.dclid)) {
        for (var key in utmParams) {
            if (typeof utmParams[key] !== "undefined") {
                var mappedKey = mappings[key];
                utmData[mappedKey] = utmParams[key];
            }
        }

        if (utmParams.gclid || utmParams.dclid) {
            utmData.utmcsr = "google";
            utmData.utmcmd = utmParams.utmgclid ? "cpc" : "cpm";
        }
    } else if (refData) {
        utmData.utmcsr = refData.source;
        utmData.utmcmd = refData.medium;
        if (refData.term) utmData.utmctr = refData.term;
    } else if (oldCookie) {
        utmData = {};
        var oldParts = oldCookie.split("|");
        for (var i = 0; i < oldParts.length; i++) {
            var part = oldParts[i].split("=");
            var label = part[0].split(".").pop();
            utmData[label] = part[1];
        }
    }

    for (var k in utmData) {
        if (typeof utmData[k] !== "undefined") {
            newCookieParts.push(k + "=" + utmData[k]);
        }
    }

    setCookie("__utmzz", newCookieParts.join("|"), cookieExpire, "/", currentDomain);
    setCookie("__utmzzses", 1, null, "/", currentDomain);
})(document);

/* Mega Menu scripts: */ 
jQuery(document).ready(function(){
    var strJson = '[{\"title\":\"Create\",\"item_type\":\"section\",\"section_id\":\"nav-use-cases\",\"link\":\"#\",\"link_html_attributes\":\"\",\"link_full\":\"https:\\/\\/#\",\"link_noprefix\":\"#\",\"clickable_link\":\"false\",\"link2\":\"#\",\"link2_html_attributes\":\"\",\"link2_full\":\"https:\\/\\/#\",\"link2_noprefix\":\"#\",\"horizontal_line_before_widths\":\"\",\"dropdown_width\":\"custom\",\"dropdown_width_number\":1264,\"disable_dropdown_in_mobile\":\"false\",\"visible_in\":\"all\",\"graphic_element\":\"none\",\"graphic_element_text\":\"01\",\"icon\":\"fas fa-rocket\",\"icon_html\":\"<i class=\'fas fa-rocket\'><\\/i>\",\"image\":\"\",\"_generated_id\":\"7e7e7de\",\"item_repeater_class\":\"elementor-repeater-item-7e7e7de\",\"item_index\":1,\"item_id\":\"uc_mega_menu_elementor_b399430_item1\"},{\"title\":\"Templates\",\"item_type\":\"section\",\"section_id\":\"nav-create\",\"link\":\"#\",\"link_html_attributes\":\"\",\"link_full\":\"https:\\/\\/#\",\"link_noprefix\":\"#\",\"clickable_link\":\"true\",\"link2\":\"\\/templates\\/\",\"link2_html_attributes\":\"\",\"link2_full\":\"https:\\/\\/\\/templates\\/\",\"link2_noprefix\":\"\\/templates\\/\",\"horizontal_line_before_widths\":\"\",\"dropdown_width\":\"custom\",\"dropdown_width_number\":1280,\"disable_dropdown_in_mobile\":\"false\",\"visible_in\":\"all\",\"graphic_element\":\"none\",\"graphic_element_text\":\"01\",\"icon\":\"fas fa-rocket\",\"icon_html\":\"<i class=\'fas fa-rocket\'><\\/i>\",\"image\":\"\",\"_generated_id\":\"fdd344a\",\"item_repeater_class\":\"elementor-repeater-item-fdd344a\",\"item_index\":2,\"item_id\":\"uc_mega_menu_elementor_b399430_item2\"},{\"title\":\"Features\",\"item_type\":\"section\",\"section_id\":\"nav-features\",\"link\":\"#\",\"link_html_attributes\":\"\",\"link_full\":\"https:\\/\\/#\",\"link_noprefix\":\"#\",\"clickable_link\":\"true\",\"link2\":\"\\/features\\/\",\"link2_html_attributes\":\"\",\"link2_full\":\"https:\\/\\/\\/features\\/\",\"link2_noprefix\":\"\\/features\\/\",\"horizontal_line_before_widths\":\"\",\"dropdown_width\":\"custom\",\"dropdown_width_number\":960,\"disable_dropdown_in_mobile\":\"false\",\"visible_in\":\"all\",\"graphic_element\":\"none\",\"graphic_element_text\":\"01\",\"icon\":\"fas fa-rocket\",\"icon_html\":\"<i class=\'fas fa-rocket\'><\\/i>\",\"image\":\"\",\"_generated_id\":\"0a808e5\",\"item_repeater_class\":\"elementor-repeater-item-0a808e5\",\"item_index\":3,\"item_id\":\"uc_mega_menu_elementor_b399430_item3\"},{\"title\":\"Resources\",\"item_type\":\"section\",\"section_id\":\"nav-resources\",\"link\":\"#\",\"link_html_attributes\":\"\",\"link_full\":\"https:\\/\\/#\",\"link_noprefix\":\"#\",\"clickable_link\":\"false\",\"link2\":\"#\",\"link2_html_attributes\":\"\",\"link2_full\":\"https:\\/\\/#\",\"link2_noprefix\":\"#\",\"horizontal_line_before_widths\":\"\",\"dropdown_width\":\"custom\",\"dropdown_width_number\":360,\"disable_dropdown_in_mobile\":\"false\",\"visible_in\":\"all\",\"graphic_element\":\"none\",\"graphic_element_text\":\"01\",\"icon\":\"fas fa-rocket\",\"icon_html\":\"<i class=\'fas fa-rocket\'><\\/i>\",\"image\":\"\",\"_generated_id\":\"a640adb\",\"item_repeater_class\":\"elementor-repeater-item-a640adb\",\"item_index\":4,\"item_id\":\"uc_mega_menu_elementor_b399430_item4\"},{\"title\":\"Pricing\",\"item_type\":\"link\",\"section_id\":\"\",\"link\":\"\\/pricing\\/\",\"link_html_attributes\":\"\",\"link_full\":\"https:\\/\\/\\/pricing\\/\",\"link_noprefix\":\"\\/pricing\\/\",\"clickable_link\":\"false\",\"link2\":\"#\",\"link2_html_attributes\":\"\",\"link2_full\":\"https:\\/\\/#\",\"link2_noprefix\":\"#\",\"horizontal_line_before_widths\":\"\",\"dropdown_width\":\"full\",\"dropdown_width_number\":\"800\",\"disable_dropdown_in_mobile\":\"false\",\"visible_in\":\"all\",\"graphic_element\":\"none\",\"graphic_element_text\":\"01\",\"icon\":\"fas fa-rocket\",\"icon_html\":\"<i class=\'fas fa-rocket\'><\\/i>\",\"image\":\"\",\"_generated_id\":\"f0b7626\",\"item_repeater_class\":\"elementor-repeater-item-f0b7626\",\"item_index\":5,\"item_id\":\"uc_mega_menu_elementor_b399430_item5\"},{\"title\":\"Login\",\"item_type\":\"link\",\"section_id\":\"\",\"link\":\"https:\\/\\/app.biteable.com\\/client\\/login\",\"link_html_attributes\":\"\",\"link_full\":\"https:\\/\\/app.biteable.com\\/client\\/login\",\"link_noprefix\":\"app.biteable.com\\/client\\/login\",\"clickable_link\":\"false\",\"link2\":\"#\",\"link2_html_attributes\":\"\",\"link2_full\":\"https:\\/\\/#\",\"link2_noprefix\":\"#\",\"horizontal_line_before_widths\":\"\",\"dropdown_width\":\"full\",\"dropdown_width_number\":\"800\",\"disable_dropdown_in_mobile\":\"false\",\"visible_in\":\"mobile\",\"graphic_element\":\"none\",\"graphic_element_text\":\"01\",\"icon\":\"fas fa-rocket\",\"icon_html\":\"<i class=\'fas fa-rocket\'><\\/i>\",\"image\":\"\",\"_generated_id\":\"5978a7e\",\"item_repeater_class\":\"elementor-repeater-item-5978a7e\",\"item_index\":6,\"item_id\":\"uc_mega_menu_elementor_b399430_item6\"},{\"title\":\"Sign up\",\"item_type\":\"link\",\"section_id\":\"\",\"link\":\"https:\\/\\/app.biteable.com\\/client\\/signup\",\"link_html_attributes\":\"\",\"link_full\":\"https:\\/\\/app.biteable.com\\/client\\/signup\",\"link_noprefix\":\"app.biteable.com\\/client\\/signup\",\"clickable_link\":\"false\",\"link2\":\"#\",\"link2_html_attributes\":\"\",\"link2_full\":\"https:\\/\\/#\",\"link2_noprefix\":\"#\",\"horizontal_line_before_widths\":\"\",\"dropdown_width\":\"full\",\"dropdown_width_number\":\"800\",\"disable_dropdown_in_mobile\":\"false\",\"visible_in\":\"mobile\",\"graphic_element\":\"none\",\"graphic_element_text\":\"01\",\"icon\":\"fas fa-rocket\",\"icon_html\":\"<i class=\'fas fa-rocket\'><\\/i>\",\"image\":\"\",\"_generated_id\":\"fc78471\",\"item_repeater_class\":\"elementor-repeater-item-fc78471\",\"item_index\":7,\"item_id\":\"uc_mega_menu_elementor_b399430_item7\"}]';
	var arrItems = JSON.parse(strJson);
	var objMenu = new ueMegaMenu();
  	objMenu.init("#uc_mega_menu_elementor_b399430", arrItems, "https://biteable.com/");
});

/* Mega Menu scripts: */ 
jQuery(document).ready(function(){
    var strJson = '[{\"title\":\"Create\",\"item_type\":\"section\",\"section_id\":\"nav-use-cases\",\"link\":\"#\",\"link_html_attributes\":\"\",\"link_full\":\"https:\\/\\/#\",\"link_noprefix\":\"#\",\"clickable_link\":\"false\",\"link2\":\"#\",\"link2_html_attributes\":\"\",\"link2_full\":\"https:\\/\\/#\",\"link2_noprefix\":\"#\",\"horizontal_line_before_widths\":\"\",\"dropdown_width\":\"custom\",\"dropdown_width_number\":1264,\"disable_dropdown_in_mobile\":\"false\",\"visible_in\":\"all\",\"graphic_element\":\"none\",\"graphic_element_text\":\"01\",\"icon\":\"fas fa-rocket\",\"icon_html\":\"<i class=\'fas fa-rocket\'><\\/i>\",\"image\":\"\",\"_generated_id\":\"7e7e7de\",\"item_repeater_class\":\"elementor-repeater-item-7e7e7de\",\"item_index\":1,\"item_id\":\"uc_mega_menu_elementor_3aef4dc_item1\"},{\"title\":\"Templates\",\"item_type\":\"section\",\"section_id\":\"nav-create\",\"link\":\"#\",\"link_html_attributes\":\"\",\"link_full\":\"https:\\/\\/#\",\"link_noprefix\":\"#\",\"clickable_link\":\"true\",\"link2\":\"\\/templates\\/\",\"link2_html_attributes\":\"\",\"link2_full\":\"https:\\/\\/\\/templates\\/\",\"link2_noprefix\":\"\\/templates\\/\",\"horizontal_line_before_widths\":\"\",\"dropdown_width\":\"custom\",\"dropdown_width_number\":1280,\"disable_dropdown_in_mobile\":\"false\",\"visible_in\":\"all\",\"graphic_element\":\"none\",\"graphic_element_text\":\"01\",\"icon\":\"fas fa-rocket\",\"icon_html\":\"<i class=\'fas fa-rocket\'><\\/i>\",\"image\":\"\",\"_generated_id\":\"6e3d60b\",\"item_repeater_class\":\"elementor-repeater-item-6e3d60b\",\"item_index\":2,\"item_id\":\"uc_mega_menu_elementor_3aef4dc_item2\"},{\"title\":\"Features\",\"item_type\":\"section\",\"section_id\":\"nav-features\",\"link\":\"#\",\"link_html_attributes\":\"\",\"link_full\":\"https:\\/\\/#\",\"link_noprefix\":\"#\",\"clickable_link\":\"true\",\"link2\":\"\\/features\\/\",\"link2_html_attributes\":\"\",\"link2_full\":\"https:\\/\\/\\/features\\/\",\"link2_noprefix\":\"\\/features\\/\",\"horizontal_line_before_widths\":\"\",\"dropdown_width\":\"custom\",\"dropdown_width_number\":960,\"disable_dropdown_in_mobile\":\"false\",\"visible_in\":\"all\",\"graphic_element\":\"none\",\"graphic_element_text\":\"01\",\"icon\":\"fas fa-rocket\",\"icon_html\":\"<i class=\'fas fa-rocket\'><\\/i>\",\"image\":\"\",\"_generated_id\":\"0a808e5\",\"item_repeater_class\":\"elementor-repeater-item-0a808e5\",\"item_index\":3,\"item_id\":\"uc_mega_menu_elementor_3aef4dc_item3\"},{\"title\":\"Resources\",\"item_type\":\"section\",\"section_id\":\"nav-resources\",\"link\":\"#\",\"link_html_attributes\":\"\",\"link_full\":\"https:\\/\\/#\",\"link_noprefix\":\"#\",\"clickable_link\":\"false\",\"link2\":\"#\",\"link2_html_attributes\":\"\",\"link2_full\":\"https:\\/\\/#\",\"link2_noprefix\":\"#\",\"horizontal_line_before_widths\":\"\",\"dropdown_width\":\"custom\",\"dropdown_width_number\":360,\"disable_dropdown_in_mobile\":\"false\",\"visible_in\":\"all\",\"graphic_element\":\"none\",\"graphic_element_text\":\"01\",\"icon\":\"fas fa-rocket\",\"icon_html\":\"<i class=\'fas fa-rocket\'><\\/i>\",\"image\":\"\",\"_generated_id\":\"a640adb\",\"item_repeater_class\":\"elementor-repeater-item-a640adb\",\"item_index\":4,\"item_id\":\"uc_mega_menu_elementor_3aef4dc_item4\"},{\"title\":\"Pricing\",\"item_type\":\"link\",\"section_id\":\"\",\"link\":\"\\/pricing\\/\",\"link_html_attributes\":\"\",\"link_full\":\"https:\\/\\/\\/pricing\\/\",\"link_noprefix\":\"\\/pricing\\/\",\"clickable_link\":\"false\",\"link2\":\"#\",\"link2_html_attributes\":\"\",\"link2_full\":\"https:\\/\\/#\",\"link2_noprefix\":\"#\",\"horizontal_line_before_widths\":\"\",\"dropdown_width\":\"full\",\"dropdown_width_number\":\"800\",\"disable_dropdown_in_mobile\":\"false\",\"visible_in\":\"all\",\"graphic_element\":\"none\",\"graphic_element_text\":\"01\",\"icon\":\"fas fa-rocket\",\"icon_html\":\"<i class=\'fas fa-rocket\'><\\/i>\",\"image\":\"\",\"_generated_id\":\"f0b7626\",\"item_repeater_class\":\"elementor-repeater-item-f0b7626\",\"item_index\":5,\"item_id\":\"uc_mega_menu_elementor_3aef4dc_item5\"},{\"title\":\"Login\",\"item_type\":\"link\",\"section_id\":\"\",\"link\":\"https:\\/\\/app.biteable.com\\/client\\/login\",\"link_html_attributes\":\"\",\"link_full\":\"https:\\/\\/app.biteable.com\\/client\\/login\",\"link_noprefix\":\"app.biteable.com\\/client\\/login\",\"clickable_link\":\"false\",\"link2\":\"#\",\"link2_html_attributes\":\"\",\"link2_full\":\"https:\\/\\/#\",\"link2_noprefix\":\"#\",\"horizontal_line_before_widths\":\"\",\"dropdown_width\":\"full\",\"dropdown_width_number\":\"800\",\"disable_dropdown_in_mobile\":\"false\",\"visible_in\":\"mobile\",\"graphic_element\":\"none\",\"graphic_element_text\":\"01\",\"icon\":\"fas fa-rocket\",\"icon_html\":\"<i class=\'fas fa-rocket\'><\\/i>\",\"image\":\"\",\"_generated_id\":\"5978a7e\",\"item_repeater_class\":\"elementor-repeater-item-5978a7e\",\"item_index\":6,\"item_id\":\"uc_mega_menu_elementor_3aef4dc_item6\"},{\"title\":\"Sign up\",\"item_type\":\"link\",\"section_id\":\"\",\"link\":\"https:\\/\\/app.biteable.com\\/client\\/signup\",\"link_html_attributes\":\"\",\"link_full\":\"https:\\/\\/app.biteable.com\\/client\\/signup\",\"link_noprefix\":\"app.biteable.com\\/client\\/signup\",\"clickable_link\":\"false\",\"link2\":\"#\",\"link2_html_attributes\":\"\",\"link2_full\":\"https:\\/\\/#\",\"link2_noprefix\":\"#\",\"horizontal_line_before_widths\":\"\",\"dropdown_width\":\"full\",\"dropdown_width_number\":\"800\",\"disable_dropdown_in_mobile\":\"false\",\"visible_in\":\"mobile\",\"graphic_element\":\"none\",\"graphic_element_text\":\"01\",\"icon\":\"fas fa-rocket\",\"icon_html\":\"<i class=\'fas fa-rocket\'><\\/i>\",\"image\":\"\",\"_generated_id\":\"fc78471\",\"item_repeater_class\":\"elementor-repeater-item-fc78471\",\"item_index\":7,\"item_id\":\"uc_mega_menu_elementor_3aef4dc_item7\"}]';
	var arrItems = JSON.parse(strJson);
	var objMenu = new ueMegaMenu();
  	objMenu.init("#uc_mega_menu_elementor_3aef4dc", arrItems, "https://biteable.com/");
});

/* Mega Menu scripts: */ 
jQuery(document).ready(function(){
    var strJson = '[{\"title\":\"Create\",\"item_type\":\"section\",\"section_id\":\"nav-use-cases\",\"link\":\"#\",\"link_html_attributes\":\"\",\"link_full\":\"https:\\/\\/#\",\"link_noprefix\":\"#\",\"clickable_link\":\"false\",\"link2\":\"#\",\"link2_html_attributes\":\"\",\"link2_full\":\"https:\\/\\/#\",\"link2_noprefix\":\"#\",\"horizontal_line_before_widths\":\"\",\"dropdown_width\":\"custom\",\"dropdown_width_number\":1280,\"disable_dropdown_in_mobile\":\"false\",\"visible_in\":\"all\",\"graphic_element\":\"none\",\"graphic_element_text\":\"01\",\"icon\":\"fas fa-rocket\",\"icon_html\":\"<i class=\'fas fa-rocket\'><\\/i>\",\"image\":\"\",\"_generated_id\":\"6e3d60b\",\"item_repeater_class\":\"elementor-repeater-item-6e3d60b\",\"item_index\":1,\"item_id\":\"uc_mega_menu_elementor_637f2f1_item1\"},{\"title\":\"Templates\",\"item_type\":\"section\",\"section_id\":\"nav-create\",\"link\":\"#\",\"link_html_attributes\":\"\",\"link_full\":\"https:\\/\\/#\",\"link_noprefix\":\"#\",\"clickable_link\":\"true\",\"link2\":\"\\/templates\\/\",\"link2_html_attributes\":\"\",\"link2_full\":\"https:\\/\\/\\/templates\\/\",\"link2_noprefix\":\"\\/templates\\/\",\"horizontal_line_before_widths\":\"\",\"dropdown_width\":\"custom\",\"dropdown_width_number\":1280,\"disable_dropdown_in_mobile\":\"false\",\"visible_in\":\"all\",\"graphic_element\":\"none\",\"graphic_element_text\":\"01\",\"icon\":\"fas fa-rocket\",\"icon_html\":\"<i class=\'fas fa-rocket\'><\\/i>\",\"image\":\"\",\"_generated_id\":\"74b1311\",\"item_repeater_class\":\"elementor-repeater-item-74b1311\",\"item_index\":2,\"item_id\":\"uc_mega_menu_elementor_637f2f1_item2\"},{\"title\":\"Features\",\"item_type\":\"section\",\"section_id\":\"nav-features\",\"link\":\"#\",\"link_html_attributes\":\"\",\"link_full\":\"https:\\/\\/#\",\"link_noprefix\":\"#\",\"clickable_link\":\"true\",\"link2\":\"\\/features\\/\",\"link2_html_attributes\":\"\",\"link2_full\":\"https:\\/\\/\\/features\\/\",\"link2_noprefix\":\"\\/features\\/\",\"horizontal_line_before_widths\":\"\",\"dropdown_width\":\"custom\",\"dropdown_width_number\":960,\"disable_dropdown_in_mobile\":\"false\",\"visible_in\":\"all\",\"graphic_element\":\"none\",\"graphic_element_text\":\"01\",\"icon\":\"fas fa-rocket\",\"icon_html\":\"<i class=\'fas fa-rocket\'><\\/i>\",\"image\":\"\",\"_generated_id\":\"0a808e5\",\"item_repeater_class\":\"elementor-repeater-item-0a808e5\",\"item_index\":3,\"item_id\":\"uc_mega_menu_elementor_637f2f1_item3\"},{\"title\":\"Resources\",\"item_type\":\"section\",\"section_id\":\"nav-resources\",\"link\":\"#\",\"link_html_attributes\":\"\",\"link_full\":\"https:\\/\\/#\",\"link_noprefix\":\"#\",\"clickable_link\":\"false\",\"link2\":\"#\",\"link2_html_attributes\":\"\",\"link2_full\":\"https:\\/\\/#\",\"link2_noprefix\":\"#\",\"horizontal_line_before_widths\":\"\",\"dropdown_width\":\"custom\",\"dropdown_width_number\":360,\"disable_dropdown_in_mobile\":\"false\",\"visible_in\":\"all\",\"graphic_element\":\"none\",\"graphic_element_text\":\"01\",\"icon\":\"fas fa-rocket\",\"icon_html\":\"<i class=\'fas fa-rocket\'><\\/i>\",\"image\":\"\",\"_generated_id\":\"a640adb\",\"item_repeater_class\":\"elementor-repeater-item-a640adb\",\"item_index\":4,\"item_id\":\"uc_mega_menu_elementor_637f2f1_item4\"},{\"title\":\"Pricing\",\"item_type\":\"link\",\"section_id\":\"\",\"link\":\"\\/pricing\\/\",\"link_html_attributes\":\"\",\"link_full\":\"https:\\/\\/\\/pricing\\/\",\"link_noprefix\":\"\\/pricing\\/\",\"clickable_link\":\"false\",\"link2\":\"#\",\"link2_html_attributes\":\"\",\"link2_full\":\"https:\\/\\/#\",\"link2_noprefix\":\"#\",\"horizontal_line_before_widths\":\"\",\"dropdown_width\":\"full\",\"dropdown_width_number\":\"800\",\"disable_dropdown_in_mobile\":\"false\",\"visible_in\":\"all\",\"graphic_element\":\"none\",\"graphic_element_text\":\"01\",\"icon\":\"fas fa-rocket\",\"icon_html\":\"<i class=\'fas fa-rocket\'><\\/i>\",\"image\":\"\",\"_generated_id\":\"f0b7626\",\"item_repeater_class\":\"elementor-repeater-item-f0b7626\",\"item_index\":5,\"item_id\":\"uc_mega_menu_elementor_637f2f1_item5\"},{\"title\":\"Login\",\"item_type\":\"link\",\"section_id\":\"\",\"link\":\"https:\\/\\/app.biteable.com\\/client\\/login\",\"link_html_attributes\":\"\",\"link_full\":\"https:\\/\\/app.biteable.com\\/client\\/login\",\"link_noprefix\":\"app.biteable.com\\/client\\/login\",\"clickable_link\":\"false\",\"link2\":\"#\",\"link2_html_attributes\":\"\",\"link2_full\":\"https:\\/\\/#\",\"link2_noprefix\":\"#\",\"horizontal_line_before_widths\":\"\",\"dropdown_width\":\"full\",\"dropdown_width_number\":\"800\",\"disable_dropdown_in_mobile\":\"false\",\"visible_in\":\"mobile\",\"graphic_element\":\"none\",\"graphic_element_text\":\"01\",\"icon\":\"fas fa-rocket\",\"icon_html\":\"<i class=\'fas fa-rocket\'><\\/i>\",\"image\":\"\",\"_generated_id\":\"5978a7e\",\"item_repeater_class\":\"elementor-repeater-item-5978a7e\",\"item_index\":6,\"item_id\":\"uc_mega_menu_elementor_637f2f1_item6\"},{\"title\":\"Sign up\",\"item_type\":\"link\",\"section_id\":\"\",\"link\":\"https:\\/\\/app.biteable.com\\/client\\/signup\",\"link_html_attributes\":\"\",\"link_full\":\"https:\\/\\/app.biteable.com\\/client\\/signup\",\"link_noprefix\":\"app.biteable.com\\/client\\/signup\",\"clickable_link\":\"false\",\"link2\":\"#\",\"link2_html_attributes\":\"\",\"link2_full\":\"https:\\/\\/#\",\"link2_noprefix\":\"#\",\"horizontal_line_before_widths\":\"\",\"dropdown_width\":\"full\",\"dropdown_width_number\":\"800\",\"disable_dropdown_in_mobile\":\"false\",\"visible_in\":\"mobile\",\"graphic_element\":\"none\",\"graphic_element_text\":\"01\",\"icon\":\"fas fa-rocket\",\"icon_html\":\"<i class=\'fas fa-rocket\'><\\/i>\",\"image\":\"\",\"_generated_id\":\"fc78471\",\"item_repeater_class\":\"elementor-repeater-item-fc78471\",\"item_index\":7,\"item_id\":\"uc_mega_menu_elementor_637f2f1_item7\"}]';
	var arrItems = JSON.parse(strJson);
	var objMenu = new ueMegaMenu();
  	objMenu.init("#uc_mega_menu_elementor_637f2f1", arrItems, "https://biteable.com/");
});

/* Mega Menu scripts: */ 
jQuery(document).ready(function(){
    var strJson = '[{\"title\":\"Create\",\"item_type\":\"section\",\"section_id\":\"nav-use-cases\",\"link\":\"#\",\"link_html_attributes\":\"\",\"link_full\":\"https:\\/\\/#\",\"link_noprefix\":\"#\",\"clickable_link\":\"false\",\"link2\":\"#\",\"link2_html_attributes\":\"\",\"link2_full\":\"https:\\/\\/#\",\"link2_noprefix\":\"#\",\"horizontal_line_before_widths\":\"\",\"dropdown_width\":\"custom\",\"dropdown_width_number\":1280,\"disable_dropdown_in_mobile\":\"false\",\"visible_in\":\"all\",\"graphic_element\":\"none\",\"graphic_element_text\":\"01\",\"icon\":\"fas fa-rocket\",\"icon_html\":\"<i class=\'fas fa-rocket\'><\\/i>\",\"image\":\"\",\"_generated_id\":\"6e3d60b\",\"item_repeater_class\":\"elementor-repeater-item-6e3d60b\",\"item_index\":1,\"item_id\":\"uc_mega_menu_elementor_54b0c29_item1\"},{\"title\":\"Templates\",\"item_type\":\"section\",\"section_id\":\"nav-create\",\"link\":\"#\",\"link_html_attributes\":\"\",\"link_full\":\"https:\\/\\/#\",\"link_noprefix\":\"#\",\"clickable_link\":\"true\",\"link2\":\"\\/templates\\/\",\"link2_html_attributes\":\"\",\"link2_full\":\"https:\\/\\/\\/templates\\/\",\"link2_noprefix\":\"\\/templates\\/\",\"horizontal_line_before_widths\":\"\",\"dropdown_width\":\"custom\",\"dropdown_width_number\":1280,\"disable_dropdown_in_mobile\":\"false\",\"visible_in\":\"all\",\"graphic_element\":\"none\",\"graphic_element_text\":\"01\",\"icon\":\"fas fa-rocket\",\"icon_html\":\"<i class=\'fas fa-rocket\'><\\/i>\",\"image\":\"\",\"_generated_id\":\"74b1311\",\"item_repeater_class\":\"elementor-repeater-item-74b1311\",\"item_index\":2,\"item_id\":\"uc_mega_menu_elementor_54b0c29_item2\"},{\"title\":\"Features\",\"item_type\":\"section\",\"section_id\":\"nav-features\",\"link\":\"#\",\"link_html_attributes\":\"\",\"link_full\":\"https:\\/\\/#\",\"link_noprefix\":\"#\",\"clickable_link\":\"true\",\"link2\":\"\\/features\\/\",\"link2_html_attributes\":\"\",\"link2_full\":\"https:\\/\\/\\/features\\/\",\"link2_noprefix\":\"\\/features\\/\",\"horizontal_line_before_widths\":\"\",\"dropdown_width\":\"custom\",\"dropdown_width_number\":960,\"disable_dropdown_in_mobile\":\"false\",\"visible_in\":\"all\",\"graphic_element\":\"none\",\"graphic_element_text\":\"01\",\"icon\":\"fas fa-rocket\",\"icon_html\":\"<i class=\'fas fa-rocket\'><\\/i>\",\"image\":\"\",\"_generated_id\":\"0a808e5\",\"item_repeater_class\":\"elementor-repeater-item-0a808e5\",\"item_index\":3,\"item_id\":\"uc_mega_menu_elementor_54b0c29_item3\"},{\"title\":\"Resources\",\"item_type\":\"section\",\"section_id\":\"nav-resources\",\"link\":\"#\",\"link_html_attributes\":\"\",\"link_full\":\"https:\\/\\/#\",\"link_noprefix\":\"#\",\"clickable_link\":\"false\",\"link2\":\"#\",\"link2_html_attributes\":\"\",\"link2_full\":\"https:\\/\\/#\",\"link2_noprefix\":\"#\",\"horizontal_line_before_widths\":\"\",\"dropdown_width\":\"custom\",\"dropdown_width_number\":360,\"disable_dropdown_in_mobile\":\"false\",\"visible_in\":\"all\",\"graphic_element\":\"none\",\"graphic_element_text\":\"01\",\"icon\":\"fas fa-rocket\",\"icon_html\":\"<i class=\'fas fa-rocket\'><\\/i>\",\"image\":\"\",\"_generated_id\":\"a640adb\",\"item_repeater_class\":\"elementor-repeater-item-a640adb\",\"item_index\":4,\"item_id\":\"uc_mega_menu_elementor_54b0c29_item4\"},{\"title\":\"Login\",\"item_type\":\"link\",\"section_id\":\"\",\"link\":\"https:\\/\\/app.biteable.com\\/client\\/login\",\"link_html_attributes\":\"\",\"link_full\":\"https:\\/\\/app.biteable.com\\/client\\/login\",\"link_noprefix\":\"app.biteable.com\\/client\\/login\",\"clickable_link\":\"false\",\"link2\":\"#\",\"link2_html_attributes\":\"\",\"link2_full\":\"https:\\/\\/#\",\"link2_noprefix\":\"#\",\"horizontal_line_before_widths\":\"\",\"dropdown_width\":\"full\",\"dropdown_width_number\":\"800\",\"disable_dropdown_in_mobile\":\"false\",\"visible_in\":\"mobile\",\"graphic_element\":\"none\",\"graphic_element_text\":\"01\",\"icon\":\"fas fa-rocket\",\"icon_html\":\"<i class=\'fas fa-rocket\'><\\/i>\",\"image\":\"\",\"_generated_id\":\"5978a7e\",\"item_repeater_class\":\"elementor-repeater-item-5978a7e\",\"item_index\":5,\"item_id\":\"uc_mega_menu_elementor_54b0c29_item5\"},{\"title\":\"Sign up\",\"item_type\":\"link\",\"section_id\":\"\",\"link\":\"https:\\/\\/app.biteable.com\\/client\\/signup\",\"link_html_attributes\":\"\",\"link_full\":\"https:\\/\\/app.biteable.com\\/client\\/signup\",\"link_noprefix\":\"app.biteable.com\\/client\\/signup\",\"clickable_link\":\"false\",\"link2\":\"#\",\"link2_html_attributes\":\"\",\"link2_full\":\"https:\\/\\/#\",\"link2_noprefix\":\"#\",\"horizontal_line_before_widths\":\"\",\"dropdown_width\":\"full\",\"dropdown_width_number\":\"800\",\"disable_dropdown_in_mobile\":\"false\",\"visible_in\":\"mobile\",\"graphic_element\":\"none\",\"graphic_element_text\":\"01\",\"icon\":\"fas fa-rocket\",\"icon_html\":\"<i class=\'fas fa-rocket\'><\\/i>\",\"image\":\"\",\"_generated_id\":\"fc78471\",\"item_repeater_class\":\"elementor-repeater-item-fc78471\",\"item_index\":6,\"item_id\":\"uc_mega_menu_elementor_54b0c29_item6\"}]';
	var arrItems = JSON.parse(strJson);
	var objMenu = new ueMegaMenu();
  	objMenu.init("#uc_mega_menu_elementor_54b0c29", arrItems, "https://biteable.com/");
});

/* Scroll To Top scripts: */ 
jQuery(document).ready(function(){
    jQuery(window).scroll(function () {
          if (jQuery(this).scrollTop() > 500) {
              jQuery('#uc_ue_scroll_to_top_elementor_21b006a').fadeIn(300);
          } else {
              jQuery('#uc_ue_scroll_to_top_elementor_21b006a').fadeOut(300);
          }
  });
    jQuery('#uc_ue_scroll_to_top_elementor_21b006a .ue-scroll-to-cta').click(function () {
                jQuery('body,html').animate({
              scrollTop: 0
         }, 1000 );
                });
});

/* Card Carousel scripts: */ 
jQuery(document).ready(function(){	
function uc_card_carousel_elementor_6e42c5c_start(){      
var objCarousel = jQuery('#uc_card_carousel_elementor_6e42c5c');
        objCarousel.owlCarousel({
          loop: true,
          rtl:false,
          autoplay:true,
          paddingType: "none",    
          autoplayHoverPause:true,
          margin:24,
          navText : ["<i class='fas fa-chevron-left'>","<i class='fas fa-chevron-right'>"],
          nav: false,
          rewindNav : false,
          center:false,
          mouseDrag:true,
          touchDrag:true,                    
          setActiveClassOnMobile:true,
          changeItemOnClick:false,
          autoplayTimeout:3000,
          smartSpeed: 1000,  
          dots:false,
          shuffle:false,
          scrollToHead:false,
          scrollToHeadOffset: 0,                    
          responsive: {
                 0 : {
                      items:1.5,
                      slideBy: 1, 
                  },
                  768 : {
                      items:2,
                      slideBy: 1,
                  },
                  980 : {
                      items:3,
                      slideBy: 1,
                  }  
          }
        });
          objCarousel.trigger("uc-object-ready");
          jQuery(document).trigger("uc-remote-parent-init", [objCarousel]);   
}if(jQuery("#uc_card_carousel_elementor_6e42c5c").length) uc_card_carousel_elementor_6e42c5c_start();
  jQuery( document ).on( 'elementor/popup/show', (event, id, objPopup) => { 
  if(objPopup.$element.has(jQuery("#uc_card_carousel_elementor_6e42c5c")).length) uc_card_carousel_elementor_6e42c5c_start();});	
});

//Remote Arrows Script <script>
  jQuery(document).ready(function () {
    function initArrows(parentid2) {
      var objRemoteApi = new UERemoteWidgets();
      var options = {};
      if (parentid2) {
        options.force_parentid = parentid2;
      }
      objRemoteApi.onWidgetInit("uc_arrow_navigation_elementor_7a19070", function (objWidget) {
        objRemoteApi.setAction("next", ".ue-carousel-next", true);
        objRemoteApi.setAction("prev", ".ue-carousel-prev", true);
      }, options);
    }

    // Inisialisasi pertama
    initArrows();

    // Periksa apakah ada parentid2, jika ya, inisialisasi ulang dengan parentid2
    var objWidget = jQuery("#uc_arrow_navigation_elementor_7a19070");
    var parentid2 = objWidget.data("parentid2");

    if (parentid2) {
      initArrows(parentid2);
    }
  });

//Dialog Library
src="https://biteable.com/wp-content/plugins/elementor/assets/lib/dialog/dialog.min.js?ver=4.9.3"


const hargaSatuan = 2000000; 

// Harga satuan sesuai isi input: Rp 2.000.000
const jumlahInput = document.querySelector('input[type="number"]');
const hargaSatuanInput = document.querySelectorAll('input[readonly]')[0];
const totalHargaInput = document.querySelectorAll('input[readonly]')[2];

// Fungsi untuk menghitung total harga
function updateTotalHarga() {
  let jumlah = parseInt(jumlahInput.value);
  if (isNaN(jumlah) || jumlah < 1) {
    jumlah = 1;
    jumlahInput.value = 1;
  }

  // Ambil angka dari input harga satuan (misalnya "Rp 2.000.000" -> 2000000)
  const hargaSatuanText = hargaSatuanInput.value.replace(/[^\d]/g, '');
  const hargaSatuan = parseInt(hargaSatuanText);

  const total = hargaSatuan * jumlah;
  totalHargaInput.value = `Rp ${total.toLocaleString('id-ID')}`;
}

// Update saat user mengetik jumlah
jumlahInput.addEventListener('input', updateTotalHarga);


// Elements
jumlahInput.addEventListener('input', () => {
  const jumlah = parseInt(jumlahInput.value);
  const total = hargaSatuan * jumlah;
  totalHargaInput.value = `Rp ${total.toLocaleString('id-ID')}`;
});

// API Wilayah: ambil referensi dari emsifa.com
const provinsiSelect = document.querySelector('select:nth-of-type(1)');
const kotaSelect = document.querySelector('select:nth-of-type(2)');
const kecamatanSelect = document.querySelector('select:nth-of-type(3)');

// Load Provinsi
fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
  .then(res => res.json())
  .then(data => {
    data.forEach(prov => {
      const opt = document.createElement('option');
      opt.value = prov.id;
      opt.textContent = prov.name;
      provinsiSelect.appendChild(opt);
    });
  });

// Load Kota berdasarkan Provinsi
provinsiSelect.addEventListener('change', () => {
  kotaSelect.innerHTML = '<option disabled selected>Pilih Kota/Kabupaten</option>';
  kecamatanSelect.innerHTML = '<option disabled selected>Pilih Kecamatan</option>';
  fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinsiSelect.value}.json`)
    .then(res => res.json())
    .then(data => {
      data.forEach(kab => {
        const opt = document.createElement('option');
        opt.value = kab.id;
        opt.textContent = kab.name;
        kotaSelect.appendChild(opt);
      });
    });
});

// Load Kecamatan berdasarkan Kota
kotaSelect.addEventListener('change', () => {
  kecamatanSelect.innerHTML = '<option disabled selected>Pilih Kecamatan</option>';
  fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${kotaSelect.value}.json`)
    .then(res => res.json())
    .then(data => {
      data.forEach(kec => {
        const opt = document.createElement('option');
        opt.value = kec.id;
        opt.textContent = kec.name;
        kecamatanSelect.appendChild(opt);
      });
    });
});
