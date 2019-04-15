import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted)

let closeAction = {
    icon: 'times',
    onClick: (e, toastObject) => {
        toastObject.goAway(0)
    }
}

let defaultOptions = {
    position: 'top-right',
    iconPack: 'fontawesome',
    action: closeAction
}

Vue.toasted.register('success',
    (payload) => payload,
    Object.assign({},
        defaultOptions, {
            type: 'success',
            icon: 'check',
            duration: 4000
        })
)

Vue.toasted.register('info',
    (payload) => payload,
    Object.assign({},
        defaultOptions, {
            type: 'info',
            icon: 'info',
            duration: 4000
        })
)

Vue.toasted.register('error',
    (payload) => payload,
    Object.assign({},
        defaultOptions, {
            type: 'error',
            icon: 'exclamation-circle'
        })
)
