/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'arrow_up': '&#xe9a2;',
            'arrow_down': '&#xe9a3;',
            'arrow_right': '&#xe9a0;',
            'arrow_left': '&#xe9a1;',
            'send': '&#xe900;',
            'insights': '&#xe99c;',
            'popular': '&#xe99d;',
            'live': '&#xe99e;',
            'choose': '&#xe99b;',
            'castsync': '&#xe999;',
            'castrdna': '&#xe99a;',
            'block': '&#xe998;',
            'versus': '&#xe91f;',
            'vs': '&#xe91f;',
            'fanbet': '&#xe96f;',
            'bets_complete': '&#xe995;',
            'bets_current': '&#xe996;',
            'leave': '&#xe997;',
            'badminton': '&#xe98e;',
            'bowling': '&#xe98f;',
            'racing': '&#xe990;',
            'fighting': '&#xe991;',
            'billiards': '&#xe992;',
            'golf': '&#xe993;',
            'boxing': '&#xe98a;',
            'hockey': '&#xe97f;',
            'baseball': '&#xe980;',
            'volleyball': '&#xe97e;',
            'tennis': '&#xe97c;',
            'soccer': '&#xe982;',
            'basketball': '&#xe981;',
            'football': '&#xe97d;',
            'esports': '&#xe97b;',
            'keyboard_show': '&#xe994;',
            'keyboard_hide': '&#xe98b;',
            'cart_add': '&#xe903;',
            'cart': '&#xe985;',
            'dashboard': '&#xe957;',
            'global': '&#xe96d;',
            'achievements': '&#xe971;',
            'highlights': '&#xe972;',
            'fav_filled': '&#xe973;',
            'fav_empty': '&#xe975;',
            'favorite_border': '&#xe975;',
            'star_rate': '&#xe986;',
            'list_view': '&#xe91b;',
            'activity_log': '&#xe91b;',
            'fanz_circle': '&#xe902;',
            'fan': '&#xe96b;',
            'fanwallet': '&#xe947;',
            'fanpay': '&#xe989;',
            'fanprizes': '&#xe984;',
            'fanexchange': '&#xe988;',
            'mint': '&#xe976;',
            'collapse': '&#xe977;',
            'expand': '&#xe978;',
            'donut': '&#xe979;',
            'shipping': '&#xe983;',
            'spotlight': '&#xe970;',
            'event_spotlight': '&#xe970;',
            'scan_qr': '&#xe96e;',
            'qr': '&#xe954;',
            'event': '&#xe96a;',
            'broadcast': '&#xe96a;',
            'lock': '&#xe929;',
            'locked': '&#xe929;',
            'private': '&#xe929;',
            'unlock': '&#xe967;',
            'unlocked': '&#xe967;',
            'presentation': '&#xe968;',
            'terms': '&#xe969;',
            'document': '&#xe965;',
            'file': '&#xe965;',
            'youtube': '&#xe958;',
            'telegram': '&#xe95d;',
            'magic': '&#xe95e;',
            'visibility': '&#xe95f;',
            'maintain': '&#xe963;',
            'wallet': '&#xe953;',
            'offers': '&#xe955;',
            'instant': '&#xe956;',
            'personalize': '&#xe950;',
            'trade': '&#xe952;',
            'replay': '&#xe933;',
            'history': '&#xe97a;',
            'ticker': '&#xe951;',
            'coin': '&#xe94b;',
            'money': '&#xe94c;',
            'cash': '&#xe94c;',
            'tip': '&#xe94d;',
            'tip_leader': '&#xe94e;',
            'embed': '&#xe948;',
            'obs': '&#xe949;',
            'download': '&#xe94a;',
            'share': '&#xe92b;',
            'share_arrow': '&#xe942;',
            'filter': '&#xe960;',
            'gender_male': '&#xe93f;',
            'gender_female': '&#xe93e;',
            'gender_all': '&#xe93d;',
            'gender_neutral': '&#xe961;',
            'add_a_photo': '&#xe904;',
            'mic': '&#xe906;',
            'game': '&#xe906;',
            'gavel': '&#xe907;',
            'legal': '&#xe907;',
            'menu': '&#xe909;',
            'see_more': '&#xe92a;',
            'more_horiz': '&#xe92a;',
            'complete': '&#xe905;',
            'check': '&#xe905;',
            'link': '&#xe90a;',
            'textsms': '&#xe90b;',
            'delete': '&#xe910;',
            'email': '&#xe90c;',
            'mail_outline': '&#xe90c;',
            'laptop': '&#xe90d;',
            'mobile': '&#xe90f;',
            'smartphone': '&#xe90f;',
            'notifications': '&#xe913;',
            'add': '&#xe916;',
            'close': '&#xe92d;',
            'up': '&#xe94f;',
            'chevron_up': '&#xe94f;',
            'back': '&#xe917;',
            'chevron_left': '&#xe917;',
            'hide': '&#xe901;',
            'chevron_down': '&#xe901;',
            'continue': '&#xe918;',
            'chevron_right': '&#xe918;',
            'comment': '&#xe919;',
            'leaderboard': '&#xe912;',
            'phone': '&#xe91a;',
            'discover': '&#xe914;',
            'search': '&#xe914;',
            'help': '&#xe911;',
            'help_circle': '&#xe911;',
            'info_circle': '&#xe93c;',
            'info': '&#xe93c;',
            'settings': '&#xe915;',
            'google_auth': '&#xe98c;',
            'google': '&#xe98d;',
            'facebook': '&#xe91e;',
            'twitter': '&#xe91c;',
            'instagram': '&#xe908;',
            'linkedin': '&#xe95a;',
            'reddit': '&#xe95c;',
            'medium': '&#xe95b;',
            'apple': '&#xe91d;',
            'github': '&#xe959;',
            'android': '&#xe966;',
            'bitcoin_talk': '&#xe96c;',
            'home': '&#xe920;',
            'flag': '&#xe927;',
            'report': '&#xe927;',
            'tix': '&#xe92c;',
            'ticket': '&#xe92c;',
            'tickets': '&#xe92c;',
            'tix_add': '&#xe974;',
            'stats': '&#xe923;',
            'trending_up': '&#xe923;',
            'tv': '&#xe924;',
            'digital_gift': '&#xe926;',
            'headset': '&#xe928;',
            'headset_mic': '&#xe928;',
            'chat': '&#xe925;',
            'flip_cam': '&#xe92e;',
            'mute_mic': '&#xe92f;',
            'mic_off': '&#xe92f;',
            'sound_up': '&#xe945;',
            'volume_up': '&#xe945;',
            'sound_down': '&#xe943;',
            'volume_down': '&#xe943;',
            'sound_mute': '&#xe944;',
            'volume_mute': '&#xe944;',
            'wifi': '&#xe934;',
            'edit': '&#xe935;',
            'mode_edit': '&#xe935;',
            'profile': '&#xe932;',
            'account_circle': '&#xe932;',
            'contacts': '&#xe941;',
            'viewer': '&#xe936;',
            'viewers': '&#xe936;',
            'person': '&#xe936;',
            'account_alert': '&#xe964;',
            'unfollow': '&#xe922;',
            'person_remove': '&#xe922;',
            'follow': '&#xe921;',
            'person_add': '&#xe921;',
            'new_fans': '&#xe90e;',
            'people': '&#xe90e;',
            'community': '&#xe987;',
            'end': '&#xe938;',
            'stop': '&#xe938;',
            'play_arrow': '&#xe937;',
            'play_circle': '&#xe93b;',
            'play_circle_outline': '&#xe93b;',
            'pause': '&#xe931;',
            'pause_circle': '&#xe940;',
            'pause_circle_outline': '&#xe940;',
            'go_live': '&#xe939;',
            'videocam': '&#xe939;',
            'pip': '&#xe930;',
            'pip_mid': '&#xe93a;',
            'pip_fat': '&#xe946;',
            'spacer': '&#xe962;',
            'sportscastr': '&#xe99f;',
            'sc_logomark': '&#xe99f;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
