<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand v-if="!isAuth">
                <router-link to="/login">Login</router-link>
                <router-link to="/registration">Registration</router-link>
            </b-navbar-brand>

            <b-navbar-brand v-if="isAuth">
                <div class="logout" @click="logOut()">Log Out</div>
            </b-navbar-brand>

            <b-navbar-toggle target="nav_collapse"/>

            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="search"/>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    import store from '../store/store'
    import router from '../router/routes'

    export default {
        name: 'nav-header',
        computed: {
            isAuth: () => store.getters['auth/userIsAuthenticated']
        },
        methods: {
            logOut () {
                store.dispatch('auth/logoutUser')
                router.push({ name: 'login'})
            }
        }
    };
</script>

<style scope lang="css">
    .logout:hover {
        cursor: pointer;
        color: red;
    }
</style>
