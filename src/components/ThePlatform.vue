<template>
        <div class="in-game-list-container">

            <div 
                class="game-item"
                v-for="(obj, gameName) in games" :key="gameName"
            >
                <div class="game-name">
                    {{ gameName }}
                </div>  

                <div style="display:none">
                    {{ obj }}
                </div>

                <button 
                    class="delete-game"
                    @click="deleteGame(gameName)"
                >
                    X
                </button>
            </div>

            <GameDelete
                v-if="showDeleteModal"
                :deleteGameName="deleteGameName"
                @closeGameDelete="closeGameDelete"
                @closeGameDeleteAndDelete="closeGameDeleteAndDelete"

            />

        </div>
</template>

<script>
import GameDelete from 'Components/modals/gameDelete.vue'

export default {

    components: {
        GameDelete,
    },

    props: {
        gamesOfPlatform: Object,
    },

    data() {
        return {
            //gamesOfPlatform: this.gamesOfPlatform,
            games: this.gamesOfPlatform.games,
            showDeleteModal: false,
            deleteGameName: '',
        }
    },

    methods: {

        deleteGame(gameName) {
            console.log('in delete game', gameName);
            this.deleteGameName = gameName;
            this.showDeleteModal = true;
        },

        closeGameDelete() {
            this.showDeleteModal = false;
        },

        closeGameDeleteAndDelete(deleteGameName) {
            console.log('in closeGameDeleteAndDelete', deleteGameName);

            var gameToDelete = {
                platformName: this.gamesOfPlatform.name,
                gameName: deleteGameName,
            }

            this.$root.$emit('deleteGame', gameToDelete);
            this.showDeleteModal = false;
            // alert('not implemented yet');
        }
    },

    created() {
        console.log('in created', this.gamesOfPlatform)
    },
}
</script>   

<style lang="scss" scoped>

.transparant-container {
    height: 50vh;
    transform: translate(-50%, -35%);
    overflow: auto;
    padding: 10px;
}

.in-game-list-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 10px;
    overflow: auto;

    .game-item {
        display: flex;
        justify-content: space-between;
        padding: 15px;
        width: 100%;

        .game-name {
            @apply text-mana;
            text-shadow: 0 0 1px #03e9f4;
            cursor: pointer;
            
            &:hover{
                @apply text-mana;
                text-shadow: 0 0 3px #03e9f4;
            }
        }

        .delete-game {
            color: red;
            text-shadow: 0 0 1px #f40303;
            transition: all .5s ease;

            &:hover {
                color: red;
                text-shadow: 0 0 5px #f40303;
                transform: scale(1.1);;
            }
        }
    }
}

</style>