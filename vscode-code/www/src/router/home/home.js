
export default

[
    {
        path: "/one",
        name: 'one',
        component: resolve => require(["@/components/home/one.vue"], resolve)
    },
    {
        path: '/two',
        name: 'two',
        component: resolve => require(["@/components/home/two.vue"], resolve)

    },
    {
        path: '/three',
        name: 'three',
        component: resolve => require(["@/components/home/three.vue"], resolve)

    },
    {
        path: '/four',
        name: 'four',
        component: resolve => require(["@/components/home/four.vue"], resolve)

    }
]
