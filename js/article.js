const offlineNotification = document.getElementById('offline');
const article = document.getElementById('article');
const articleTitle = document.getElementById('article-title');

registerOnline(() => {
    offlineNotification.className = 'hideOfflineNotification';
}, () => {
    offlineNotification.innerHTML = 'You are currently offline.';
    offlineNotification.className = 'showOfflineNotification';
});

findGetParameter('id', value => {
    let articleUrl = `./data/data-${value}.json`;
    retrieveData(articleUrl, result => {
        article.innerHTML = result.description;
        articleTitle.innerHTML = result.title;
    });
});
