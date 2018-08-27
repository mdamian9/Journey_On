import axios from 'axios';

export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/test/${id}`);
  },
  // Gets a single user by id
  getUserName: (id) => {
    return axios.get(`/api/username/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post('/api/signup', {username: username, email: email, password: password});
  },
  
  updateLogin: (id) => {
    return axios.post(`/api/update`, {_id: id, updatedAt: Date.now()});
  },

  addGoal: (journeyName, journeySummary, completeBy, email) => {
    return axios.post('/api/addgoal', {journeyName: journeyName, journeySummary: journeySummary, completeBy: completeBy, email: email});
  },

  loginUser: (email, password) => {
    return axios.post('/api/login', {email: email, password: password});
  },

  deleteGoal: (email) => {
    return axios.post('/api/deletejourney', {email: email})
  },

  // addTask: (taskTitle, taskDescription, taskLabel, journeyId) => {
  //   return axios.post('/api/addtask', {taskTitle: taskTitle, taskDescription: taskDescription, taskLabel: taskLabel, journeyId: journeyId});
  // },

  addTask: (taskTitle, taskDescription, taskLabel, journeyId) => {
    return axios.post('/api/addtask', {taskTitle: taskTitle, taskDescription: taskDescription, taskLabel: taskLabel, journeyId: journeyId});
  },


  addVideo: (videoUrl, journeyId) => {
    return axios.post('/api/videos', {videoUrl: videoUrl, journeyId: journeyId});
  }
};

//
