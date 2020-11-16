import { fetchQqMusic } from '@/utils/api'
export default {
    namespaced: true, //开启命名空间
    state: {

        musicList: []
    },
    mutations: {
        updatedMusicList(state, payload) { //将数据更新到state
            state.musicList = payload
        }
    },
    actions: {
        getMusic(store, payload) {
            fetchQqMusic(payload).then(res => { //拿到数据放到mutations

                store.commit("updatedMusicList", res.song.list)
            })


        }
    }
}