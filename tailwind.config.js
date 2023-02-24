const colors = {
    'black': '#121212',

    'blue-darkest': '#12283a',
    'blue-darker': '#1c3d5a',
    'blue-dark': '#2779bd',
    'blue': '#3490dc',
    'blue-light': '#6cb2eb',
    'blue-lighter': '#bcdefa',
    'blue-lightest': '#eff8ff',

    'green-darkest': '#0f2f21',
    'green-darker': '#1a4731',
    'green-dark': '#1f9d55',
    'green': '#4bb543',
    'green-light': '#51d88a',
    'green-lighter': '#a2f5bf',
    'green-lightest': '#e3fcec',

    'grey-dark': '#272727',
    'grey': '#363636',
    'grey-light': '#dae1e7',

    'indigo-darkest': '#191e38',
    'indigo-darker': '#2f365f',
    'indigo-dark': '#5661b3',
    'indigo': '#6574cd',
    'indigo-light': '#7886d7',
    'indigo-lighter': '#b2b7ff',
    'indigo-lightest': '#e6e8ff',

    'inherit': 'inherit',

    'orange-darkest': '#462a16',
    'orange-darker': '#613b1f',
    'orange-dark': '#de751f',
    'orange': '#f6993f',
    'orange-light': '#faad63',
    'orange-lighter': '#fcd9b6',
    'orange-lightest': '#fff5eb',

    'pink-darkest': '#451225',
    'pink-darker': '#6f213f',
    'pink-dark': '#eb5286',
    'pink': '#f66d9b',
    'pink-light': '#fa7ea8',
    'pink-lighter': '#ffbbca',
    'pink-lightest': '#ffebef',

    'purple-darkest': '#21183c',
    'purple-darker': '#382b5f',
    'purple-dark': '#794acf',
    'purple': '#9561e2',
    'purple-light': '#a779e9',
    'purple-lighter': '#d6bbfc',
    'purple-lightest': '#f3ebff',

    'red-darkest': '#3b0d0c',
    'red-darker': '#621b18',
    'red-dark': '#cc1f1a',
    'red': '#d50b2e',
    'red-light': '#ef5753',
    'red-lighter': '#f9acaa',
    'red-lightest': '#fcebea',

    'teal-darkest': '#0d3331',
    'teal-darker': '#20504f',
    'teal-dark': '#38a89d',
    'teal': '#4dc0b5',
    'teal-light': '#64d5ca',
    'teal-lighter': '#a0f0ed',
    'teal-lightest': '#e8fffe',

    'transparent': 'transparent',

    'white': '#ffffff',

    'yellow-darkest': '#453411',
    'yellow-darker': '#684f1d',
    'yellow-dark': '#f2d024',
    'yellow': '#ffed4a',
    'yellow-light': '#fff382',
    'yellow-lighter': '#fff9c2',
    'yellow-lightest': '#fcfbeb',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app.vue",
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
    ],
    darkMode: 'class',
    theme: {
        backgroundColors:
            // Background colors
            // Class name: .bg-{color}
            colors,
        backgroundSize: {
            // Background sizes
            // Class name: .bg-{size}
            'auto': 'auto',
            'cover': 'cover',
            'contain': 'contain',
        },
        borderColors: {
            // Border colors
            // Class name: .border-{color}
            colors,
        },
        borderRadius: {
            // Border radius
            // Class name: .rounded{-side?}{-size?}
            'none': '0',
            'sm': '.125rem',
            'default': '.25rem',
            'lg': '.5rem',
            'full': '9999px',
        },
        borderWidths: {
            // Border widths
            // Class name: .border{-side?}{-width?}
            'default': '1px',
            '0': '0',
            '2': '2px',
            '4': '4px',
            '8': '8px',
        },
        fontFamily: {
            // Font families
            // Custom fonts must be imported before usage with Tailwind
            // Class name: .font-{name}
            sans: [
                '-apple-system',
                'BlinkMacSystemFont',
                'Cantarell',
                'Droid Sans',
                'Fira Sans',
                'Graphik',
                'Helvetica Neue',
                'IBM Plex Sans',
                'Oxygen',
                'Roboto',
                'sans-serif',
                'Segoe UI',
                'system-ui',
                'Ubuntu',
            ],
            serif: [
                'Bitstream Vera Serif',
                'Constantia',
                'DejaVu Serif',
                'Georgia',
                'Liberation Serif',
                'Lucida Bright',
                'Lucidabright',
                'Lucida Serif',
                'Lucida',
                'Merriweather',
                'serif',
            ],
            mono: [
                'IBM Plex Mono',
                'Menlo',
                'Monaco',
                'Consolas',
                'Liberation Mono',
                'Courier New',
                'monospace',
                'monospace',
            ],
        },
        fontWeights: {
            // Font weight
            // Class name: .font-{weight}
            'hairline': '100',
            'thin': '200',
            'light': '300',
            'normal': '400',
            'medium': '500',
            'semibold': '600',
            'bold': '700',
            'extrabold': '800',
            'black': '900',
        },
        height: {
            // Height
            // Class name: .h-{size}
            'auto': 'auto',
            'px': '1px',
            '1': '0.25rem',
            '2': '0.5rem',
            '3': '0.75rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '8': '2rem',
            '10': '2.5rem',
            '12': '3rem',
            '16': '4rem',
            '24': '6rem',
            '32': '8rem',
            '48': '12rem',
            '64': '16rem',
            'full': '100%',
            'screen': '100vh',
        },
        leading: {
            // Line height
            // Class name: .leading-{size}
            'none': '1',
            'tighter': '1.125',
            'tight': '1.25',
            'normal': '1.5',
            'loose': '2',
        },
        margin: {
            // Margin
            // Class name: .m{side?}-{size}
            'auto': 'auto',
            'px': '1px',
            '0': '0',
            '1': '0.25rem',
            '2': '0.5rem',
            '3': '0.75rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '8': '2rem',
            '10': '2.5rem',
            '12': '3rem',
            '16': '4rem',
            '20': '5rem',
            '24': '6rem',
            '32': '8rem',
        },
        maxWidth: {
            // Maximum Width
            // Class name: .max-w-{size}
            'xs': '20rem',
            'sm': '30rem',
            'md': '40rem',
            'lg': '50rem',
            'xl': '60rem',
            '2xl': '70rem',
            '3xl': '80rem',
            '4xl': '90rem',
            '5xl': '100rem',
            'full': '100%',
        },
        maxHeight: {
            // Maximum height
            // Class name: .max-h-{size}
            'full': '100%',
            'screen': '100vh',
        },
        minHeight: {
            // Minimum height
            // Class name: .min-h-{size}
            '0': '0',
            'full': '100%',
            'screen': '100vh',
        },
        minWidth: {
            // Minimum width
            // Class name: .min-w-{size}
            '0': '0',
            'full': '100%',
        },
        negativeMargin: {
            // Negative margin
            // Class name: .-m{side?}-{size}
            'px': '1px',
            '0': '0',
            '1': '0.25rem',
            '2': '0.5rem',
            '3': '0.75rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '8': '2rem',
            '10': '2.5rem',
            '12': '3rem',
            '16': '4rem',
            '20': '5rem',
            '24': '6rem',
            '32': '8rem',
        },
        opacity: {
            // Opacity
            // Class name: .opacity-{name}
            '0': '0',
            '25': '.25',
            '50': '.5',
            '75': '.75',
            '100': '1',
        },
        padding: {
            // Padding
            // Class name: .p{side?}-{size}
            'px': '1px',
            '0': '0',
            '1': '0.25rem',
            '2': '0.5rem',
            '3': '0.75rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '8': '2rem',
            '10': '2.5rem',
            '12': '3rem',
            '16': '4rem',
            '20': '5rem',
            '24': '6rem',
            '32': '8rem',
        },
        screens: {
            // @media screen sizes
            // Class name: .{screen}:{utility}
            'mobile': '360px',
            'tablet': '576px',
            'small-monitor': '768px',
            'monitor': '992px',
            'big-monitor': '1200px',
        },
        shadows: {
            // Shadows
            // Class name: .shadow-{size?}
            'default': '0 2px 4px 0 rgba(0,0,0,0.10)',
            'md': '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
            'lg': '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
            'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
            'outline': '0 0 0 3px rgba(52,144,220,0.5)',
            'none': 'none',
        },
        spacing: {
            'px': '1px',
            '0': '0',
            '0.5': '0.125rem',
            '1': '0.25rem',
            '1.5': '0.375rem',
            '2': '0.5rem',
            '2.5': '0.625rem',
            '3': '0.75rem',
            '3.5': '0.875rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '7': '1.75rem',
            '8': '2rem',
            '9': '2.25rem',
            '10': '2.5rem',
            '11': '2.75rem',
            '12': '3rem',
            '14': '3.5rem',
            '16': '4rem',
            '20': '5rem',
            '24': '6rem',
            '28': '7rem',
            '32': '8rem',
            '36': '9rem',
            '40': '10rem',
            '44': '11rem',
            '48': '12rem',
            '52': '13rem',
            '56': '14rem',
            '60': '15rem',
            '64': '16rem',
            '72': '18rem',
            '80': '20rem',
            '96': '24rem',
        },
        textColors:
            // Text colors
            // Class name: .text-{color}
            colors,
        textSizes: {
            // Text sizes
            // Class name: .text-{size}
            'xs': '.75rem', // 12px
            'sm': '.875rem', // 14px
            'base': '1rem', // 16px
            'lg': '1.125rem', // 18px
            'xl': '1.25rem', // 20px
            '2xl': '1.5rem', // 24px
            '3xl': '1.875rem', // 30px
            '4xl': '2.25rem', // 36px
            '5xl': '3rem', // 48px
        },
        tracking: {
            // Letter spacing
            // Class name: .tracking-{size}
            'tight': '-0.05em',
            'normal': '0',
            'wide': '0.05em',
        },
        width: {
            // Width
            // Class name: .w-{size}
            'auto': 'auto',
            'px': '1px',
            '1': '0.25rem',
            '2': '0.5rem',
            '3': '0.75rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '8': '2rem',
            '10': '2.5rem',
            '12': '3rem',
            '16': '4rem',
            '24': '6rem',
            '32': '8rem',
            '48': '12rem',
            '64': '16rem',
            '1/2': '50%',
            '1/3': '33.33333%',
            '2/3': '66.66667%',
            '1/4': '25%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.66667%',
            '5/6': '83.33333%',
            'full': '100%',
            'screen': '100vw',
        },
        zIndex: {
            // Z-index
            // Class name: .z-{index}
            'auto': 'auto',
            '0': '0',
            '10': '10',
            '20': '20',
            '30': '30',
            '40': '40',
            '50': '50',
        },
        extend: {
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};