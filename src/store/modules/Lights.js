const state = {
  lights: [
    { color: "red", active: true, time: 3, step: 1 },
    { color: "yellow", active: false, time: 3, step: -1 },
    { color: "green", active: false, time: 3, step: -1 },
  ],
};

const actions = {
  nextLight(state, index) {    
    const { color } = state.state.lights[index];
    if(color === "yellow"){
      mutations.reverse(state)
    }
  }
};

const mutations = {
  offAllActive(state, color) {
    state.lights.forEach((elem)=>{
      if(elem.color === color){
        elem.active = true
      }else{ 
        elem.active = false
      }
    })
  },
  reverse(state) {
      state.state.lights[1].step *= -1
  }
};

const getters = {
  getAllLights: (state) => {
    return state.lights
  }
};
export default {
  state,
  actions,
  mutations,
  getters
}
