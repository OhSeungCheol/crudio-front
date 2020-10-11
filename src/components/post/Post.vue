<template>
    <div id='top-div'>
        <b-card-group deck>
            <b-card 
            header-tag="header"
            footer-tag="footer"
            v-bind:header="item.id"
            footer="footer & comment"
            >
                <b-card-text>
                    {{item.name}}
                </b-card-text>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
export default {
    props: ['item']
}
</script>

<style scoped>
    #top-div {
        padding-top: 30px;
        padding-bottom: 30px;
        padding-left: 300px;
        padding-right: 300px;
    }
</style>