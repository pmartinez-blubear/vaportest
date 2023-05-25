import "./bootstrap";
import "../css/app.css";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { 
    faBorderAll, 
    faCar, 
    faCarSide, 
    faFloppyDisk, 
    faHashtag, 
    faInbox, 
    faLink, 
    faList, 
    faPager, 
    faStore, 
    faUserGroup, 
    faXmarkCircle,
    faChevronDown,
    faImage,
    faEdit
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
    faBorderAll, 
    faCarSide, 
    faPager, 
    faCar, 
    faList, 
    faLink, 
    faInbox, 
    faStore, 
    faHashtag, 
    faUserGroup, 
    faFloppyDisk, 
    faXmarkCircle, 
    faChevronDown, 
    faImage,
    faEdit
)

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `../views/cms/Pages/${name}.vue`,
            import.meta.glob("../views/cms/Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .component('font-awesome-icon', FontAwesomeIcon)
            .mount(el);
    },
    progress: {
        color: "#4B5563",
    },
});
