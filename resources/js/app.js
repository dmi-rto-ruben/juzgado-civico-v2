import './bootstrap';
import '../css/app.css';


// CSS del template
import '../assets/css/style.css'
import '../assets/css/animate.css'

// JS del template (si los necesitas tal cual)
import '../assets/js/perfect-scrollbar.min.js'
import '../assets/js/popper.min.js'
import '../assets/js/alpine.min.js'
import '../assets/js/custom.js'


import.meta.glob([
    '../assets/images/**',
    '../assets/js/*.js'
]);

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
