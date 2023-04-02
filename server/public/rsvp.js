const tasksDOM = document.querySelector('.tasks')
const loadingDOM = document.querySelector('.loading-text')

const showTasks = async () => {
    loadingDOM.style.visibility = 'visible'
    try {
      data = await axios.get('/api/v1/')
    
      data = JSON.stringify(data)
      
    } catch (error) {
      tasksDOM.innerHTML =
        '<h5 class="empty-list">There was an error, please try later....</h5>'
    }
    loadingDOM.style.visibility = 'hidden'
  }
  
  showTasks()