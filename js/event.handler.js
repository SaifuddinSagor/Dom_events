document.getElementById('btn-update-title').addEventListener('click',function(){
    // console.log('btn clicked')
    const pageTitleElement = document.getElementById('page-title');
    console.log(pageTitleElement);
    pageTitleElement.innerText='Updated page title text'
})
document.getElementById('btn-Login').addEventListener('click',function(){
    // console.log('Login button clicked')
    const userInfoElement = document.getElementById('user-info');
    userInfoElement.innerText = 'user logged In successfully'

})