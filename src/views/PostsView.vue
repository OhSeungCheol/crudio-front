<template>
    <v-main>
        <div style="display: flex; background-color:#f4f4f4">

            <div style=" flex:2;">
                <!-- 여백 -->
            </div>

            <div class="child" style="flex:4;">
                <creator
                    @addPostCard="addPostCard"
                ></creator>
                <div v-for="item in items.slice().reverse()" :key="item.id" style="margin-bottom: 30px; margin-top: 30px">
                    <card
                        v-bind:item="item"
                    ></card>
                </div>
            </div>

            <div style="flex:2;">
                <!-- 여백 -->
            </div>

        </div>
    </v-main>
</template>

<script>
import Card from '../components/card/Card.vue';
import Creator from '../components/card/Creator.vue';
import { getCardList } from '../api';

export default {
    components: {
        Creator,
        Card
    },
    data: () => {
        return {
            items: [],
            message: '',
        }
    },
    methods: {
        addPostCard(card){
            // create PostCard By API
            // if success, reload items
            this.items.push(card);
        },
    },
    created() {
        getCardList()
        .then((response) => {
            this.items.push(...response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }
}
</script>

<style scoped>
</style>