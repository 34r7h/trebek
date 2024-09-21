<template>
    <div
        style="display: flex; flex-direction: column; justify-content: center; height: 90vh;">
        <div style="flex: 2; width: 90vw; display: flex; justify-content: space-evenly; padding: 4px; background: rgba(0,0,150, .8)">
            <div style="display: flex; flex-direction: column; justify-content: space-around; padding: 4px;" v-for="(answers, topic) in $store.gamestate.answers"
                :key="topic">
                <i>{{ topic }}</i>
                <h2 @click="$store.show[topic + price] = !$store.show[topic + price]"
                    v-for="(answer, price) in answers">
                    <span v-if="!$store.show[topic + price]">{{ price }}</span>
                    <span style="font-size: 14px;" v-else>{{ answer }}</span>
                </h2>
            </div>
        </div>
        <div style="display: flex; flex: 1; justify-content: space-around; width: 90vw; ">
            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;"
                v-for="(player, playerkey) in $store.gamestate.players" :key="playerkey">
                <img style="width: 60px; height: 60px; border-radius: 50%;" :src="player.avatar">
                <h3>{{ playerkey }}</h3>
                <div>{{ player.score }}</div>
            </div>
        </div>
    </div>
</template>