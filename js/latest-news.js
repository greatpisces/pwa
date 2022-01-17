const offlineNotification = document.getElementById('offline');
const latest = document.getElementById('latest');

registerOnline(() => {
    offlineNotification.className = 'hideOfflineNotification';
}, () => {
    offlineNotification.innerHTML = 'You are currently offline.';
    offlineNotification.className = 'showOfflineNotification';
});

retrieveData('./data/latest.json', function (result) {
    let latestNews = '';
    // Loop through the results
    for (let i = 0; i < result.latestNews.length; i++) {
        latestNews += newsElement(result.latestNews[i]);
    }

    latest.innerHTML = latestNews;
});

function newsElement(news) {
    let title = `<h2><a href="./article.html?id=${news.id}">${news.title}</a></h2>`;
    let description = `<p>${news.description}</p>`;

    return title + description;
}
