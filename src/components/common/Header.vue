<template>
    <v-app-bar app clipped-left color="teal accent-3">
        <v-btn
        elevation="2"
        small
        fab
        to="/"
        @click="selectExternalTab"
        >
            <v-icon>mdi-cursor-default</v-icon>
        </v-btn>

        <v-toolbar-title style="padding: 10px">
            <h4>
                Crudio
            </h4>
        </v-toolbar-title>

        <v-tabs v-model="selectedTab" align-with-title>
            <v-tab class="pa-0 ma-0" style="min-width:0px" key='0'/>
            <v-tab to="news" tag="div">News</v-tab>
            <v-tab to="posts" tag="div">Posts</v-tab>
            <v-tab to="about" tag="div">About</v-tab>
        </v-tabs>

        <v-btn icon to="myPage" @click="selectExternalTab">
            <v-icon >mdi-account</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
    import mainRouter from '../../router/MainRouter';
    export default {
        data: () => ({
            selectedTab: 0,
        }),
        methods: {
            // 각 탭을 선택 시, 언더라인 효과가 생김. 
            // 크기 0의 탭을 생성 하여, 메인화면 이동 시 해당 더미 탭이 선택되어 언더라인이 안보이도록 작업
            selectExternalTab() {
                this.selectedTab = 0;
            }
        },
        components: mainRouter,
    }
</script>

<style scoped>
</style>