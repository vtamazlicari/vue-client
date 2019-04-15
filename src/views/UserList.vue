<template>
    <div>
        <md-card v-for="user in users" :key="user.id">
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title">{{user.firstName + ' ' + user.lastName}}</div>
                    <div class="md-subhead">{{ user.email }}</div>
                </md-card-header-text>

                <md-card-media>
                    <img src="../assets/login.png" alt="People">
                </md-card-media>
            </md-card-header>

        </md-card>
    </div>
</template>

<script>
    import store from '../store/store'

    export default {
        name: 'UserList',
        computed: {
            users: () => store.getters['users/users']
        },
        created() {
            store.dispatch('users/setUsers')
        },
    }
</script>
