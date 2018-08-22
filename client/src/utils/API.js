import axios from 'axios';

export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post('api/signup', {username: username, email: email, password: password});
  },
  addGoal: (journeyName, journeySummary, completeBy, email) => {
    return axios.post('api/addgoal', {journeyName: journeyName, journeySummary: journeySummary, completeBy: completeBy, email: email});
  }
};
