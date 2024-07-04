import { createStore } from "vuex";

// store 만들기
export default createStore({
  state: {
    // initial state
    weatherData: {
      icon: "icon",
      temp: 0,
      text: "text",
      location: "location",
      city: "Seoul",
    },
    toggle: false,
  },
  mutations: {
    // mutations(데이터 변경)
    updateWeather(state, payload) {
      state.weatherData.icon = payload.weather[0].icon;
      state.weatherData.temp = payload.main.temp;
      state.weatherData.text = payload.weather[0].description;
      state.weatherData.location = payload.sys.country;
      state.weatherData.city = payload.name;
    },
    onSearchCity(state, payload) {
      state.weatherData.city = payload;
    },
    toggleButton(state, payload) {
      state.toggle = !state.toggle;
    },
  },
  actions: {
    getWeather(context) {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const API_URI = `https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=${API_KEY}`;
      fetch(API_URI)
        .then((res) => res.json())
        .then((data) => {
          context.commit("updateWeather", data);
        })
        .catch((e) => {
          alert(e);
        });
    },
  },
});
