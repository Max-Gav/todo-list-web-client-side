export default () => {
  self.addEventListener('message', (event) => {
    const notificationTime = event.data.notificationTime;
    setTimeout(() => {
      delete event.data.notificationTime;
      self.postMessage(event.data);
  }, notificationTime);
  });
  
};