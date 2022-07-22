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
                <div v-for="item in items" :key="item.id" style="margin-bottom: 30px; margin-top: 30px">
                    <card
                        @deleteCard="deleteCard"
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
import { getCardList, saveCard, deleteCard } from '../api';

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
            saveCard(card)
            .then((response) => {
                // 서버에 카드 추가 작업 성공 시, 웹 뷰에도 추가
                if(response.status == 200){
                    this.items.push(card);
                } else {
                    alert(response.status);
                }
            })
            .catch((error) => {
                alert(error);
                console.log(error);
            })
        },
        deleteCard(id) {
            deleteCard(id)
            .then((response) => {
                if(response.status == 200){
                    // 웹뷰에서 아이템 삭제
                    this.items.forEach((item, index) => {
                        if(item.id == id){
                            this.items.splice(index, 1);
                            return;
                        }
                    });
                    alert('success');
                } else {
                    alert('fail');
                }
            })
            .catch((error) => {
                alert(error);
            })
        }
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