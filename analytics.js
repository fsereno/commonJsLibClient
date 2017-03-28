
function analytics(obj) {
	
	
    window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
    
    ga('create', obj.code, 'auto');
    ga('send', 'pageview');

}

module.exports = analytics;
